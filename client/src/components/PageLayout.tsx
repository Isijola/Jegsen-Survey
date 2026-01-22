import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  image?: string;
}

export function PageHeader({ title, subtitle, image }: PageHeaderProps) {
  return (
    <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={image || "https://images.unsplash.com/photo-1541944743827-e9529e843f41?auto=format&fit=crop&q=80&w=2000"}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/80 mix-blend-multiply" />
      </div>
      <div className="container relative z-10 px-4 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold font-display text-white mb-4"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-200 max-w-2xl mx-auto"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}

export function ValueCard({ title, description, icon: Icon }: { title: string; description: string; icon: any }) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <div className="bg-secondary/20 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
        <Icon className="text-primary h-6 w-6" />
      </div>
      <h3 className="text-xl font-bold text-primary mb-4 font-display">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
}

export function CoreValueItem({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="bg-secondary/20 p-1 rounded-full">
        <CheckCircle2 className="text-primary h-4 w-4" />
      </div>
      <span className="font-bold text-primary">{text}</span>
    </div>
  );
}
