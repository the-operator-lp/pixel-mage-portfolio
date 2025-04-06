
import React, { useState } from 'react';
import { Send, MessageSquare } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const ContactScroll = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Your scroll has been delivered to the adventurer.",
        duration: 5000,
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-16 bg-leather/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-cinzel mb-2">Send a Message Scroll</h2>
          <p className="font-imfell text-leather-dark italic">Contact the adventurer with inquiries or quests</p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <div className="scroll fancy-border">
            <div className="flex items-center mb-6">
              <MessageSquare className="w-6 h-6 text-leather mr-2" />
              <h3 className="font-cinzel text-xl">Magical Communication Scroll</h3>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 font-metamorphous text-sm text-leather-dark">
                  Your Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-parchment-light border border-leather/30 rounded-md font-imfell"
                  placeholder="Enter your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block mb-2 font-metamorphous text-sm text-leather-dark">
                  Your Magic Address (Email)
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-parchment-light border border-leather/30 rounded-md font-imfell"
                  placeholder="Enter your email"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block mb-2 font-metamorphous text-sm text-leather-dark">
                  Your Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 h-32 bg-parchment-light border border-leather/30 rounded-md font-imfell"
                  placeholder="Write your message here..."
                />
              </div>
              
              <div className="text-center">
                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-leather hover:bg-leather-dark text-parchment-light py-2 px-6 rounded-md transition-colors font-metamorphous flex items-center"
                >
                  <Send className="mr-2 w-4 h-4" />
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactScroll;
