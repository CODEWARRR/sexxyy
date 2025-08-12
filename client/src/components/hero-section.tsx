import { Button } from "@/components/ui/button";
import jotahLogoPath from "@assets/jotah-logo.jpeg";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="w-full h-full bg-gradient-to-br from-saddle-brown/20 to-goldenrod/20"></div>
      </div>
      
      <div className="relative z-10 text-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="mb-8">
          <img 
            src={jotahLogoPath}
            alt="Jotah Rolling Papers Logo"
            className="h-32 md:h-40 mx-auto rounded-2xl shadow-2xl"
          />
        </div>

        <h1 className="text-5xl md:text-7xl font-playfair font-bold text-dark-brown mb-6">
          <span className="text-saddle-brown">JOTAH</span>
        </h1>
        
        <h2 className="text-2xl md:text-4xl font-semibold text-goldenrod mb-8">
          India's First Rolling Paper Brand
        </h2>
        
        <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed max-w-4xl mx-auto">
          Premium quality rolling papers crafted for the discerning Indian smoker. 
          Experience the perfect blend of tradition and innovation in every roll.
        </p>
        
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-saddle-brown/20 shadow-lg max-w-2xl mx-auto">
          <p className="text-saddle-brown font-semibold text-lg">
            🇮🇳 Made in India • Premium Quality • Authentic Experience
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={() => scrollToSection("products")}
            className="bg-saddle-brown hover:bg-dark-brown text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-lg"
            data-testid="button-explore-products"
          >
            Explore Our Rolling Papers
          </Button>
          <Button
            onClick={() => scrollToSection("find-products")}
            variant="outline"
            className="border-2 border-saddle-brown text-saddle-brown hover:bg-saddle-brown hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all"
            data-testid="button-buy-now"
          >
            Buy Now
          </Button>
        </div>
      </div>
    </section>
  );
}
