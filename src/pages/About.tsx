import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CheckCircle2, Users, Trophy, Target } from "lucide-react";

export default function About() {
  return (
    <div className="pt-24 pb-16">
      {/* Hero */}
      <section className="container-padding mb-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold font-display mb-6"
          >
            We Build The Future
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground leading-relaxed"
          >
            ShashwatTech is a premier technology services company dedicated to helping businesses navigate the digital landscape with confidence and clarity.
          </motion.p>
        </div>
      </section>

      {/* Our Story / Mission */}
      <section className="section-padding bg-muted/30">
        <div className="container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold font-display mb-6">Driven by Innovation</h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Founded with a vision to simplify complex technology challenges, ShashwatTech has grown into a trusted partner for businesses across industries. We believe that technology should be an enabler, not a barrier.
                </p>
                <p>
                  Our team consists of passionate designers, developers, and strategists who work collaboratively to bring your ideas to life. We don't just write code; we architect solutions that scale with your ambitions.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 mt-10">
                <div className="bg-background p-6 rounded-xl border border-border shadow-sm">
                  <h4 className="text-4xl font-bold text-primary mb-2">1+</h4>
                  <p className="text-sm font-medium text-muted-foreground">Month of Experience</p>
                </div>
                <div className="bg-background p-6 rounded-xl border border-border shadow-sm">
                  <h4 className="text-4xl font-bold text-primary mb-2">1+</h4>
                  <p className="text-sm font-medium text-muted-foreground">Projects Delivered</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative w-full overflow-hidden"
            >
              {/* Abstract decorative composition instead of stock photo */}
              <div className="md:aspect-auto min-h-fit md:min-h-0 md:h-full rounded-2xl bg-gradient-to-tr from-primary/20 to-blue-600/20 p-4 md:p-8 flex items-center justify-center relative overflow-hidden">
                 <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />
                 <div className="flex flex-col md:grid md:grid-cols-2 gap-4 md:gap-8 w-full p-2 md:p-4 relative z-10">
                    <div className="bg-background/80 backdrop-blur-sm rounded-xl w-full shadow-lg flex flex-col items-center justify-center p-6 md:p-6 text-center md:transform md:translate-y-6">
                       <Users className="w-8 h-8 md:w-10 md:h-10 text-primary mb-2 md:mb-4" />
                       <h3 className="text-base md:text-lg font-bold mb-1">Expert Team</h3>
                       <p className="text-xs md:text-sm text-muted-foreground">Top-tier talent dedicated to your success</p>
                    </div>
                    <div className="bg-background/80 backdrop-blur-sm rounded-xl w-full shadow-lg flex flex-col items-center justify-center p-6 md:p-6 text-center md:transform md:-translate-y-2">
                       <Target className="w-8 h-8 md:w-10 md:h-10 text-primary mb-2 md:mb-4" />
                       <h3 className="text-base md:text-lg font-bold mb-1">Goal Oriented</h3>
                       <p className="text-xs md:text-sm text-muted-foreground">Focused on delivering measurable results</p>
                    </div>
                    <div className="bg-background/80 backdrop-blur-sm rounded-xl w-full shadow-lg flex flex-col items-center justify-center p-6 md:p-6 text-center md:transform md:translate-y-2">
                       <Trophy className="w-8 h-8 md:w-10 md:h-10 text-primary mb-2 md:mb-4" />
                       <h3 className="text-base md:text-lg font-bold mb-1">Award Winning</h3>
                       <p className="text-xs md:text-sm text-muted-foreground">Recognized for excellence in design</p>
                    </div>
                     <div className="bg-background/80 backdrop-blur-sm rounded-xl w-full shadow-lg flex flex-col items-center justify-center p-6 md:p-6 text-center md:transform md:-translate-y-6">
                       <CheckCircle2 className="w-8 h-8 md:w-10 md:h-10 text-primary mb-2 md:mb-4" />
                       <h3 className="text-base md:text-lg font-bold mb-1">Quality First</h3>
                       <p className="text-xs md:text-sm text-muted-foreground">Uncompromising attention to detail</p>
                    </div>
                 </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding">
        <div className="container-padding">
          <SectionHeader 
            subtitle="Core Values"
            title="What Drives Us Forward"
            description="Our culture is built on a foundation of integrity, innovation, and unwavering commitment to client success."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              {
                title: "Client-Centricity",
                desc: "Your success is our success. We listen, understand, and tailor our approach to meet your unique needs."
              },
              {
                title: "Continuous Innovation",
                desc: "We stay ahead of the curve, constantly exploring new technologies to give you a competitive edge."
              },
              {
                title: "Transparent Communication",
                desc: "We believe in honest, open dialogue at every stage of the project lifecycle. No surprises."
              }
            ].map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 rounded-2xl border border-border bg-card hover:bg-muted/50 transition-colors"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary font-bold text-xl">
                  {idx + 1}
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
