import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Palette, Layout, Server, Layers, ArrowRight } from "lucide-react";

const services = [
  {
    id: "ui-ux",
    icon: <Palette className="w-12 h-12" />,
    title: "UI/UX Design",
    description: "We design intuitive, engaging, and beautiful user interfaces that delight users and drive conversions. From wireframing to high-fidelity prototypes.",
    features: ["User Research", "Wireframing & Prototyping", "Visual Design", "Design Systems"]
  },
  {
    id: "frontend",
    icon: <Layout className="w-12 h-12" />,
    title: "Frontend Development",
    description: "Responsive, fast, and interactive frontend applications using modern frameworks like React. We ensure pixel-perfect implementation of designs.",
    features: ["React / Next.js", "Responsive Layouts", "Performance Optimization", "Accessibility (a11y)"]
  },
  {
    id: "backend",
    icon: <Server className="w-12 h-12" />,
    title: "Backend Development",
    description: "Robust, secure, and scalable server-side architectures. We build APIs and databases that power your applications with reliability.",
    features: ["API Design (REST/GraphQL)", "Database Architecture", "Cloud Infrastructure", "Security & Auth"]
  },
  {
    id: "fullstack",
    icon: <Layers className="w-12 h-12" />,
    title: "Full-Stack Development",
    description: "End-to-end development services covering both client and server sides. We deliver complete, production-ready solutions.",
    features: ["End-to-End Solutions", "SaaS Development", "Technical Consulting", "Maintenance & Support"]
  }
];

export default function Services() {
  return (
    <div className="pt-24 pb-16">
      <section className="container-padding text-center mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold font-display mb-6">Our Expertise</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive technology services tailored to elevate your business.
          </p>
        </motion.div>
      </section>

      <div className="container-padding space-y-24">
        {services.map((service, idx) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className={`flex flex-col md:flex-row gap-12 items-center ${
              idx % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            <div className="flex-1 w-full">
              <div className="bg-gradient-to-br from-background to-muted border border-border rounded-3xl p-10 h-full shadow-lg relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity duration-500 transform group-hover:scale-110">
                  {service.icon}
                </div>
                <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h2 className="text-3xl font-bold mb-4 font-display">{service.title}</h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  {service.description}
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center space-x-2 text-sm font-medium">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="flex-1 text-center md:text-left">
              <div className="max-w-md mx-auto">
                <h3 className="text-2xl font-bold mb-4">Why choose us for {service.title}?</h3>
                <p className="text-muted-foreground mb-8">
                  We leverage industry best practices and the latest technologies to ensure your {service.title.toLowerCase()} needs are met with precision and excellence.
                </p>
                <Link href="/contact">
                  <Button variant="outline" className="rounded-full">
                    Discuss Your Needs <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <section className="mt-32 container-padding">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden bg-primary px-8 py-16 md:px-16 md:py-20 text-center text-primary-foreground shadow-2xl shadow-primary/20 selection:bg-white selection:text-primary"
        >
          {/* Abstract Background Pattern */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M0 100 C 20 0 50 0 100 100 Z" fill="currentColor" />
            </svg>
          </div>

          <div className="relative z-10">
            <h2 className="text-3xl font-bold font-display mb-6">Not sure what you need?</h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Our team offers consultation to help define your technical requirements and roadmap.
            </p>
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="rounded-full h-12 px-8 shadow-xl hover:shadow-2xl transition-all">
                Book a Free Consultation
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
