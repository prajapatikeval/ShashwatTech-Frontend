import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code2, Layout, Database, CheckCircle2 } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
          <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-primary/10 blur-[100px]" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-blue-400/10 blur-[120px]" />
        </div>

        <div className="container-padding text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
              Empowering Digital Transformation
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-display tracking-tight text-foreground mb-6">
              Design. Develop. <br className="hidden md:block" />
              <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
                Deliver.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              We craft exceptional digital experiences through cutting-edge technology and innovative design. Your vision, engineered to perfection.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact">
                <Button size="lg" className="h-12 px-8 rounded-full text-base shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all">
                  Start Your Project
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="outline" size="lg" className="h-12 px-8 rounded-full text-base bg-background/50 backdrop-blur-sm">
                  Explore Services
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="section-padding bg-muted/30">
        <div className="container-padding">
          <SectionHeader 
            subtitle="Why Choose Us"
            title="Excellence in Every Line of Code"
            description="We combine technical expertise with creative problem-solving to deliver solutions that drive real business growth."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Layout className="w-8 h-8 text-primary" />,
                title: "Modern Design",
                desc: "User-centric interfaces that are beautiful, intuitive, and accessible across all devices."
              },
              {
                icon: <Code2 className="w-8 h-8 text-primary" />,
                title: "Clean Code",
                desc: "Maintainable, scalable, and efficient code architectures built with industry best practices."
              },
              {
                icon: <Database className="w-8 h-8 text-primary" />,
                title: "Scalable Systems",
                desc: "Robust backend solutions designed to handle growth and ensure high performance."
              }
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-card p-8 rounded-2xl border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-padding">
          <div className="relative rounded-3xl overflow-hidden bg-primary px-8 py-16 md:px-16 md:py-20 text-center text-primary-foreground shadow-2xl shadow-primary/20">
            {/* Abstract Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M0 100 C 20 0 50 0 100 100 Z" fill="currentColor" />
              </svg>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative z-10 max-w-3xl mx-auto selection:bg-white selection:text-primary"
            >
              <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">Ready to transform your digital presence?</h2>
              <p className="text-primary-foreground/80 text-lg mb-10 max-w-2xl mx-auto">
                Partner with a dedicated team committed to delivering quality, performance, and long-term value.
              </p>
              <Link href="/contact">
                <Button size="lg" variant="secondary" className="h-14 px-10 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all">
                  Get in Touch <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
