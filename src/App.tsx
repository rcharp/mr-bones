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
import StumpRemovalPage from "./pages/StumpRemovalPage";
import SarasotaPage from "./pages/areas/SarasotaPage";
import BradentonPage from "./pages/areas/BradentonPage";
import VenicePage from "./pages/areas/VenicePage";
import ArcadiaPage from "./pages/areas/ArcadiaPage";
import WauchulaPage from "./pages/areas/WauchulaPage";
import GalleryPage from "./pages/GalleryPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import QuotePage from "./pages/QuotePage";
import BlogPage from "./pages/BlogPage";
import BlogPostPage from "./pages/BlogPostPage";
import GetYourDiscountPage from "./pages/GetYourDiscountPage";
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

const runtimeBasename =
  typeof window !== "undefined" && window.location.hostname === "rcharp.github.io"
    ? "/mr-bones"
    : "";

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename={runtimeBasename}>
        <InternalAnchorRouter />
        <QuoteModalProvider>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/quote" element={<QuotePage />} />
            <Route path="/review" element={<ReviewPage />} />
            <Route path="/services/stump-grinding" element={<StumpGrindingPage />} />
            <Route path="/services/stump-removal" element={<StumpRemovalPage />} />
            <Route path="/areas/sarasota" element={<SarasotaPage />} />
            <Route path="/areas/bradenton" element={<BradentonPage />} />
            <Route path="/areas/venice" element={<VenicePage />} />
            <Route path="/areas/arcadia" element={<ArcadiaPage />} />
            <Route path="/areas/wauchula" element={<WauchulaPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/tips" element={<BlogPage />} />
            <Route path="/tips/:slug" element={<BlogPostPage />} />
            <Route path="/get-your-discount" element={<GetYourDiscountPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </QuoteModalProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
