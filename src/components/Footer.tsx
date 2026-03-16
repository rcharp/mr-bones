import { Phone, MapPin, Clock, Facebook } from "lucide-react";
import logo from "@/assets/logo-circle.png";

const Footer = () => (
  <footer className="text-primary-foreground py-16" style={{ backgroundColor: "#1a1a1a" }}>
    <div className="container mx-auto px-4 lg:px-8">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="space-y-4">
          <div className="w-20 h-20 rounded-full overflow-hidden" style={{ boxShadow: '0 0 0 0.5px rgba(255,255,255,0.3)' }}>
            <img src={logo} alt="Mr. Bones Stump Grinding" className="w-full h-full object-cover scale-[1.28]" />
          </div>
          <p className="text-sm text-primary-foreground/60 leading-relaxed">
            Serving Sarasota, Bradenton & Venice for over 30 years. Professional stump grinding you can count on.
          </p>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-heading font-semibold text-base uppercase tracking-wider mb-4 opacity-60">Services</h4>
          <nav className="space-y-3">
            <a href="/services/stump-grinding" className="block text-base opacity-80 hover:text-secondary transition-colors">Stump Grinding</a>
            <a href="/services/root-removal" className="block text-base opacity-80 hover:text-secondary transition-colors">Root Removal</a>
            <a href="/services/land-clearing" className="block text-base opacity-80 hover:text-secondary transition-colors">Land Clearing</a>
            <a href="/services/storm-cleanup" className="block text-base opacity-80 hover:text-secondary transition-colors">Storm Cleanup</a>
          </nav>
        </div>

        {/* Service Areas */}
        <div>
          <h4 className="font-heading font-semibold text-base uppercase tracking-wider mb-4 opacity-60">Service Areas</h4>
          <nav className="space-y-3">
            <a href="/areas/sarasota" className="block text-base opacity-80 hover:text-secondary transition-colors">Sarasota, FL</a>
            <a href="/areas/bradenton" className="block text-base opacity-80 hover:text-secondary transition-colors">Bradenton, FL</a>
            <a href="/areas/venice" className="block text-base opacity-80 hover:text-secondary transition-colors">Venice, FL</a>
            <a href="/areas/palmetto" className="block text-base opacity-80 hover:text-secondary transition-colors">Palmetto, FL</a>
            <a href="/areas/north-port" className="block text-base opacity-80 hover:text-secondary transition-colors">North Port, FL</a>
          </nav>
        </div>

        {/* Info */}
        <div className="space-y-4">
          <h4 className="font-heading font-semibold text-base uppercase tracking-wider mb-4 opacity-60">Contact</h4>
          <div className="flex items-start gap-3">
            <Phone className="w-4 h-4 mt-0.5 opacity-60" />
            <a href="tel:+19417802579" className="text-base opacity-80 hover:text-secondary transition-colors">(941) 780-2579</a>
          </div>
          <div className="flex items-start gap-3">
            <MapPin className="w-4 h-4 mt-0.5 opacity-60" />
            <span className="text-base opacity-80">5725 Britannia Dr, Sarasota, FL 34231</span>
          </div>
          <div className="flex items-start gap-3">
            <Clock className="w-4 h-4 mt-0.5 opacity-60" />
            <span className="text-base opacity-80">Open 24 Hours</span>
          </div>
          <div className="flex items-start gap-3">
            <Facebook className="w-4 h-4 mt-0.5 opacity-60" />
            <a href="https://www.facebook.com/mr.bonesstump/" target="_blank" rel="noopener noreferrer" className="text-base opacity-80 hover:text-secondary transition-colors">Facebook</a>
          </div>
        </div>
      </div>

      <div className="mt-16 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-base opacity-60">
          © 2026 Mr. Bones Stump Grinding, Inc.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
