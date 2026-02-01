import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
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

  const positioningItems = [
    { label: "Surface Positioning", href: "/surface-positioning" },
    { label: "Subsea Positioning", id: "subsea" },
    { label: "Installation Positioning", id: "installation" },
    { label: "Dimensional Control", id: "dimensional" },
  ];

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Onshore Support", href: "/onshore-support" },
    { label: "Positioning", dropdown: true },
    { label: "Services", id: "services" },
    { label: "Contact", id: "contact" },
  ];

  const handleNavClick = (link: any) => {
    if (link.href) {
      // It's a real page link
      setIsMobileMenuOpen(false);
      window.location.href = link.href;
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
        isScrolled ? "bg-white py-2 shadow-md border-b" : "bg-white/95 py-4 shadow-sm"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-4 group cursor-pointer">
            <img 
              src={logoUrl} 
              alt="Jegsen Survey Logo" 
              className={`transition-all duration-300 ${isScrolled ? "h-14 w-14" : "h-20 w-20"}`}
            />
            <span className={`text-2xl font-bold font-display tracking-tight transition-colors text-primary`}>
              JEGSEN<span className="text-secondary">SURVEY</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              link.dropdown ? (
                <DropdownMenu key={link.label}>
                  <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-bold transition-colors hover:text-secondary text-primary/90 outline-none">
                    {link.label} <ChevronDown className="h-4 w-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56 bg-white border shadow-xl p-2 rounded-xl">
                    {positioningItems.map((item) => (
                      <DropdownMenuItem 
                        key={item.id}
                        className="font-bold text-primary hover:text-secondary focus:text-secondary cursor-pointer py-2 px-3 rounded-lg"
                        onClick={() => handleNavClick({ id: "services" })}
                      >
                        {item.label}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : link.href ? (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm font-bold transition-colors hover:text-secondary text-primary/90"
                >
                  {link.label}
                </Link>
              ) : (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link)}
                  className="text-sm font-bold transition-colors hover:text-secondary text-primary/90"
                >
                  {link.label}
                </button>
              )
            ))}
            <Button 
              onClick={() => scrollToSection("contact")}
              variant="default"
              className="font-bold shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5 rounded-full px-8"
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
              <X className="text-primary" />
            ) : (
              <Menu className="text-primary" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b shadow-lg md:hidden p-4 flex flex-col gap-4 animate-in slide-in-from-top-5">
          {navLinks.map((link) => (
            link.dropdown ? (
              <div key={link.label} className="flex flex-col gap-2">
                <span className="text-lg font-bold text-primary/50 uppercase text-xs tracking-widest px-2">{link.label}</span>
                {positioningItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick({ id: "services" })}
                    className="text-left text-lg font-bold text-primary hover:text-secondary py-2 px-4 bg-gray-50 rounded-lg"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            ) : (
              <button
                key={link.label}
                onClick={() => handleNavClick(link)}
                className="text-left text-lg font-bold text-primary hover:text-secondary py-2 border-b border-gray-100 last:border-0"
              >
                {link.label}
              </button>
            )
          ))}
          <Button onClick={() => scrollToSection("contact")} className="w-full rounded-full">
            Get a Quote
          </Button>
        </div>
      )}
    </nav>
  );
}
