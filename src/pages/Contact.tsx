import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from 'react';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Card } from "@/components/ui/card";
import { Mail, Phone, Send, Loader2 } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { toast } from "@/hooks/use-toast";

/* =========================
   Frontend-only schema
========================= */
const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(1, "Message is required"),
});

export default function Contact() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const [isPending, setIsPending] = useState(false);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsPending(true);
    // const { toast } = useToast();

    // Frontend-only submit (no backend)
    console.log("Contact form submitted:", values);

    setTimeout(() => {
      setIsPending(false);
      form.reset();
      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We will get back to you shortly.",
      });
    }, 1000);
  }

  return (
    <div className="pt-24 pb-16">
      <div className="container-padding">
        <SectionHeader
          subtitle="Get in Touch"
          title="Let's Start a Conversation"
          description="Have a project in mind? We'd love to hear from you. Send us a message and we'll respond as soon as possible."
          className="mb-16"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <Card className="p-8 border-border/50 shadow-sm">
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email Us</h4>
                    <p className="text-muted-foreground text-sm">
                      shashwattechinfo@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Call Us</h4>
                    <p className="text-muted-foreground text-sm">
                      +91 8849091135, +91 9601402228
                      <br />
                      Mon-Sat from 9am to 10pm
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <div className="bg-muted/30 p-8 rounded-2xl border border-border/50">
              <h3 className="font-bold mb-3">FAQ</h3>
              <div className="space-y-4 text-sm text-muted-foreground">
                <p>
                  <strong className="text-foreground block mb-1">
                    What is your typical response time?
                  </strong>
                  We usually respond to all inquiries within 24 business hours.
                </p>
                <p>
                  <strong className="text-foreground block mb-1">
                    Do you offer free consultations?
                  </strong>
                  Yes, we offer a complimentary 30-minute initial consultation.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Card className="p-8 md:p-10 shadow-lg border-primary/10">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="John Doe"
                            className="h-12 bg-muted/30"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="john@example.com"
                            className="h-12 bg-muted/30"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell us about your project..."
                            className="min-h-[150px] resize-none bg-muted/30"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="w-full h-12 text-base font-semibold shadow-lg shadow-primary/20 hover:shadow-primary/30"
                    disabled={isPending}
                  >
                    {isPending ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
