import { Link } from "wouter";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { ServiceCard } from "@/components/ServiceCard";
import { ContactSection } from "@/components/ContactSection";
import { FAQSection } from "@/components/FAQSection";
import { CookieConsent } from "@/components/CookieConsent";
import { CheckCircle2, Shield, Globe2, Users } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import logoUrl from "@assets/log_1768761231743.png";
import onshoreSupportImg from "@/assets/onshore-support.jpg";
import surveyServicesImg from "@/assets/survey-services.jpeg";
import positioningServicesImg from "@/assets/positioning-services.jpeg";
import aboutTeamImg from "@/assets/about-team.jpeg";

export default function Home() {
  const services = [
    {
      title: "Onshore Support",
      description: "Integrated onshore support services operating under robust, transparent governance structures. We deliver reliable topographic and cadastral survey",
      image: onshoreSupportImg,
    },
    {
      title: "Survey Services",
      description: "Global management expertise delivering high-quality survey services to marine sectors across all project phases and operational requirements.",
      image: surveyServicesImg,
    },
    {
      title: "Positioning Services",
      description: "World class expertise supporting accurate positioning services for marine sectors across the full lifecycle of projects and operations.",
      image: positioningServicesImg,
    },
  ];

  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll progress relative to the container.
  // "start end" means when the top of the container touches the bottom of the viewport.
  // "start center" means when the top of the container reaches the center of the viewport.
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "start center"],
  });

  // Transform scroll progress to styles
  // Start with a large pill shape ("40vw" margin on each side) and shrink to full width
  const wrapperMargins = useTransform(scrollYProgress, [0, 1], ["40vw", "0vw"]);
  // Start with max radius (200px to fully curve the 20vw width) and flatten to 0px
  const wrapperRadius = useTransform(scrollYProgress, [0, 1], ["200px", "0px"]);

  return (
    <div className="bg-background min-h-screen">
      <Navigation />

      <Hero />
      <CookieConsent />

      {/* Services Section */}
      <section id="services" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent font-bold tracking-wider uppercase text-sm mb-2 block">What We Do</span>
            <h2 className="text-4xl font-bold font-display text-primary mb-4">Our Expertise</h2>
            <p className="text-muted-foreground text-lg">
              Delivering high precision survey solutions across land and sea with state of the art technology.
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
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-primary/5">
                <img
                  src={aboutTeamImg}
                  alt="Team Meeting"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
              </div>
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-secondary/20 rounded-full blur-3xl -z-10" />
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
                  Our success is due in large part to the combined knowledge, expertise, and synergy of our world class team and strategic partners.
                  We are driven to be the best at everything we do, from strategic planning to business execution and customer satisfaction.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 mt-10">
                <div className="flex items-center gap-3">
                  <div className="bg-secondary/20 p-1.5 rounded-full">
                    <CheckCircle2 className="text-primary h-5 w-5" />
                  </div>
                  <span className="font-bold text-primary">Certified Experts</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-secondary/20 p-1.5 rounded-full">
                    <CheckCircle2 className="text-primary h-5 w-5" />
                  </div>
                  <span className="font-bold text-primary">Global Standards</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-secondary/20 p-1.5 rounded-full">
                    <CheckCircle2 className="text-primary h-5 w-5" />
                  </div>
                  <span className="font-bold text-primary">Cutting edge Technology</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-secondary/20 p-1.5 rounded-full">
                    <CheckCircle2 className="text-primary h-5 w-5" />
                  </div>
                  <span className="font-bold text-primary">Safety First</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats/HSE Section */}
      <section id="hse" className="py-20 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
        <div className="container mx-auto relative z-10 px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { icon: Shield, label: "Integrity", value: "100%" },
              { icon: CheckCircle2, label: "High Standards", value: "ISO" },
              { icon: Globe2, label: "Years of Experience", value: "12+" },
              { icon: Users, label: "Strategic Partners", value: "14+" },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                <div className="bg-secondary/20 p-4 rounded-full mb-4">
                  <stat.icon className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold font-display mb-2 text-secondary">{stat.value}</h3>
                <p className="text-gray-100 font-bold uppercase tracking-wider text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />

      <div ref={containerRef} className="bg-white pb-0">
        {/* LexSelect-style Bottom Dark Wrapper for FAQ and Footer */}
        <motion.div
          style={{
            marginLeft: wrapperMargins,
            marginRight: wrapperMargins,
            borderTopLeftRadius: wrapperRadius,
            borderTopRightRadius: wrapperRadius,
          }}
          className="relative bg-[#000000] -mt-10 md:-mt-16 pt-16 md:pt-20 shadow-[0_-15px_40px_rgba(50,50,255,0.15)] border-t border-blue-500/20 overflow-hidden z-20"
        >

          {/* Atmospheric Radial Glows mimicking LexSelect */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[radial-gradient(circle_at_top,rgba(50,50,255,0.15)_0%,transparent_60%)] rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(80,40,255,0.1)_0%,transparent_70%)] rounded-full blur-3xl pointer-events-none" />

          {/* Dynamic Scrolling Marquee Text */}
          <div className="absolute top-1/4 left-0 w-full overflow-hidden pointer-events-none select-none z-0">
            <motion.div
              animate={{ x: [0, -2000] }}
              transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
              className="flex whitespace-nowrap text-[100px] md:text-[140px] font-black text-white/[0.04] font-display text-zinc-800"
            >
              <span className="shrink-0 mr-[100px]">SURVEY & POSITIONING</span>
              <span className="shrink-0 mr-[100px]">SUBSEA EXPERTISE</span>
              <span className="shrink-0 mr-[100px]">ONSHORE SUPPORT</span>
              <span className="shrink-0 mr-[100px]">SURVEY & POSITIONING</span>
            </motion.div>
          </div>

          <div className="relative z-10">
            <FAQSection />
            <Footer transparentBg />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
