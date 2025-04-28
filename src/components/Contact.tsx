
import { useState } from "react";
import { Button } from "./ui/button";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
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
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });
      
      setFormData({
        name: "",
        email: "",
        message: ""
      });
      
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl md:text-4xl font-bold text-nova-dark mb-4">Contact Us</h2>
          <div className="w-24 h-1 bg-nova-blue-dark mx-auto"></div>
          <p className="mt-6 text-lg text-nova-muted max-w-2xl mx-auto">
            Have a question or ready to start your next project? Get in touch with our team.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="reveal">
            <h3 className="text-2xl font-bold text-nova-dark mb-6">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-nova-dark mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-nova-blue-dark focus:border-nova-blue-dark"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-nova-dark mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-nova-blue-dark focus:border-nova-blue-dark"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-nova-dark mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-nova-blue-dark focus:border-nova-blue-dark"
                  placeholder="How can we help you?"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-nova-blue-dark hover:opacity-90 text-white py-3"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
          
          <div className="reveal">
            <h3 className="text-2xl font-bold text-nova-dark mb-6">Contact Information</h3>
            <div className="bg-nova-gray p-8 rounded-lg">
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-nova-dark mb-2">Address</h4>
                  <p className="text-nova-muted">123 Innovation Street, Tech District, CA 94107</p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-nova-dark mb-2">Email</h4>
                  <p className="text-nova-blue-dark">hello@novamarketing.com</p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-nova-dark mb-2">Phone</h4>
                  <p className="text-nova-muted">+1 (555) 123-4567</p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-nova-dark mb-2">Working Hours</h4>
                  <p className="text-nova-muted">Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p className="text-nova-muted">Saturday - Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
