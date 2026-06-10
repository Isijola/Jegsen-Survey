import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageLayout";
import { CookieConsent } from "@/components/CookieConsent";
import { Link } from "wouter";
import { ChevronRight, Maximize, FileWarning, Ruler, PenTool, Database } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const subServices = [
  {
    title: "3D Laser Scanning",
    description: "High-resolution point cloud generation capturing exact geometries of offshore facilities, vessels, and complex structures.",
    icon: Maximize,
    color: "bg-blue-500/10 text-blue-600"
  },
  {
    title: "Spool & Structure Control",
    description: "Precise dimensional verification of pipe spools and subsea structures prior to load-out to guarantee first-time fit.",
    icon: Ruler,
    color: "bg-emerald-500/10 text-emerald-600"
  },
  {
    title: "Clash Detection",
    description: "Virtual installation simulations using scanned data to identify and resolve spatial conflicts before offshore execution.",
    icon: FileWarning,
    color: "bg-orange-500/10 text-orange-600"
  },
  {
    title: "AutoCAD Modelling",
    description: "Conversion of raw point cloud data into intelligent 3D CAD models tailored to client engineering specifications.",
    icon: PenTool,
    color: "bg-purple-500/10 text-purple-600"
  },
  {
    title: "As-Built Documentation",
    description: "Comprehensive spatial databases and accurate as-built drawings reflecting the true state of operational assets.",
    icon: Database,
    color: "bg-rose-500/10 text-rose-600"
  }
];

export default function DimensionalControl() {
  return (
    <div className="bg-background min-h-screen">
      <Navigation />

      <PageHeader
        title="Dimensional Control"
        subtitle="Eliminating spatial uncertainty through high-definition 3D laser scanning and rigorous dimensional verification."
        image="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2000"
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
            <span className="text-primary">Dimensional Control</span>
          </nav>
        </div>
      </div>

      <main className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl font-bold font-display text-primary mb-6">First-Time Fit Assurance</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              In offshore engineering, spatial errors lead to costly delays. Our dimensional control services provide the crucial link between theoretical design and physical reality. By leveraging advanced 3D laser scanning and total station technology, we create digital twins of complex environments. This allows for accurate clash detection, precise spool fabrication, and the assurance that new components will integrate seamlessly on the first attempt.
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
