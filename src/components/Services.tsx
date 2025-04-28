
import { FileText, Users, Activity } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "SEO Optimization",
      description: "Boost your visibility and climb search rankings with our data-driven SEO strategies tailored to your business goals.",
      icon: <Activity className="w-12 h-12 text-nova-blue-dark" />
    },
    {
      title: "Social Media Management",
      description: "Build engaging communities and meaningful connections with your audience through strategic social media campaigns.",
      icon: <Users className="w-12 h-12 text-nova-blue-dark" />
    },
    {
      title: "Content Marketing",
      description: "Captivate your audience with compelling content that tells your brand story and establishes your industry authority.",
      icon: <FileText className="w-12 h-12 text-nova-blue-dark" />
    }
  ];
  
  return (
    <section id="services" className="bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl md:text-4xl font-bold text-nova-dark mb-4">Our Services</h2>
          <div className="w-24 h-1 bg-nova-blue-dark mx-auto"></div>
          <p className="mt-6 text-lg text-nova-muted max-w-2xl mx-auto">
            Comprehensive digital marketing solutions designed to elevate your brand and drive meaningful results.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-nova-gray p-8 rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-2 reveal"
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-xl font-bold text-nova-dark mb-4">{service.title}</h3>
              <p className="text-nova-muted">{service.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12 reveal">
          <p className="text-lg text-nova-dark mb-6">
            Ready to transform your digital presence?
          </p>
          <button 
            className="bg-nova-blue-dark text-white py-3 px-8 rounded-lg font-medium hover:opacity-90 transition-opacity"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Talk to an Expert
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
