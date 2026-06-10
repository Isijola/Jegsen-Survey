import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageLayout";
import { CookieConsent } from "@/components/CookieConsent";
import { Link } from "wouter";
import { ChevronRight, Anchor, Target, Compass, Gauge, Ship } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import logoUrl from "@assets/log_1768761231743.png";

const subServices = [
  {
    title: "Seabed Surveys",
    description: "Supporting seabed surveys globally from customer vessels or ROVs, providing critical data for offshore development.",
    icon: Anchor,
    color: "bg-blue-500/10 text-blue-600"
  },
  {
    title: "Burial Support",
    description: "Rapid delivery of burial data to allow for timely decisions on remedial work and asset protection.",
    icon: Target,
    color: "bg-emerald-500/10 text-emerald-600"
  },
  {
    title: "Post Installation Survey",
    description: "Confirming as-left status of assets to provide proof of completion and adherence to quality standards.",
    icon: Compass,
    color: "bg-orange-500/10 text-orange-600"
  },
  {
    title: "Inspection Support",
    description: "Extensive experience in data acquisition and reporting for annual pipeline and structural campaigns.",
    icon: Ship,
    color: "bg-purple-500/10 text-purple-600"
  },
  {
    title: "Metrology",
    description: "Advanced metrology services including LBL acoustics, 3D sonar, photogrammetry, and inertial systems.",
    icon: Gauge,
    color: "bg-rose-500/10 text-rose-600"
  }
];

export default function SurfacePositioning() {
  return (
    <div className="bg-background min-h-screen">
      <Navigation />

      <PageHeader
        title="Survey"
        subtitle="Providing survey services to the international offshore industry with over 40 years of expertise."
      />
      <CookieConsent />

      {/* Breadcrumbs / Sub-nav */}
      <div className="bg-gray-50 border-b">
        <div className="container mx-auto px-4 md:px-6 py-4">
          <nav className="flex items-center gap-2 text-sm font-bold">
            <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link>
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
            <span className="text-primary">Survey</span>
          </nav>
        </div>
      </div>

      <main className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl font-bold font-display text-primary mb-6">Expert Survey Services</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              During the last four decades, we have developed considerable experience providing survey data acquisition, processing, and reporting services to leading offshore contractors. We train our personnel to be multi-disciplined experts, ensuring an effective service with optimized team sizes.
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
