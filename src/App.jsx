import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { lazy, Suspense, useEffect, useRef } from 'react'
import Lenis from 'lenis'
import { Toaster } from 'react-hot-toast'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import ProtectedRoute from './components/ProtectedRoute'
import useAuthStore from './store/authStore'

const Home = lazy(() => import('./pages/Home'))
const Experience = lazy(() => import('./pages/Experience'))
const Menu = lazy(() => import('./pages/Menu'))
const Entertainment = lazy(() => import('./pages/Entertainment'))
const Gallery = lazy(() => import('./pages/Gallery'))
const FAQ = lazy(() => import('./pages/FAQ'))
const Contact = lazy(() => import('./pages/Contact'))
const Booking = lazy(() => import('./pages/Booking'))
const Login = lazy(() => import('./pages/Login'))
const Register = lazy(() => import('./pages/Register'))
const Dashboard = lazy(() => import('./pages/Dashboard'))
const NotFound = lazy(() => import('./pages/NotFound'))
const AdminDashboard = lazy(() => import('./pages/admin/Dashboard'))

// VFSC Pages
const VfscDetailPage = lazy(() => import('./pages/vfsc/VfscDetailPage'))
const Accommodation = lazy(() => import('./pages/vfsc/Accommodation'))
const WineAndDine = lazy(() => import('./pages/vfsc/WineAndDine'))
const FunctionsAndEvents = lazy(() => import('./pages/vfsc/FunctionsAndEvents'))
const Activities = lazy(() => import('./pages/vfsc/Activities'))
const ActivityDetail = lazy(() => import('./pages/vfsc/ActivityDetail'))
const AboutUs = lazy(() => import('./pages/vfsc/AboutUs'))
const News = lazy(() => import('./pages/vfsc/News'))
const NewsArticle = lazy(() => import('./pages/vfsc/NewsArticle'))
const TravelTrade = lazy(() => import('./pages/vfsc/TravelTrade'))

const queryClient = new QueryClient()

function AppContent() {
  const location = useLocation()
  const isDashboard = location.pathname.startsWith('/dashboard') ||
    location.pathname.startsWith('/login') ||
    location.pathname.startsWith('/register') ||
    location.pathname.startsWith('/admin')

  return (
    <div className="min-h-screen flex flex-col">
      {!isDashboard && <Navbar />}
      <main className="flex-1">
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/entertainment" element={<Entertainment />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/booking" element={<ProtectedRoute><Booking /></ProtectedRoute>} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard/*" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
            <Route path="/admin" element={<ProtectedRoute adminOnly><AdminDashboard /></ProtectedRoute>} />

            {/* VFSC Routes */}
            <Route path="/accommodation" element={<Accommodation />} />
            <Route path="/accommodation/victoria-falls-safari-club" element={<VfscDetailPage dataKey="safariClub" />} />
            <Route path="/accommodation/victoria-falls-safari-lodge" element={<VfscDetailPage dataKey="safariLodge" />} />
            <Route path="/accommodation/victoria-falls-safari-suites" element={<VfscDetailPage dataKey="safariSuites" />} />
            <Route path="/accommodation/lokuthula-lodges" element={<VfscDetailPage dataKey="lokuthulaLodges" />} />

            <Route path="/wine-and-dine" element={<WineAndDine />} />
            <Route path="/wine-and-dine/buffalo-bar" element={<VfscDetailPage dataKey="buffaloBar" />} />
            <Route path="/wine-and-dine/makuwa-kuwa-restaurant" element={<VfscDetailPage dataKey="makuwaKuwa" />} />
            <Route path="/wine-and-dine/the-boma-cafe" element={<VfscDetailPage dataKey="bomaCafe" />} />

            <Route path="/functions-and-events" element={<FunctionsAndEvents />} />
            <Route path="/functions-and-events/conferences" element={<VfscDetailPage dataKey="conferences" />} />
            <Route path="/functions-and-events/weddings" element={<VfscDetailPage dataKey="weddings" />} />
            <Route path="/functions-and-events/incentive-travel" element={<VfscDetailPage dataKey="incentiveTravel" />} />
            <Route path="/functions-and-events/queen-nandi-place" element={<VfscDetailPage dataKey="queenNandiPlace" />} />

            <Route path="/activities" element={<Activities />} />
            <Route path="/activities/:slug" element={<ActivityDetail />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/news" element={<News />} />
            <Route path="/news/:slug" element={<NewsArticle />} />
            <Route path="/travel-trade" element={<TravelTrade />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      {!isDashboard && <Footer />}
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            background: 'transparent',
            boxShadow: 'none',
            padding: 0,
          },
        }}
      />
    </div>
  )
}

export default function App() {
  const lenisRef = useRef(null)
  const initialize = useAuthStore((s) => s.initialize)

  useEffect(() => {
    const unsubscribe = initialize()
    return () => { if (typeof unsubscribe === 'function') unsubscribe() }
  }, [initialize])

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })
    lenisRef.current = lenis

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <ScrollToTop />
        <AppContent />
      </Router>
    </QueryClientProvider>
  )
}
