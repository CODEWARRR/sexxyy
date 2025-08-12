import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  const productLinks = [
    "Classic Rolling Papers",
    "Premium Collection", 
    "Special Editions",
    "Bulk Orders"
  ];

  const companyLinks = [
    "About Us",
    "Our Heritage",
    "Quality Standards",
    "Careers"
  ];

  const supportLinks = [
    "Find Products",
    "Contact Us",
    "What the Fun",
    "FAQ"
  ];

  const legalLinks = [
    { text: "Privacy Policy", href: "#" },
    { text: "Terms of Service", href: "#" },
    { text: "Cookie Policy", href: "#" }
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" }
  ];

  return (
    <footer className="bg-saddle-brown text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-playfair font-bold mb-4">Jotah</h3>
            <p className="text-warm-cream mb-4">
              India's first rolling paper brand, crafted with premium quality materials and uncompromising standards for the discerning smoker.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.href}
                  className="text-warm-cream hover:text-goldenrod transition-colors"
                  aria-label={social.label}
                  data-testid={`footer-social-${social.label.toLowerCase()}`}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Products</h4>
            <ul className="space-y-2">
              {productLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-warm-cream hover:text-goldenrod transition-colors"
                    data-testid={`footer-product-${link.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Company</h4>
            <ul className="space-y-2">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-warm-cream hover:text-goldenrod transition-colors"
                    data-testid={`footer-company-${link.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Support</h4>
            <ul className="space-y-2">
              {supportLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-warm-cream hover:text-goldenrod transition-colors"
                    data-testid={`footer-support-${link.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-peru-gold/30 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-warm-cream text-sm">© 2024 Jotah. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {legalLinks.map((link, index) => (
              <a 
                key={index}
                href={link.href} 
                className="text-warm-cream hover:text-goldenrod text-sm transition-colors"
                data-testid={`footer-legal-${link.text.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {link.text}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
