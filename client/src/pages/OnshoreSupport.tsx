import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageLayout";
import { CookieConsent } from "@/components/CookieConsent";
import {
  Users,
  Lightbulb,
  FileText,
  Monitor,
  BarChart,
  Settings,
  ArrowRight
} from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import logoUrl from "@assets/log_1768761231743.png";
import { Link } from "wouter";

const features = [
  {
    title: "Consultancy",
    description: "Expert advice in subsea construction and inspection sectors. We support customers from tendering and project planning through to final deliverables.",
    icon: Lightbulb,
    color: "bg-blue-500/10 text-blue-600"
  },
  {
    title: "Tendering Support",
    description: "Assistance with technical specifications, meeting attendance, and detailed survey proposals including method statements and pricing.",
    icon: FileText,
    color: "bg-emerald-500/10 text-emerald-600"
  },
  {
    title: "Project Support",
    description: "Dedicated technical support throughout the project lifecycle, ensuring continuity and integrating valuable lessons learned.",
    icon: Settings,
    color: "bg-orange-500/10 text-orange-600"
  },
  {
    title: "Remote Operations",
    description: "Jegsen delivers projects through proven remote operating models, supporting both connected and offline workflows. To reduce environmental impact, we provide onshore data processing via remote-working teams and offer technical support to clients developing their own remote processing environments.",
    icon: Monitor,
    color: "bg-purple-500/10 text-purple-600"
  },
  {
    title: "Deliverables & Reporting",
    description: "At Jegsen Survey, protecting client data is a priority. Our secure in-house storage ensures information is safe, reliable, and accessible. Experienced onshore and offshore teams manage and process complex data, combining multiple sources to deliver accurate final as-builts supported by in-house GIS expertise.",
    icon: BarChart,
    color: "bg-rose-500/10 text-rose-600"
  },
  {
    title: "Expert Team",
    description: "12 years of combined knowledge. Our established team of experts is always on hand to assist with complex survey queries.",
    icon: Users,
    color: "bg-cyan-500/10 text-cyan-600"
  }
];

export default function OnshoreSupport() {
  return (
    <div className="bg-background min-h-screen">
      <Navigation />

      <PageHeader
        title="Onshore Support"
        subtitle="Professional survey knowledge and support on call. Acting as your survey department or supporting your in-house experts."
      />
      <CookieConsent />

      <main className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center mb-24">
            <motion.div
              className="lg:w-1/2"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold font-display text-primary mb-6">
                Knowledge and Experience on Demand
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Decades of survey and positioning experience is available to our customers for all their project requirements, enabling them to concentrate on their own areas of expertise.
                </p>
                <p>
                  By valuing our customers, we build long-term, trusting relationships, allowing them to benefit from our extensive range of onshore support services and consultancy expertise.
                </p>
              </div>
              <div className="mt-10">
                <Link href="/#contact"><Button size="lg" className="rounded-full font-bold group">
                  Contact Our Experts
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button></Link>
              </div>
            </motion.div>

            <motion.div
              className="lg:w-1/2 relative"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=1000"
                  alt="Survey Engineering Support"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-8 rounded-2xl shadow-xl hidden md:block border">
                <p className="text-4xl font-bold text-primary font-display">12+</p>
                <p className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Years of Experience</p>
              </div>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover-elevate border-none shadow-sm bg-gray-50/50">
                  <CardContent className="p-8">
                    <div className={`w-12 h-12 rounded-xl ${feature.color} flex items-center justify-center mb-6`}>
                      <feature.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-4">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
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
