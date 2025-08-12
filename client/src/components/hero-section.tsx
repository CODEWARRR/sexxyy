import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import jotahLogoPath from "@assets/jotah-logo.jpeg";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
      {/* Background Video/Image Effect */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-br from-black via-gray-900 to-black"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30"></div>
        {/* Animated particles effect */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-goldenrod rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>
      
      <div className="relative z-10 text-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="mb-12 animate-fade-in">
          <img 
            src={jotahLogoPath}
            alt="Jotah Rolling Papers Logo"
            className="h-24 md:h-32 mx-auto rounded-xl shadow-2xl border-2 border-goldenrod/30"
          />
        </div>

        {/* Main Title */}
        <div className="mb-8 animate-slide-up">
          <h1 className="text-6xl md:text-8xl font-playfair font-bold text-white mb-4 tracking-tight">
            <span className="bg-gradient-to-r from-goldenrod via-yellow-400 to-goldenrod bg-clip-text text-transparent">
              JOTAH
            </span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-goldenrod to-transparent mx-auto mb-6"></div>
        </div>
        
        {/* Subtitle */}
        <h2 className="text-2xl md:text-4xl font-semibold text-goldenrod mb-6 animate-fade-in-delay">
          India's First Rolling Paper Brand
        </h2>
        
        {/* Description */}
        <p className="text-lg md:text-xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto animate-fade-in-delay-2">
          Experience premium quality rolling papers crafted for the discerning smoker. 
          <span className="text-goldenrod font-medium"> Born in India, made for excellence.</span>
        </p>
        
        {/* Badge */}
        <div className="inline-flex items-center bg-gradient-to-r from-goldenrod/20 to-yellow-400/20 backdrop-blur-sm rounded-full px-8 py-4 mb-12 border border-goldenrod/30 animate-fade-in-delay-3">
          <span className="text-goldenrod font-semibold text-lg">
            🇮🇳 Proudly Made in India • Premium Quality • Authentic Experience
          </span>
        </div>
        
        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-fade-in-delay-4">
          <Button
            onClick={() => scrollToSection("products")}
            className="bg-gradient-to-r from-goldenrod to-yellow-400 hover:from-yellow-400 hover:to-goldenrod text-black px-10 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-2xl hover:shadow-goldenrod/25"
            data-testid="button-explore-products"
          >
            Explore Products
          </Button>
          <Button
            onClick={() => scrollToSection("find-products")}
            variant="outline"
            className="border-2 border-goldenrod text-goldenrod hover:bg-goldenrod hover:text-black px-10 py-4 rounded-full font-bold text-lg transition-all hover:shadow-lg hover:shadow-goldenrod/25"
            data-testid="button-buy-now"
          >
            Order Now
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="animate-bounce">
          <ChevronDown 
            className="h-8 w-8 text-goldenrod mx-auto cursor-pointer hover:text-yellow-400 transition-colors"
            onClick={() => scrollToSection("products")}
          />
        </div>
      </div>


    </section>
  );
}
