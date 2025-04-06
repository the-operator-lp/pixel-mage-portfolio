
import React, { useState } from 'react';
import { Send, Terminal } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const VoidGate = () => {
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
    
    // Simulate form submission with a typing effect
    setTimeout(() => {
      toast({
        title: "Transmission received",
        description: "Your message has been encoded and sent to the void.",
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

  const handleFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    // Add sound effect here if implemented
  };

  return (
    <section id="gate" className="py-16 bg-[#0c0c0c]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-xl font-jetbrains mb-2 text-gray-300">THE VOID GATE</h2>
          <p className="font-jetbrains text-xs text-gray-500">
            <span className="text-gray-400">$ ssh</span> contact@shadowcaster.void
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <div className="terminal">
            {/* Terminal header */}
            <div className="flex items-center mb-6 pb-3 border-b border-gray-800">
              <div className="flex space-x-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-gray-700"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-gray-700"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-gray-700"></div>
              </div>
              
              <div className="ml-4 flex-1 text-center">
                <span className="text-gray-500 text-xs">secure_transmission.sh</span>
              </div>
              
              <div className="flex space-x-2">
                <Terminal className="w-4 h-4 text-gray-600" />
              </div>
            </div>
            
            <div className="mb-4">
              <div className="flex items-center">
                <span className="inline-block w-2 h-2 bg-gray-500 rounded-full mr-2 animate-pulse"></span>
                <span className="text-gray-400 text-xs">CONNECTION_ACTIVE</span>
              </div>
              <p className="text-[10px] mt-2 text-gray-500 mb-4">
                /* Encrypted channel established. Your message will be securely transmitted to the shadow_caster. */
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <div className="text-gray-500 text-xs mb-2">&gt; sender_identity:</div>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  required
                  className="bg-gray-900 border-gray-800 text-gray-300 text-sm w-full px-3 py-2 rounded-sm font-jetbrains placeholder:text-gray-600"
                  placeholder="Enter your identifier"
                />
              </div>
              
              <div>
                <div className="text-gray-500 text-xs mb-2">&gt; communication_vector:</div>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  required
                  className="bg-gray-900 border-gray-800 text-gray-300 text-sm w-full px-3 py-2 rounded-sm font-jetbrains placeholder:text-gray-600"
                  placeholder="Enter your email address"
                />
              </div>
              
              <div>
                <div className="text-gray-500 text-xs mb-2">&gt; transmission_content:</div>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  required
                  className="bg-gray-900 border-gray-800 text-gray-300 text-sm w-full px-3 py-2 h-32 rounded-sm font-jetbrains placeholder:text-gray-600"
                  placeholder="Write your encrypted message here..."
                />
              </div>
              
              <div className="text-right">
                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-gray-800 hover:bg-gray-700 text-gray-300 py-2 px-4 rounded-sm transition-colors font-jetbrains text-xs flex items-center"
                >
                  <Send className="mr-2 w-3 h-3" />
                  {isSubmitting ? "TRANSMITTING..." : "TRANSMIT_MESSAGE"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VoidGate;
