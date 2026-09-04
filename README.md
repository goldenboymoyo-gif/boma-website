# The Boma — Dinner & Drum Show

Official website for **The Boma**, a fusion of Zimbabwean cuisine, cultural dance and
interactive drumming at Victoria Falls Safari Lodge.

## Tech Stack

**Frontend** (repo root)

- React 19 + Vite 8
- Tailwind CSS 4 + Framer Motion
- React Router 7, Zustand, React Hook Form
- Firebase client SDK — used *only* for Google/Facebook social sign-in

**Backend** (`server/`)

- Express 4 + Mongoose (MongoDB)
- JWT auth (`jsonwebtoken`) with `protect`/`authorize` middleware
- `firebase-admin` — verifies social-login ID tokens issued by the Firebase client
- Nodemailer (contact/enquiry email), Cloudinary, Multer

## Authentication Model (hybrid)

- **Email/password** → handled entirely by Express + MongoDB (`/api/auth/register|login`).
- **Google/Facebook** → the browser signs in with Firebase (`signInWithPopup`) and sends
  the ID token to `POST /api/auth/social`. The server verifies it with `firebase-admin`
  and creates/links a matching MongoDB user, then issues the app's own JWT.
- Sessions persist via a JWT stored in `localStorage` and restored through `/api/auth/me`.

## Project Structure

```
├── src/                 # React app
│   ├── pages/           # Home, Menu, Booking, admin tabs, vfsc/* …
│   ├── components/      # Navbar, Footer, VideoHero, …
│   ├── lib/             # api.js, http.js, firebase.js
│   ├── store/           # authStore (zustand)
│   └── data/            # static site content
├── server/              # Express API
│   ├── models/          # User, Booking, Message, Gallery, News, Event, MenuItem, SiteContent
│   ├── routes/          # auth, bookings, contact, gallery, news, events, menu, site-content, admin
│   ├── config/          # db, firebaseAdmin
│   └── index.js         # app entry — serves /api/* and the built SPA (dist/)
├── render.yaml          # single-service Render deployment
└── vite.config.js       # /api → localhost:5000 dev proxy
```

## Local Development

Requirements: Node 18+, a MongoDB instance.

```bash
# 1. Install dependencies
npm install
npm --prefix server install

# 2. Configure environment
#    server/.env — MONGODB_URI, JWT_SECRET, JWT_EXPIRE (+ optional email/cloudinary keys)

# 3a. Frontend dev server (proxies /api to :5000)
npm run dev

# 3b. Backend
npm --prefix server run dev
```

- Frontend dev server: http://localhost:5173
- API: http://localhost:5000/api

To test the full production build locally (Express serving both the SPA and the API):

```bash
npm run build
npm --prefix server run start   # open http://localhost:5000
```

The client always calls `/api` on the same origin: Vite proxies it in dev, Express
serves it in production.

## Environment Variables

**`server/.env` / Render dashboard**

| Variable | Required | Description |
|---|---|---|
| `MONGODB_URI` | ✓ | MongoDB connection string |
| `JWT_SECRET` | ✓ | Secret used to sign auth tokens |
| `JWT_EXPIRE` | | Token lifetime (default `7d`) |
| `NODE_ENV` | | `production` on Render |
| `FIREBASE_SERVICE_ACCOUNT` | for social | Firebase service-account JSON (or base64) — used to verify social ID tokens. Falls back to `GOOGLE_APPLICATION_CREDENTIALS`. |

Firebase client config lives in `src/lib/firebase.js` (project `boma-experience`).

## Deployment (Render — single service)

`render.yaml` defines one web service that installs dependencies, builds the React app
to `dist/`, and starts Express — which serves both the API and the SPA.

- Build command: `npm install && npm run build && npm --prefix server install`
- Start command: `npm --prefix server run start`

MongoDB and secret values are supplied via the Render dashboard (`MONGODB_URI`,
`JWT_SECRET`, `FIREBASE_SERVICE_ACCOUNT`).

### First-time social sign-in checklist

1. In the Firebase console → **Authentication → Sign-in method**: enable **Google** and **Facebook**.
2. **Authentication → Settings → Authorized domains**: add the Render domain (e.g.
   `your-app.onrender.com`) and any custom domain so `signInWithPopup` is allowed.
3. Generate a service-account key (Firebase → Project settings → Service accounts) and
   paste it into `FIREBASE_SERVICE_ACCOUNT`.

## Useful Scripts

| Command | Description |
|---|---|
| `npm run dev` | Vite dev server (proxies `/api`) |
| `npm run build` | Production build → `dist/` |
| `npm run lint` | Oxlint |
| `npm --prefix server run start` | Run the Express server (serves `dist/` + `/api`) |
| `npm --prefix server run dev` | Express with auto-restart |