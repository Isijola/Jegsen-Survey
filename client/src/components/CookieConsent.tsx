import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Cookie, X } from "lucide-react";

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:w-[400px] z-[100]"
        >
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-6">
            <div className="flex items-start gap-4">
              <div className="bg-secondary/20 p-2 rounded-full">
                <Cookie className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-primary font-display">Cookie Policy</h3>
                  <button onClick={() => setIsVisible(false)} className="text-muted-foreground hover:text-primary transition-colors">
                    <X className="h-4 w-4" />
                  </button>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6 font-medium">
                  We use cookies to enhance your experience, analyze site traffic, and serve targeted advertisements. By continuing to use our site, you consent to our use of cookies.
                </p>
                <div className="flex gap-3">
                  <Button onClick={handleAccept} className="flex-1 rounded-full font-bold">
                    Accept
                  </Button>
                  <Button onClick={handleDecline} variant="outline" className="flex-1 rounded-full font-bold">
                    Decline
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
