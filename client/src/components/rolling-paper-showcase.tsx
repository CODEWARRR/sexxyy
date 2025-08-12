import { Button } from "@/components/ui/button";
import { Check, Star, Award, Flame, Leaf, Crown } from "lucide-react";
import jotahProduct1 from "@assets/jotah-product-1.jpeg";
import jotahProduct2 from "@assets/jotah-product-2.jpeg";
import jotahProduct3 from "@assets/jotah-product-3.jpeg";

export default function RollingPaperShowcase() {
  const products = [
    {
      image: jotahProduct1,
      name: "Jotah Classic",
      tagline: "The Original",
      description: "Our signature rolling papers that started it all. Perfect for everyday smoking with consistent quality.",
      features: ["Ultra-thin 14gsm paper", "Natural Arabic gum", "32 leaves per pack", "Classic 78mm size"],
      price: "₹25",
      badge: "Best Seller"
    },
    {
      image: jotahProduct2,
      name: "Jotah Premium",
      tagline: "Enhanced Experience",
      description: "Premium quality papers for the connoisseur. Unbleached and organic for pure taste.",
      features: ["Unbleached rice paper", "Slow & even burn", "King size 110mm", "Premium packaging"],
      price: "₹40",
      badge: "Premium"
    },
    {
      image: jotahProduct3,
      name: "Jotah Heritage",
      tagline: "Limited Edition",
      description: "Special edition with traditional Indian artwork. A collector's piece for enthusiasts.",
      features: ["Heritage design", "Collector's packaging", "Hand-crafted quality", "Limited availability"],
      price: "₹60",
      badge: "Limited"
    }
  ];

  const qualityFeatures = [
    {
      icon: Flame,
      title: "Perfect Burn",
      description: "Consistent burn rate with minimal ash production",
      color: "from-orange-400 to-red-500"
    },
    {
      icon: Leaf,
      title: "Natural Materials",
      description: "Made from finest organic rice and hemp fibers",
      color: "from-green-400 to-emerald-500"
    },
    {
      icon: Crown,
      title: "Premium Quality",
      description: "India's first and finest rolling paper brand",
      color: "from-goldenrod to-yellow-400"
    }
  ];

  return (
    <section id="products" className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-goldenrod to-yellow-400 bg-clip-text text-transparent text-sm font-bold tracking-widest uppercase">
              Premium Collection
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-playfair font-bold text-white mb-6">
            Our Rolling Papers
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover India's finest rolling papers, crafted with precision for the perfect smoking experience
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-goldenrod to-transparent mx-auto mt-8"></div>
        </div>

        {/* Product Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {products.map((product, index) => (
            <div key={index} className="group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl overflow-hidden border border-gray-700 hover:border-goldenrod/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-goldenrod/20">
              {/* Badge */}
              <div className="absolute top-4 right-4 z-10">
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                  product.badge === "Best Seller" ? "bg-green-500 text-black" :
                  product.badge === "Premium" ? "bg-goldenrod text-black" :
                  "bg-purple-500 text-white"
                }`}>
                  {product.badge}
                </span>
              </div>

              {/* Product Image */}
              <div className="aspect-square overflow-hidden relative">
                <img 
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>

              {/* Product Info */}
              <div className="p-8">
                <div className="mb-4">
                  <h3 className="text-2xl font-playfair font-bold text-white mb-2">
                    {product.name}
                  </h3>
                  <p className="text-goldenrod font-medium text-sm tracking-wide">
                    {product.tagline}
                  </p>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {product.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {product.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <Check className="h-4 w-4 text-goldenrod mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Price and CTA */}
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-goldenrod">
                    {product.price}
                  </div>
                  <Button 
                    className="bg-gradient-to-r from-goldenrod to-yellow-400 hover:from-yellow-400 hover:to-goldenrod text-black px-6 py-2 rounded-full font-bold transition-all transform hover:scale-105"
                    data-testid={`button-buy-${index}`}
                  >
                    Order Now
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quality Features */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-goldenrod/20 via-yellow-400/20 to-goldenrod/20 rounded-3xl blur-xl"></div>
          <div className="relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-3xl p-12 border border-goldenrod/30">
            <div className="text-center mb-16">
              <h3 className="text-4xl font-playfair font-bold text-white mb-4">
                Why Choose <span className="text-goldenrod">Jotah</span>?
              </h3>
              <p className="text-gray-300 text-lg">
                Experience the difference that quality and craftsmanship make
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              {qualityFeatures.map((feature, index) => (
                <div key={index} className="text-center group">
                  <div className={`w-20 h-20 bg-gradient-to-br ${feature.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <feature.icon className="h-10 w-10 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-4">{feature.title}</h4>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-16">
              <div className="inline-flex items-center bg-gradient-to-r from-goldenrod/20 to-yellow-400/20 rounded-full px-8 py-4 border border-goldenrod/30">
                <span className="text-goldenrod font-bold text-lg">
                  🇮🇳 India's First Rolling Paper Brand • Trusted by Thousands • Made with Pride
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}