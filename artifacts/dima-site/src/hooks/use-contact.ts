import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export function useContact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendMessage = async (data: { name: string; email: string; message: string }) => {
    setIsSubmitting(true);
    
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. Dima will get back to you soon.",
    });
  };

  return {
    sendMessage,
    isSubmitting,
  };
}
