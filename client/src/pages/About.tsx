import { Navigation } from "@/components/Navigation";
import { PageHeader, ValueCard, CoreValueItem } from "@/components/PageLayout";
import { Shield, Target, Rocket, Heart } from "lucide-react";
import { motion } from "framer-motion";
import logoUrl from "@assets/log_1768761231743.png";

export default function About() {
  const values = [
    {
      title: "Integrity",
      description: "We follow a very strict code of integrity, high standards and ethical business practices in every project we undertake.",
      icon: Shield,
    },
    {
      title: "Our Vision",
      description: "To be recognized as the leading provider, setting the standard for surface and subsea survey and positioning services.",
      icon: Target,
    },
    {
      title: "Mission Statement",
      description: "Driven to be the best at everything we do, providing fresh ideas necessary to deliver innovation within each solution.",
      icon: Rocket,
    },
    {
      title: "Corporate Values",
      description: "Our success is built on the combined knowledge, expertise and synergy of our global management team.",
      icon: Heart,
    },
  ];

  return (
    <div className="bg-background min-h-screen">
      <Navigation />
      
      <PageHeader 
        title="About Jegsen Survey" 
        subtitle="Setting the standard for survey and positioning surface to subsea for global offshore projects."
      />

      {/* Main Content */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold font-display text-primary mb-8">Who We Are</h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Jegsen Survey Nigeria Limited is a survey company registered with the Corporate Affairs Commission (RC NO:1318699). 
                  We are driven to be the best at everything we do, from strategic planning to business execution and customer satisfaction.
                </p>
                <p>
                  Our success is due in large part to the combined knowledge, expertise, and synergy of our global management team and our strategic partners. 
                  We follow a very strict code of integrity, high standards, and ethical business practices.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-10">
                <CoreValueItem text="Registered with CAC" />
                <CoreValueItem text="Ethical Practices" />
                <CoreValueItem text="Global Synergy" />
                <CoreValueItem text="Strategic Planning" />
              </div>
            </motion.div>

            <motion.div 
              className="lg:w-1/2 relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-8 border-gray-50">
                <img 
                  src="https://images.unsplash.com/photo-1573164060897-425941c30241?auto=format&fit=crop&q=80&w=1000" 
                  alt="Jegsen Operations" 
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-primary/5" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold font-display text-primary mb-4">Our Core Values</h2>
            <p className="text-muted-foreground text-lg italic">
              "Surveying is Power - that's what we do in Jegsen Survey"
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <ValueCard 
                key={index}
                title={value.title}
                description={value.description}
                icon={value.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <img src={logoUrl} alt="Jegsen" className="h-16 w-16 mx-auto mb-6" />
          <p className="text-gray-400 max-w-md mx-auto mb-8 font-medium">
            &copy; {new Date().getFullYear()} Jegsen Survey Nig Ltd. All rights reserved.
            RC NO:1318699
          </p>
        </div>
      </footer>
    </div>
  );
}
