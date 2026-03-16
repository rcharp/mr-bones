import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { QuoteModalProvider } from "./components/QuoteModal";
import Index from "./pages/Index";
import ReviewPage from "./pages/ReviewPage";
import StumpGrindingPage from "./pages/StumpGrindingPage";
import RootRemovalPage from "./pages/RootRemovalPage";
import LandClearingPage from "./pages/LandClearingPage";
import StormCleanupPage from "./pages/StormCleanupPage";
import SarasotaPage from "./pages/areas/SarasotaPage";
import BradentonPage from "./pages/areas/BradentonPage";
import VenicePage from "./pages/areas/VenicePage";
import PalmettoPage from "./pages/areas/PalmettoPage";
import NorthPortPage from "./pages/areas/NorthPortPage";
import GalleryPage from "./pages/GalleryPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import QuotePage from "./pages/QuotePage";
import BlogPage from "./pages/BlogPage";
import BlogPostPage from "./pages/BlogPostPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const InternalAnchorRouter = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.altKey || event.ctrlKey || event.shiftKey) return;
      const target = event.target as HTMLElement | null;
      const anchor = target?.closest('a[href^="/"]') as HTMLAnchorElement | null;
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (!href || href.startsWith("//")) return;
      if (anchor.target && anchor.target !== "_self") return;
      if (anchor.hasAttribute("download")) return;
      event.preventDefault();
      navigate(href);
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [navigate]);
  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename={import.meta.env.BASE_URL.replace(/\/$/, "")}>
        <InternalAnchorRouter />
        <QuoteModalProvider>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/quote" element={<QuotePage />} />
            <Route path="/review" element={<ReviewPage />} />
            <Route path="/services/stump-grinding" element={<StumpGrindingPage />} />
            <Route path="/services/root-removal" element={<RootRemovalPage />} />
            <Route path="/services/land-clearing" element={<LandClearingPage />} />
            <Route path="/services/storm-cleanup" element={<StormCleanupPage />} />
            <Route path="/areas/sarasota" element={<SarasotaPage />} />
            <Route path="/areas/bradenton" element={<BradentonPage />} />
            <Route path="/areas/venice" element={<VenicePage />} />
            <Route path="/areas/palmetto" element={<PalmettoPage />} />
            <Route path="/areas/north-port" element={<NorthPortPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </QuoteModalProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
