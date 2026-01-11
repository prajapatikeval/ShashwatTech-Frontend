import { useMutation } from "@tanstack/react-query";
import { api } from "@shared/routes";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

type ContactInput = z.infer<typeof api.contact.submit.input>;

export function useContactSubmit() {
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (data: ContactInput) => {
      // Mocking the API response for frontend independence
      console.log("Mocking contact submission:", data);
      await new Promise(resolve => setTimeout(resolve, 500));
      return { id: 1, ...data, createdAt: new Date().toISOString() };
    },
    onSuccess: () => {
      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We will get back to you shortly.",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message || "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });
}
