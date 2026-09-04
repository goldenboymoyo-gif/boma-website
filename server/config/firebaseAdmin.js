import admin from 'firebase-admin';

let app;

/**
 * Initialises the Firebase Admin SDK used to verify social-login ID tokens
 * (`signInWithPopup` from the browser). Credentials come from env:
 *   - FIREBASE_SERVICE_ACCOUNT (JSON string / base64-encoded JSON), OR
 *   - GOOGLE_APPLICATION_CREDENTIALS (path to a service-account JSON file)
 */
function initFirebaseAdmin() {
  if (app) return app;

  if (!process.env.FIREBASE_SERVICE_ACCOUNT && !process.env.GOOGLE_APPLICATION_CREDENTIALS) {
    // No admin credentials configured; social login will report a clear error.
    console.warn('Firebase Admin SDK not configured — social (Google/Facebook) sign-in will be unavailable');
    return null;
  }

  try {
    let credentialOptions;
    if (process.env.FIREBASE_SERVICE_ACCOUNT) {
      const raw = process.env.FIREBASE_SERVICE_ACCOUNT;
      let serviceAccount;
      try {
        serviceAccount = JSON.parse(raw);
      } catch {
        serviceAccount = JSON.parse(Buffer.from(raw, 'base64').toString('utf-8'));
      }
      credentialOptions = admin.credential.cert(serviceAccount);
    } else {
      credentialOptions = admin.credential.applicationDefault();
    }

    app = admin.initializeApp({
      credential: credentialOptions,
    });
    return app;
  } catch (error) {
    console.error('Failed to initialise Firebase Admin SDK:', error.message);
    return null;
  }
}

export function verifyIdToken(idToken) {
  const adminApp = initFirebaseAdmin();
  if (!adminApp) {
    throw new Error('Social sign-in is not configured on the server');
  }
  return admin.auth().verifyIdToken(idToken);
}
