import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoUrl from "@assets/log_1768761231743.png";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", id: "services" },
    { label: "HSE", id: "hse" },
    { label: "Contact", id: "contact" },
  ];

  const handleNavClick = (link: typeof navLinks[0]) => {
    if (link.href) {
      // It's a real page link
      setIsMobileMenuOpen(false);
      return;
    }
    
    if (link.id) {
      // It's a section on home page
      if (window.location.pathname !== "/") {
        window.location.href = `/#${link.id}`;
      } else {
        scrollToSection(link.id);
      }
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass-nav py-2 shadow-sm" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group cursor-pointer">
            <img 
              src={logoUrl} 
              alt="Jegsen Survey Logo" 
              className={`transition-all duration-300 ${isScrolled ? "h-10 w-10" : "h-14 w-14"}`}
            />
            <span className={`text-xl font-bold font-display tracking-tight transition-colors ${
              isScrolled ? "text-primary" : "text-white"
            }`}>
              JEGSEN<span className="text-secondary">SURVEY</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              link.href ? (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`text-sm font-semibold transition-colors hover:text-secondary ${
                    isScrolled ? "text-primary/80" : "text-white/90"
                  }`}
                >
                  {link.label}
                </Link>
              ) : (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link)}
                  className={`text-sm font-semibold transition-colors hover:text-secondary ${
                    isScrolled ? "text-primary/80" : "text-white/90"
                  }`}
                >
                  {link.label}
                </button>
              )
            ))}
            <Button 
              onClick={() => scrollToSection("contact")}
              variant={isScrolled ? "default" : "secondary"}
              className="font-bold shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5 rounded-full"
            >
              Get a Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={isScrolled ? "text-primary" : "text-white"} />
            ) : (
              <Menu className={isScrolled ? "text-primary" : "text-white"} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b shadow-lg md:hidden p-4 flex flex-col gap-4 animate-in slide-in-from-top-5">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-left text-lg font-bold text-primary hover:text-secondary py-2 border-b border-gray-100 last:border-0"
            >
              {link.label}
            </button>
          ))}
          <Button onClick={() => scrollToSection("contact")} className="w-full rounded-full">
            Get a Quote
          </Button>
        </div>
      )}
    </nav>
  );
}
