import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full gradient-hero flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">M</span>
              </div>
              <div>
                <h3 className="font-bold text-lg">Mahesh Sweets</h3>
                <p className="text-xs text-background/60">& Restaurant</p>
              </div>
            </div>
            <p className="text-background/70 text-sm">
              Serving authentic Indian sweets and delicious food since 1985. A taste of tradition in every bite.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              <Link to="/" className="text-background/70 hover:text-primary text-sm transition-colors">
                Home
              </Link>
              <Link to="/menu" className="text-background/70 hover:text-primary text-sm transition-colors">
                Menu
              </Link>
              <Link to="/about" className="text-background/70 hover:text-primary text-sm transition-colors">
                About Us
              </Link>
              <Link to="/contact" className="text-background/70 hover:text-primary text-sm transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-2 text-sm text-background/70">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>123 Main Market, Sitapur, Uttar Pradesh 261001</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-background/70">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-background/70">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span>info@maheshsweets.com</span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-semibold mb-4">Opening Hours</h4>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 text-sm text-background/70">
                <Clock className="h-4 w-4 flex-shrink-0" />
                <span>Mon - Sun: 8:00 AM - 10:00 PM</span>
              </div>
              <p className="text-sm text-background/70 mt-2">
                Delivery available from 9:00 AM to 9:30 PM
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-background/10 mt-8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-background/60">
            © 2024 Mahesh Sweets & Restaurant. All rights reserved.
          </p>
          <Link
            to="/admin/login"
            className="text-xs text-background/40 hover:text-background/60 transition-colors"
          >
            Admin Login
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
