import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

export default function ProductPreview() {
  const focusAreas = [
    "Streamlined workflows",
    "Improved task and process visibility",
    "Clean and intuitive user experience",
    "Scalable and maintainable architecture"
  ];

  return (
    <div className="pt-32 pb-20 container-padding">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <Link href="/products">
              <Button variant="ghost" size="sm" className="no-default-hover-elevate -ml-2">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Products
              </Button>
            </Link>
            <div className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-semibold self-start md:self-auto">
              Currently in Development
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold font-display mb-6">Our Upcoming Product</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We are developing an internal product designed to help businesses streamline workflows and gain better visibility into their operations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <motion.section
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 className="text-2xl font-bold">The Problem We Are Solving</h2>
            <p className="text-muted-foreground leading-relaxed">
              Many teams rely on scattered tools and manual processes, which leads to inefficiency and poor visibility. Our product aims to solve this by providing a centralized and easy-to-use platform.
            </p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 className="text-2xl font-bold">What Kind of Product Is This?</h2>
            <p className="text-muted-foreground leading-relaxed">
              This is a web-based platform focused on workflow management, productivity improvement, and operational clarity, built with scalability and real-world business use cases in mind.
            </p>
          </motion.section>
        </div>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-muted/30 p-8 md:p-12 rounded-3xl border border-border/50 mb-20"
        >
          <h2 className="text-2xl font-bold mb-8 text-center">Key Focus Areas</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {focusAreas.map((area, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle2 className="text-primary h-6 w-6 shrink-0" />
                <span className="text-lg">{area}</span>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-2xl font-bold mb-4">Current Status</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            The product is in active development. We are validating core requirements and refining the experience before moving toward launch.
          </p>
        </motion.section>

        <motion.section
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
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Interested in learning more or collaborating with us?</h2>
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="rounded-full h-12 px-8 shadow-lg hover:shadow-xl transition-all">
                Get in Touch
              </Button>
            </Link>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
