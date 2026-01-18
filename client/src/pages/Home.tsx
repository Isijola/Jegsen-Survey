import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { ServiceCard } from "@/components/ServiceCard";
import { ContactSection } from "@/components/ContactSection";
import { CheckCircle2, Shield, Globe2, Users } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  const services = [
    {
      title: "Onshore Survey",
      description: "Comprehensive land survey solutions working with clearly defined governance arrangements. We provide precise topographic and cadastral surveying.",
      // Unsplash: Surveyor with equipment on construction site
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Offshore Survey",
      description: "Global management expertise delivering superior survey services to marine sectors including hydrographic surveys and positioning.",
      // Unsplash: Ocean waves or offshore platform
      image: "https://images.unsplash.com/photo-1605727216801-e27ce1d0cc28?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "GIS Survey",
      description: "Advanced Geographic Information Systems based on international acceptable standards for data visualization and spatial analysis.",
      // Unsplash: Digital map or data visualization
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
    },
  ];

  return (
    <div className="bg-background min-h-screen">
      <Navigation />
      
      <Hero />

      {/* Services Section */}
      <section id="services" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent font-bold tracking-wider uppercase text-sm mb-2 block">What We Do</span>
            <h2 className="text-4xl font-bold font-display text-primary mb-4">Our Expertise</h2>
            <p className="text-muted-foreground text-lg">
              Delivering high-precision survey solutions across land and sea with state-of-the-art technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                image={service.image}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              className="lg:w-1/2 relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                {/* Unsplash: Professional meeting in office */}
                <img 
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=1000" 
                  alt="Team Meeting" 
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
              </div>
              {/* Decorative box */}
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-accent/10 rounded-full blur-2xl -z-10" />
            </motion.div>

            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold font-display text-primary mb-6">About Jegsen Survey</h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Jegsen Survey Nigeria Limited is a survey company registered with the Corporate Affairs Commission (RC NO:1318699). 
                  We follow a very strict code of integrity, high standards, and ethical business practices.
                </p>
                <p>
                  Our success is due in large part to the combined knowledge, expertise, and synergy of our global management team and strategic partners. 
                  We are driven to be the best at everything we do, from strategic planning to business execution and customer satisfaction.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 mt-10">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-accent h-6 w-6" />
                  <span className="font-semibold text-primary">Certified Experts</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-accent h-6 w-6" />
                  <span className="font-semibold text-primary">Global Standards</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-accent h-6 w-6" />
                  <span className="font-semibold text-primary">Advanced Tech</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-accent h-6 w-6" />
                  <span className="font-semibold text-primary">Safety First</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats/HSE Section */}
      <section id="hse" className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { icon: Shield, label: "Integrity", value: "100%" },
              { icon: CheckCircle2, label: "High Standards", value: "ISO" },
              { icon: Globe2, label: "Global Expertise", value: "40+" },
              { icon: Users, label: "Strategic Partners", value: "25+" },
            ].map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                <div className="bg-white/10 p-4 rounded-full mb-4">
                  <stat.icon className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold font-display mb-2">{stat.value}</h3>
                <p className="text-gray-300 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />

      {/* Footer */}
      <footer className="bg-primary text-white py-12 border-t border-white/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="bg-accent p-1.5 rounded">
                  {/* Using standard SVG logic for anchor icon instead of importing to avoid circular deps if needed, but here simple text is fine */}
                  <div className="w-5 h-5 bg-white rounded-sm" /> 
                </div>
                <span className="text-xl font-bold font-display tracking-tight">
                  JEGSEN<span className="text-accent">SURVEY</span>
                </span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Setting the standard for survey and positioning surface to subsea. Delivering expertise to global projects.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li><button onClick={() => document.getElementById("home")?.scrollIntoView({behavior: "smooth"})} className="text-gray-400 hover:text-white transition-colors">Home</button></li>
                <li><button onClick={() => document.getElementById("about")?.scrollIntoView({behavior: "smooth"})} className="text-gray-400 hover:text-white transition-colors">About Us</button></li>
                <li><button onClick={() => document.getElementById("services")?.scrollIntoView({behavior: "smooth"})} className="text-gray-400 hover:text-white transition-colors">Services</button></li>
                <li><button onClick={() => document.getElementById("contact")?.scrollIntoView({behavior: "smooth"})} className="text-gray-400 hover:text-white transition-colors">Contact</button></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-6">Legal</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-500 text-sm">
            <p>&copy; {new Date().getFullYear()} Jegsen Survey Nig Ltd. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
