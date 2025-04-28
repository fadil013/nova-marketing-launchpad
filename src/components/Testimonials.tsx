
const Testimonials = () => {
  const testimonials = [
    {
      quote: "Nova Marketing transformed our online presence completely. Their SEO strategy helped us achieve a 200% increase in organic traffic within just three months.",
      name: "Sarah Johnson",
      position: "CEO, TechStart Solutions",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=388&q=80"
    },
    {
      quote: "The social media campaigns designed by Nova have helped us connect with our audience in ways we never thought possible. Our engagement rates have tripled!",
      name: "Michael Chen",
      position: "Marketing Director, Innovate Retail",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
    }
  ];
  
  return (
    <section id="testimonials" className="bg-gradient-to-br from-nova-blue/30 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl md:text-4xl font-bold text-nova-dark mb-4">Client Testimonials</h2>
          <div className="w-24 h-1 bg-nova-blue-dark mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-lg shadow-md relative reveal"
            >
              <div className="absolute -top-6 -left-6 w-12 h-12 bg-nova-blue-dark rounded-full flex items-center justify-center text-white text-2xl">
                "
              </div>
              <p className="text-nova-dark italic mb-6">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-nova-dark">{testimonial.name}</h4>
                  <p className="text-sm text-nova-muted">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
