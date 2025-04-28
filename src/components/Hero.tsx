
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-white to-nova-blue/30"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0 reveal">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-nova-dark leading-tight">
              Grow Your Brand with <span className="text-nova-blue-dark">Nova Marketing</span>
            </h1>
            <p className="text-lg md:text-xl text-nova-muted mb-8 max-w-lg">
              Innovative digital strategies that transform your online presence and drive real results for your business.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button 
                size="lg" 
                className="bg-nova-blue-dark hover:opacity-90 text-white text-lg px-8"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get Started
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-nova-blue-dark text-nova-blue-dark hover:bg-nova-blue/10 text-lg px-8"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Learn More
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 reveal">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-nova-blue-dark/20 rounded-full"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-nova-blue-dark/10 rounded-full"></div>
              <div className="bg-white p-4 rounded-2xl shadow-lg relative z-10">
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                  alt="Digital Marketing Strategy"
                  className="rounded-lg w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
