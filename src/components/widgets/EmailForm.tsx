
import React, { useState } from 'react';
import { useToast } from "@/hooks/use-toast";
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Loader2, Send } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  subject: z.string().min(5, {
    message: "Subject must be at least 5 characters.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

type FormValues = z.infer<typeof formSchema>;

const EmailForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (values: FormValues) => {
    setIsSubmitting(true);
    
    try {
      // Simulating API call to send email
      // In a real app, replace with actual API endpoint
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log('Email submitted:', values);
      
      toast({
        title: "Message Sent",
        description: "Your mystical communication has been dispatched.",
      });
      
      form.reset();
    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: "Sending Failed",
        description: "The arcane forces prevented your message from being sent.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="scroll mb-6">
      <h3 className="text-lg font-bold mb-4 glitch-hover" data-text="Send a Magical Communication">
        Send a Magical Communication
      </h3>
      
      <div className="terminal p-4">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-400">Your Identity</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="Enter thy name..." 
                      className="bg-gray-900 border-gray-700"
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
                  <FormLabel className="text-gray-400">Your Scrying Address</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="your@magical.realm" 
                      className="bg-gray-900 border-gray-700"
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-400">Scroll Title</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="Purpose of thine message..." 
                      className="bg-gray-900 border-gray-700"
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
                  <FormLabel className="text-gray-400">Your Inscription</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Write thy message here..." 
                      className="bg-gray-900 border-gray-700 min-h-[120px]"
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-gray-800 hover:bg-gray-700 text-gray-200"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Casting spell...
                </>
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" />
                  Send Magical Message
                </>
              )}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default EmailForm;
