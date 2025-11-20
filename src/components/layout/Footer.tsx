import { Link } from 'react-router-dom';
import { FaFacebook, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import logo from '../../assets/logo.png';

export default function Footer() {
  return (
    <footer className="bg-neutral-darkGray text-white">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <img src={logo} alt="Karnali Construction" className="h-28 w-auto" />
            </Link>
            <p className="text-white text-sm font-semibold">
              Follow on Facebook to get all our latest update and news
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/share/1GsWbp1CN3/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-neutral-lightGray hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <FaFacebook size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-neutral-lightGray hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-neutral-lightGray hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-neutral-lightGray hover:text-primary transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-neutral-lightGray hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Our Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/services/residential-commercial-construction" className="text-neutral-lightGray hover:text-primary transition-colors">
                  Construction
                </Link>
              </li>
              <li>
                <Link to="/services/architectural-design-project-management" className="text-neutral-lightGray hover:text-primary transition-colors">
                  Designing
                </Link>
              </li>
              <li>
                <Link to="/services/business-consulting-urban-planning" className="text-neutral-lightGray hover:text-primary transition-colors">
                  Business Consulting
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-neutral-lightGray hover:text-primary transition-colors">
                  Additional Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            
            {/* Main Office */}
            <div className="space-y-3 text-sm">
              <div className="font-medium text-primary">Main Office</div>
              <div className="flex items-start space-x-2">
                <FaMapMarkerAlt className="mt-1 text-primary" size={14} />
                <span className="text-neutral-lightGray">
                  Bagchaur-08, Salyan, Nepal
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <FaPhone className="text-primary" size={14} />
                <a href="tel:+9779867969503" className="text-neutral-lightGray hover:text-primary transition-colors">
                  +977 9867969503
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <FaEnvelope className="text-primary" size={14} />
                <a href="mailto:infrastkarnali@gmail.com" className="text-neutral-lightGray hover:text-primary transition-colors">
                  infrastkarnali@gmail.com
                </a>
              </div>
            </div>

            {/* Branch Office */}
            <div className="space-y-3 text-sm">
              <div className="font-medium text-primary">Branch Office</div>
              <div className="flex items-start space-x-2">
                <FaMapMarkerAlt className="mt-1 text-primary" size={14} />
                <span className="text-neutral-lightGray">
                  Tulsipur-07, Dang, Nepal
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <FaPhone className="text-primary" size={14} />
                <a href="tel:+9779847702458" className="text-neutral-lightGray hover:text-primary transition-colors">
                  +977 9847702458
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <FaEnvelope className="text-primary" size={14} />
                <a href="mailto:infrastkarnali@gmail.com" className="text-neutral-lightGray hover:text-primary transition-colors">
                  infrastkarnali@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-mediumGray mt-8 pt-6 text-center text-sm text-neutral-lightGray">
          © {new Date().getFullYear()} Karnali Construction. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

