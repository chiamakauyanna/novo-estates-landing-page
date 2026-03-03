import { footerLinks, socialLinks } from "../../data";

const Footer = () => {
  return (
    <footer className="bg-secondary">
      {/* Main Footer */}
      <div className="px-6 py-16 lg:px-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <h2 className="font-heading text-2xl font-bold">
              Novo Estates
            </h2>
            <p className="text-gray-500 font-medium leading-relaxed text-sm">
              Your trusted partner in finding the perfect property. We make real
              estate simple, transparent and personal.
            </p>
            {/* Social Icons */}
            <div className="flex gap-4 mt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.id}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-dark text-primary flex items-center justify-center hover:bg-accent transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-6">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-3">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    className="text-gray-500 font-medium text-sm hover:text-accent transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-6">
              Services
            </h3>
            <ul className="flex flex-col gap-3">
              {footerLinks.services.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    className="text-gray-500 font-medium text-sm hover:text-accent transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-6">
              Opening Hours
            </h3>
            <ul className="flex flex-col gap-3">
              <li className="text-gray-500 text-sm">
                Monday to Friday: 8am to 6pm
              </li>
              <li className="text-gray-500 text-sm">Saturday: 9am to 4pm</li>
              <li className="text-gray-500 text-sm">Sunday: Closed</li>
              <li>
                <a
                  href="tel:+2348012345678"
                  className="text-gray-500 font-medium text-sm hover:text-accent transition-colors duration-300"
                >
                  +234 801 234 5678
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@novoestates.com"
                  className="text-gray-500 font-medium text-sm hover:text-accent transition-colors duration-300"
                >
                  hello@novoestates.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-dark/10 px-6 py-6 lg:px-20">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-gray-500 text-sm">
            © 2026 Novo Estates. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-gray-500 font-medium text-sm hover:text-accent transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-500 font-medium text-sm hover:text-accent transition-colors duration-300"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
