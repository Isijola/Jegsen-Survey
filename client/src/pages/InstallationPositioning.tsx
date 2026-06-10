import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageLayout";
import { CookieConsent } from "@/components/CookieConsent";
import { Link } from "wouter";
import { ChevronRight, ArrowDownToLine, Settings, ShieldCheck, Ruler, Activity } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const subServices = [
  {
    title: "Jacket & Topside Installation",
    description: "Comprehensive positioning support for the precise placement of offshore platform jackets and heavy topside modules.",
    icon: ArrowDownToLine,
    color: "bg-blue-500/10 text-blue-600"
  },
  {
    title: "FPSO Mooring & Hook-up",
    description: "Accurate navigation and positioning for FPSO arrival, anchor deployment, and complex mooring hook-up operations.",
    icon: Settings,
    color: "bg-emerald-500/10 text-emerald-600"
  },
  {
    title: "Pipeline & Cable Lay",
    description: "Continuous vessel and touchdown monitoring during rigid/flexible pipelay and submarine cable installation.",
    icon: Activity,
    color: "bg-orange-500/10 text-orange-600"
  },
  {
    title: "Jacket Levelling Monitoring",
    description: "Real-time monitoring of structure attitude and levelness during the crucial ballasting and piling phases.",
    icon: Ruler,
    color: "bg-purple-500/10 text-purple-600"
  },
  {
    title: "Asset Integrity Verification",
    description: "As-built documentation and spatial verification to ensure all installed components meet strict engineering tolerances.",
    icon: ShieldCheck,
    color: "bg-rose-500/10 text-rose-600"
  }
];

export default function InstallationPositioning() {
  return (
    <div className="bg-background min-h-screen">
      <Navigation />

      <PageHeader
        title="Installation Positioning"
        subtitle="Guiding major offshore construction projects with critical real-time positioning and spatial intelligence."
        image="https://images.unsplash.com/photo-1544605481-9b7e7135e69e?auto=format&fit=crop&q=80&w=2000"
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
            <span className="text-primary">Installation Positioning</span>
          </nav>
        </div>
      </div>

      <main className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl font-bold font-display text-primary mb-6">Construction Certainty</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Offshore construction requires orchestrating massive assets with millimeter precision. We provide the essential positioning telemetry needed during the critical phases of marine installation. From guiding heavy lift vessels to monitoring touchdown parameters, our experts ensure that every structure is positioned safely, accurately, and according to the project design.
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
