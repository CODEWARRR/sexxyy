import { Button } from "@/components/ui/button";
import { Check, Star, Award } from "lucide-react";
import jotahProduct1 from "@assets/jotah-product-1.jpeg";
import jotahProduct2 from "@assets/jotah-product-2.jpeg";
import jotahProduct3 from "@assets/jotah-product-3.jpeg";

export default function RollingPaperShowcase() {
  const products = [
    {
      image: jotahProduct1,
      name: "Jotah Classic",
      description: "Our signature rolling papers with perfect burn rate and minimal ash",
      features: ["Ultra-thin paper", "Natural gum", "Slow burn", "32 papers per pack"]
    },
    {
      image: jotahProduct2,
      name: "Jotah Premium",
      description: "Premium quality papers for the ultimate smoking experience",
      features: ["Superior quality", "Rice paper", "Even burn", "King size available"]
    },
    {
      image: jotahProduct3,
      name: "Jotah Special Edition",
      description: "Limited edition papers with unique Indian heritage design",
      features: ["Heritage design", "Collector's item", "Premium materials", "Gift packaging"]
    }
  ];

  const qualityFeatures = [
    {
      icon: Award,
      title: "Premium Quality",
      description: "Made from finest rice and hemp papers"
    },
    {
      icon: Star,
      title: "Perfect Burn",
      description: "Consistent burn rate with minimal ash"
    },
    {
      icon: Check,
      title: "Natural Gum",
      description: "Chemical-free adhesive for pure taste"
    }
  ];

  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-dark-brown mb-6">
            Our Rolling Papers
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover India's finest rolling papers, crafted with precision and designed for the perfect smoking experience
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100 hover:shadow-2xl transition-all transform hover:scale-105">
              <div className="aspect-square overflow-hidden">
                <img 
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-playfair font-bold text-dark-brown mb-3">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {product.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <Check className="h-4 w-4 text-goldenrod mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button 
                  className="w-full bg-saddle-brown hover:bg-dark-brown text-white px-6 py-3 rounded-lg font-medium transition-colors"
                  data-testid={`button-learn-more-${index}`}
                >
                  Learn More
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Quality Features */}
        <div className="bg-gradient-to-r from-saddle-brown to-dark-brown rounded-3xl p-8 md:p-12 text-white">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-playfair font-bold mb-4">
              Why Choose Jotah?
            </h3>
            <p className="text-warm-cream text-lg">
              Experience the difference that quality makes
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {qualityFeatures.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-goldenrod rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-dark-brown" />
                </div>
                <h4 className="text-xl font-semibold mb-3">{feature.title}</h4>
                <p className="text-warm-cream">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-goldenrod/20 rounded-2xl p-6 inline-block">
              <p className="text-goldenrod font-semibold text-lg">
                🇮🇳 India's First Rolling Paper Brand • Trusted by Thousands • Made with Pride
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}