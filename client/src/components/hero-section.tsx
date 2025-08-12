import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://pixabay.com/get/g13b2e9b97da71c343a380b2f374c2f96a38dbaba1605e395dbd345f59665404c51b20d73491e9e1806a10607b9bebaecfa9e5339a56677a23f6f4b19174b16ba_1280.jpg"
          alt="Premium tobacco leaves background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-brown/80 to-saddle-brown/60"></div>
      </div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl md:text-7xl font-playfair font-bold text-white mb-6">
          India's <span className="text-goldenrod">Only</span> Rolling Paper Brand
        </h1>
        <p className="text-xl md:text-2xl text-warm-cream mb-4 leading-relaxed">
          Premium rolling papers and tobacco accessories, handcrafted with centuries of Indian heritage and modern excellence
        </p>
        <div className="bg-goldenrod/20 backdrop-blur-sm rounded-xl p-4 mb-8 border border-goldenrod/30">
          <p className="text-goldenrod font-semibold text-lg">
            🇮🇳 Proudly Made in India • First Indigenous Brand • Premium Quality Since Day One
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={() => scrollToSection("products")}
            className="bg-goldenrod hover:bg-peru-gold text-dark-brown px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105"
            data-testid="button-explore-products"
          >
            Explore Products
          </Button>
          <Button
            onClick={() => scrollToSection("heritage")}
            variant="outline"
            className="border-2 border-white text-white hover:bg-white hover:text-dark-brown px-8 py-4 rounded-lg font-semibold text-lg transition-all"
            data-testid="button-our-heritage"
          >
            Our Heritage
          </Button>
        </div>
      </div>
    </section>
  );
}
