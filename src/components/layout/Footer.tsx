import { Link } from "wouter";
import { Linkedin, Github, Mail, Phone } from "lucide-react";
import { SiX } from "react-icons/si";
import logoFull from "@assets/Asset_4_(1)_1767939107046.png";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/30 border-t border-border mt-auto">
      <div className="container-padding py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-1 space-y-4">
            <Link href="/" className="hover:opacity-80 transition-opacity inline-block">
              <img 
                src={logoFull} 
                alt="ShashwatTech" 
                className="h-8 w-auto dark:invert"
              />
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Empowering businesses with cutting-edge technology solutions. Design. Develop. Deliver.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="https://x.com/shashwattech_in" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <SiX size={18} />
              </a>
              <a href="https://www.linkedin.com/company/shashwattech" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://github.com/ShashwatTech-Info" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">Services</Link>
              </li>
              <li>
                <Link href="/products" className="text-muted-foreground hover:text-primary transition-colors">Products</Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Services</h3>
            <ul className="space-y-3 text-sm">
              <li className="text-muted-foreground">UI/UX Design</li>
              <li className="text-muted-foreground">Frontend Development</li>
              <li className="text-muted-foreground">Backend Systems</li>
              <li className="text-muted-foreground">Full-Stack Solutions</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Get in Touch</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center space-x-3 text-muted-foreground overflow-hidden">
                <Mail size={18} className="shrink-0" />
                <a href="mailto:shashwattechinfo@gmail.com" className="hover:text-primary transition-colors truncate w-full" title="shashwattechinfo@gmail.com">shashwattechinfo@gmail.com</a>
              </li>
              <li className="flex items-start space-x-3 text-muted-foreground">
                <Phone size={18} className="shrink-0 mt-1" />
                <div className="flex flex-wrap items-center">
                  <a href="tel:+918849091135" className="hover:text-primary transition-colors whitespace-nowrap">+91 8849091135,</a>
                  <span className="w-1 md:hidden" />
                  <a href="tel:+919601402228" className="hover:text-primary transition-colors whitespace-nowrap ml-1 md:ml-1">+91 9601402228</a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>© {currentYear} ShashwatTech. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link href="/terms-and-conditions" className="hover:text-foreground transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
