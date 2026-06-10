import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageLayout";
import { CookieConsent } from "@/components/CookieConsent";
import { Link } from "wouter";
import { ChevronRight, Radio, Waves, Cpu, Crosshair, Wifi } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const subServices = [
  {
    title: "Acoustic Metrology",
    description: "High-precision acoustic measurements for subsea structures, ensuring accurate distance and angle calculations for spoolpiece fabrication.",
    icon: Radio,
    color: "bg-blue-500/10 text-blue-600"
  },
  {
    title: "ROV Positioning",
    description: "Robust USBL and LBL positioning systems for Remotely Operated Vehicles, guaranteeing precise navigation in challenging deep-water environments.",
    icon: Waves,
    color: "bg-emerald-500/10 text-emerald-600"
  },
  {
    title: "LBL Array Installation",
    description: "Deployment, calibration, and operational management of Long Baseline (LBL) acoustic arrays for field-wide subsea positioning.",
    icon: Wifi,
    color: "bg-orange-500/10 text-orange-600"
  },
  {
    title: "Subsea Structure Placement",
    description: "Real-time positioning and monitoring during the lowering and installation of manifolds, templates, and wellheads.",
    icon: Crosshair,
    color: "bg-purple-500/10 text-purple-600"
  },
  {
    title: "Inertial Navigation Systems",
    description: "Integration of advanced INS technology with acoustic positioning to provide seamless, high-update-rate subsea tracking.",
    icon: Cpu,
    color: "bg-rose-500/10 text-rose-600"
  }
];

export default function SubseaPositioning() {
  return (
    <div className="bg-background min-h-screen">
      <Navigation />

      <PageHeader
        title="Subsea Positioning"
        subtitle="Delivering pinpoint accuracy beneath the surface through advanced acoustic and inertial navigation solutions."
        image="https://images.unsplash.com/photo-1682687981674-0927add86f2b?auto=format&fit=crop&q=80&w=2000"
      />
      <CookieConsent />

      {/* Breadcrumbs / Sub-nav */}
      <div className="bg-gray-50 border-b">
        <div className="container mx-auto px-4 md:px-6 py-4">
          <nav className="flex items-center gap-2 text-sm font-bold">
            <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link>
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
            <span className="text-muted-foreground">Positioning</span>
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
            <span className="text-primary">Subsea Positioning</span>
          </nav>
        </div>
      </div>

      <main className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl font-bold font-display text-primary mb-6">Deep Water Accuracy</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Operating in the subsea environment demands uncompromising precision and reliability. We provide state-of-the-art positioning services that guide critical underwater operations, from complex field developments to intricate intervention tasks. Our teams utilize the latest in acoustic positioning technology to deliver trusted results in the harshest conditions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {subServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover-elevate border-none shadow-sm bg-white">
                  <CardContent className="p-8">
                    <div className={`w-12 h-12 rounded-xl ${service.color} flex items-center justify-center mb-6`}>
                      <service.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-4">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
