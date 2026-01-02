import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { WhatsAppCta } from "@/components/ui/whatsapp-cta";
import { PlanTripModal } from "@/components/sections/plan-trip-modal";
import { ScrollToTop } from "@/components/layout/scroll-to-top";
import { Loader2 } from "lucide-react";

// Lazy load pages
const Home = lazy(() => import("@/pages/Home"));
const Destinations = lazy(() => import("@/pages/Destinations"));
const DestinationDetail = lazy(() => import("@/pages/DestinationDetail"));
const Packages = lazy(() => import("@/pages/Packages"));
const PackageDetail = lazy(() => import("@/pages/PackageDetail"));
const About = lazy(() => import("@/pages/About"));
const Blog = lazy(() => import("@/pages/Blog"));
const BlogPost = lazy(() => import("@/pages/BlogPost"));
const Contact = lazy(() => import("@/pages/Contact"));
const FAQ = lazy(() => import("@/pages/FAQ"));
const Privacy = lazy(() => import("@/pages/Privacy"));
const Terms = lazy(() => import("@/pages/Terms"));
const Cancellation = lazy(() => import("@/pages/Cancellation"));
const Gallery = lazy(() => import("@/pages/Gallery"));
const Reviews = lazy(() => import("@/pages/Reviews"));
const Experiences = lazy(() => import("@/pages/Experiences"));
const Sitemap = lazy(() => import("@/pages/Sitemap"));
const DestinationWeddings = lazy(() => import("@/pages/DestinationWeddings"));

// Loading Fallback
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-background-dark">
    <Loader2 className="w-10 h-10 text-primary animate-spin" />
  </div>
);

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-background-dark text-text-dark font-sans">
        <Navbar />
        <main className="flex-grow">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/destinations" element={<Destinations />} />
              <Route path="/destinations/:id" element={<DestinationDetail />} />
              <Route path="/packages" element={<Packages />} />
              <Route path="/packages/:id" element={<PackageDetail />} />
              <Route path="/about" element={<About />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:id" element={<BlogPost />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/privacy-policy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/cancellation-policy" element={<Cancellation />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/reviews" element={<Reviews />} />
              <Route path="/experiences" element={<Experiences />} />
              <Route path="/sitemap" element={<Sitemap />} />
              <Route path="/destination-weddings" element={<DestinationWeddings />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <WhatsAppCta />
        <PlanTripModal />
      </div>
    </Router>
  );
}

export default App;
