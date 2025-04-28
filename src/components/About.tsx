
const About = () => {
  return (
    <section id="about" className="bg-nova-gray py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl md:text-4xl font-bold text-nova-dark mb-4">About Us</h2>
          <div className="w-24 h-1 bg-nova-blue-dark mx-auto"></div>
        </div>
        
        <div className="max-w-3xl mx-auto text-center reveal">
          <p className="text-lg md:text-xl text-nova-dark mb-8 leading-relaxed">
            At Nova Marketing, we believe in the power of innovative digital strategies to transform businesses. Our mission is to empower brands with cutting-edge marketing solutions that drive real, measurable results in today's competitive digital landscape.
          </p>
          <p className="text-lg md:text-xl text-nova-dark leading-relaxed">
            Founded in 2023, we combine data-driven insights with creative excellence to help our clients stand out and succeed. Our team of experts is passionate about staying ahead of digital trends and delivering exceptional value through personalized marketing approaches.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {[
            {
              number: "350+",
              label: "Projects Completed"
            },
            {
              number: "98%",
              label: "Client Satisfaction"
            },
            {
              number: "45%",
              label: "Average Growth"
            }
          ].map((stat, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-lg shadow-md text-center reveal"
            >
              <h3 className="text-4xl font-bold text-nova-blue-dark mb-2">{stat.number}</h3>
              <p className="text-nova-dark">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
