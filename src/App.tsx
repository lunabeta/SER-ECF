import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AuthProvider } from "@/hooks/useAuth";
import RequireAdmin from "@/components/RequireAdmin";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import About from "./pages/About.tsx";
import Media from "./pages/Media.tsx";
import Auth from "./pages/Auth.tsx";
import Donate from "./pages/Donate.tsx";
import AdminChecklist from "./pages/AdminChecklist.tsx";
import AdminDashboard from "./pages/AdminDashboard.tsx";
import AdminMedia from "./pages/AdminMedia.tsx";
import History from "./pages/History.tsx";
import Careers from "./pages/Careers.tsx";
import Chaplaincy from "./pages/Chaplaincy.tsx";
import CPECenter from "./pages/CPECenter.tsx";
import GlobalPastors from "./pages/GlobalPastors.tsx";
import Missionaries from "./pages/Missionaries.tsx";
import MinistryLeadership from "./pages/MinistryLeadership.tsx";
import MinistryDetail from "./pages/MinistryDetail.tsx";
import Apparel from "./pages/Apparel.tsx";
import PrayerRequest from "./pages/PrayerRequest.tsx";
import Events from "./pages/Events.tsx";
import PartnershipsPage from "./pages/PartnershipsPage.tsx";
import ContactPage from "./pages/ContactPage.tsx";
import Leadership from "./pages/Leadership.tsx";
import Terms from "./pages/Terms.tsx";
import Developer from "./pages/Developer.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/history" element={<History />} />
            <Route path="/leadership" element={<Leadership />} />
            <Route path="/media" element={<Media />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/chaplaincy" element={<Chaplaincy />} />
            <Route path="/cpe-center" element={<CPECenter />} />
            <Route path="/global-pastors" element={<GlobalPastors />} />
            <Route path="/missionaries" element={<Missionaries />} />
            <Route path="/ministry-leadership" element={<MinistryLeadership />} />
            <Route path="/ministries/:slug" element={<MinistryDetail />} />
            <Route path="/apparel" element={<Apparel />} />
            <Route path="/prayer-request" element={<PrayerRequest />} />
            <Route path="/events" element={<Events />} />
            <Route path="/partnerships" element={<PartnershipsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/developer" element={<Developer />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/admin" element={<RequireAdmin><AdminDashboard /></RequireAdmin>} />
            <Route path="/admin/checklist" element={<RequireAdmin><AdminChecklist /></RequireAdmin>} />
            <Route path="/admin/media" element={<RequireAdmin><AdminMedia /></RequireAdmin>} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
