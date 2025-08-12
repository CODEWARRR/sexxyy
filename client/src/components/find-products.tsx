import { Button } from "@/components/ui/button";
import { ExternalLink, Clock, Truck, Star } from "lucide-react";

export default function FindProducts() {
  const deliveryApps = [
    {
      name: "Zepto",
      logo: "https://cdn.worldvectorlogo.com/logos/zepto-1.svg",
      description: "Ultra-fast 10-minute delivery",
      features: ["10-min delivery", "Premium selection", "24/7 available"],
      color: "bg-purple-500",
      href: "#",
      icon: Clock
    },
    {
      name: "Blinkit",
      logo: "https://logos-world.net/wp-content/uploads/2022/08/Blinkit-Logo.png",
      description: "Quick grocery delivery",
      features: ["Quick delivery", "Wide coverage", "Quality assured"],
      color: "bg-yellow-500",
      href: "#",
      icon: Truck
    },
    {
      name: "Instamart",
      logo: "https://logos-world.net/wp-content/uploads/2023/01/Swiggy-Instamart-Logo.png",
      description: "Reliable instant delivery",
      features: ["Instant delivery", "Trusted platform", "Best prices"],
      color: "bg-orange-500",
      href: "#",
      icon: Star
    }
  ];

  const benefits = [
    "Same-day delivery across major cities",
    "Authentic Jotah products guaranteed",
    "Special offers and bundle deals",
    "Convenient doorstep delivery"
  ];

  return (
    <section id="find-products" className="py-20 bg-gradient-to-br from-warm-cream to-cornsilk">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-dark-brown mb-6">
            Find Our Products
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Get authentic Jotah rolling papers delivered to your doorstep through India's most trusted delivery platforms
          </p>
        </div>

        {/* Delivery Apps Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {deliveryApps.map((app, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all transform hover:scale-105">
              <div className="text-center mb-6">
                <div className={`w-20 h-20 ${app.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <app.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-playfair font-bold text-dark-brown mb-2">
                  {app.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {app.description}
                </p>
              </div>

              <div className="space-y-3 mb-6">
                {app.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-goldenrod rounded-full mr-3"></div>
                    {feature}
                  </div>
                ))}
              </div>

              <Button 
                className="w-full bg-saddle-brown hover:bg-dark-brown text-white px-6 py-3 rounded-lg font-semibold transition-colors group"
                data-testid={`button-order-${app.name.toLowerCase()}`}
              >
                Order on {app.name}
                <ExternalLink className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="bg-white rounded-2xl p-8 shadow-xl">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-playfair font-bold text-dark-brown mb-6">
                Why Order Online?
              </h3>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-6 h-6 bg-goldenrod rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <div className="w-2 h-2 bg-dark-brown rounded-full"></div>
                    </div>
                    <p className="text-gray-600">{benefit}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-6 bg-goldenrod/10 rounded-xl">
                <p className="text-saddle-brown font-semibold mb-2">
                  🚀 India's First & Only Premium Rolling Paper Brand
                </p>
                <p className="text-gray-600 text-sm">
                  Experience the authentic taste of tradition with modern convenience
                </p>
              </div>
            </div>

            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
                alt="Fast delivery service"
                className="rounded-xl shadow-lg w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-brown/30 to-transparent rounded-xl"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4">
                  <p className="text-dark-brown font-semibold text-sm">
                    Available in 25+ major cities across India
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Can't find us on these platforms? We're expanding rapidly!
          </p>
          <Button 
            className="bg-goldenrod hover:bg-peru-gold text-dark-brown px-8 py-4 rounded-lg font-semibold text-lg"
            data-testid="button-request-availability"
          >
            Request in Your Area
          </Button>
        </div>
      </div>
    </section>
  );
}