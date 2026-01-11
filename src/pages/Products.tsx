import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Rocket, ArrowRight } from "lucide-react";

export default function Products() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center container-padding pt-32 pb-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl w-full mx-auto"
      >
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Rocket className="w-10 h-10 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold font-display mb-4">Products</h1>
          <p className="text-xl text-muted-foreground">Innovation in the making.</p>
        </div>

        <Card className="p-8 md:p-12 border-border/50 shadow-xl shadow-primary/5 hover-elevate overflow-visible">
          <div className="flex flex-col items-center text-center">
            <Badge variant="outline" className="mb-6 px-4 py-1 border-primary/20 text-primary bg-primary/5 animate-pulse no-default-hover-elevate">
              Launching Soon
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">Upcoming Product</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-10">
              We are building our first in-house web-based product focused on simplifying workflows, improving productivity, and helping businesses manage their digital operations more efficiently. The product is currently in active development and will be launched once the core experience is ready.
            </p>
            <Link href="/product-preview">
              <Button size="lg" className="rounded-full h-12 px-8 shadow-lg shadow-primary/20">
                View Product Preview <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </Card>
      </motion.div>
    </div>
  );
}
