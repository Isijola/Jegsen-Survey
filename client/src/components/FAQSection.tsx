import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

export function FAQSection() {
    const faqs = [
        {
            question: "What types of survey services do you provide?",
            answer: "We provide comprehensive onshore, offshore, and nearshore survey services, including topographic, cadastral, and positioning services across various operational requirements."
        },
        {
            question: "Are your survey operations internationally certified?",
            answer: "Yes, Jegsen Survey operates under strict global standards. Our rigorous quality management processes and safety protocols ensure compliance with international survey guidelines."
        },
        {
            question: "Do you offer precise positioning for subsea projects?",
            answer: "Absolutely. We deliver world-class expertise in accurate positioning services supporting marine sectors from surface to subsea operations."
        },
        {
            question: "How do I request a quote for a specific project?",
            answer: "You can reach out using the contact form below or call our support lines. Our team will review your project requirements and get back to you with a tailored solution."
        }
    ];

    return (
        <section className="py-24 relative z-10">
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-3xl mx-auto"
                >
                    <div className="text-center mb-12">
                        <span className="text-secondary font-bold tracking-wider uppercase text-sm mb-2 block">
                            Got Questions?
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold font-display text-white mb-4">
                            Frequently Asked Questions
                        </h2>
                        <p className="text-zinc-400 text-lg">
                            Find answers to common questions about our survey processes, capabilities, and standards.
                        </p>
                    </div>

                    <Accordion type="single" collapsible className="w-full space-y-4">
                        {faqs.map((faq, index) => (
                            <AccordionItem
                                key={index}
                                value={`item-${index}`}
                                className="bg-zinc-900/40 border border-zinc-800/50 rounded-2xl px-6 data-[state=open]:bg-zinc-900/80 transition-colors"
                            >
                                <AccordionTrigger className="text-left text-white hover:text-secondary hover:no-underline py-6">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-zinc-400 leading-relaxed pb-6 text-base">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </motion.div>
            </div>
        </section>
    );
}
