import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X, ChevronDown, Cloud, Sun } from "lucide-react";
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
  const [time, setTime] = useState(new Date());
  const [weather, setWeather] = useState<{ temp: number, isSunny: boolean } | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);

    const timer = setInterval(() => setTime(new Date()), 60000); // update every minute

    // Fetch Lagos weather
    fetch("https://api.open-meteo.com/v1/forecast?latitude=6.5244&longitude=3.3792&current=temperature_2m,weather_code")
      .then(res => res.json())
      .then(data => {
        setWeather({
          temp: Math.round(data.current.temperature_2m),
          isSunny: data.current.weather_code <= 3
        });
      })
      .catch(() => console.log("Weather fetch failed"));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(timer);
    };
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
    { label: "Subsea Positioning", href: "/subsea-positioning" },
    { label: "Installation Positioning", href: "/installation-positioning" },
    { label: "Dimensional Control", href: "/dimensional-control" },
  ];

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Onshore Support", href: "/onshore-support" },
    { label: "Positioning", dropdown: true },
    { label: "Survey", href: "/survey" },
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white py-2 shadow-md border-b" : "bg-white/95 py-4 shadow-sm"
        }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between gap-4 lg:gap-8">
          <Link href="/" className="flex items-center gap-1 xl:gap-3 group cursor-pointer shrink-0">
            <img
              src={logoUrl}
              alt="Jegsen Survey Logo"
              className={`transition-all duration-300 ${isScrolled ? "h-12 w-12 xl:h-14 xl:w-14" : "h-16 w-16 xl:h-20 xl:w-20"}`}
            />
            <span className={`text-xl xl:text-2xl font-bold font-display tracking-tight transition-colors text-primary whitespace-nowrap`}>
              JEGSEN<span className="text-accent">SURVEY</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-8">
            {navLinks.map((link) => (
              link.dropdown ? (
                <DropdownMenu key={link.label}>
                  <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-bold transition-colors hover:text-accent text-primary/90 outline-none whitespace-nowrap">
                    {link.label} <ChevronDown className="h-4 w-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56 bg-white border shadow-xl p-2 rounded-xl">
                    {positioningItems.map((item) => (
                      <DropdownMenuItem
                        key={item.label}
                        className="font-bold text-primary hover:text-secondary focus:text-secondary cursor-pointer py-2 px-3 rounded-lg"
                        onClick={() => handleNavClick(item)}
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
                  className="text-sm font-bold transition-colors hover:text-accent text-primary/90 whitespace-nowrap"
                >
                  {link.label}
                </Link>
              ) : (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link)}
                  className="text-sm font-bold transition-colors hover:text-accent text-primary/90 whitespace-nowrap"
                >
                  {link.label}
                </button>
              )
            ))}

            <div className="flex items-center gap-2 lg:gap-4 ml-2 lg:ml-6 pl-2 lg:pl-6 border-l border-gray-200/60 shrink-0 hidden lg:flex">
              <div className="flex items-center gap-3 bg-gray-50/80 backdrop-blur-sm border border-gray-100 px-2 lg:px-4 py-1.5 lg:py-2 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex items-center gap-2 pr-2 lg:pr-3 border-r border-gray-200">
                  <div className="relative flex h-2 w-2 shrink-0">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </div>
                  <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider whitespace-nowrap">Port Harcourt</span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-primary font-display tracking-tight whitespace-nowrap">
                    {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>

                {weather && (
                  <div className="flex items-center gap-2 pl-2 lg:pl-3 border-l border-gray-200">
                    <div className="flex items-center justify-center bg-white shadow-sm border border-gray-100 rounded-full px-3 py-1 gap-2">
                      {weather.isSunny ? (
                        <Sun className="h-5 w-5 text-orange-500 animate-[spin_10s_linear_infinite] shrink-0" />
                      ) : (
                        <Cloud className="h-5 w-5 text-blue-500 shrink-0" />
                      )}
                      <span className="text-base font-black text-primary whitespace-nowrap">{weather.temp}°C</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 shrink-0"
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
        <div className="absolute top-full left-0 right-0 bg-white border-b shadow-lg lg:hidden p-4 flex flex-col gap-4 animate-in slide-in-from-top-5">
          {navLinks.map((link) => (
            link.dropdown ? (
              <div key={link.label} className="flex flex-col gap-2">
                <span className="text-lg font-bold text-primary/50 uppercase text-xs tracking-widest px-2">{link.label}</span>
                {positioningItems.map((item) => (
                  <button
                    key={item.href}
                    onClick={() => handleNavClick(item)}
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

          <div className="mt-6 flex items-center justify-between p-5 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl border border-gray-200/60 shadow-sm">
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <div className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </div>
                <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Port Harcourt, NG</span>
              </div>
              <span className="text-2xl font-bold font-display text-primary tracking-tight">
                {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </span>
            </div>
            {weather && (
              <div className="flex items-center gap-3 bg-white px-4 py-2.5 rounded-xl shadow-sm border border-gray-100">
                {weather.isSunny ? (
                  <Sun className="h-6 w-6 text-orange-500" />
                ) : (
                  <Cloud className="h-6 w-6 text-blue-400" />
                )}
                <span className="text-xl font-bold text-primary">{weather.temp}°C</span>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
