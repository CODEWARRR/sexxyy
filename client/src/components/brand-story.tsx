import { Button } from "@/components/ui/button";
import { Heart, Users, Target, TrendingUp } from "lucide-react";

export default function BrandStory() {
  const milestones = [
    {
      icon: Target,
      title: "Vision",
      description: "To become India's most trusted rolling paper brand"
    },
    {
      icon: Heart,
      title: "Passion",
      description: "Crafted with love for the Indian smoking community"
    },
    {
      icon: Users,
      title: "Community",
      description: "Building a community of quality-conscious smokers"
    },
    {
      icon: TrendingUp,
      title: "Innovation",
      description: "Continuously improving our products and experience"
    }
  ];

  const values = [
    "Premium quality without compromise",
    "Made in India with pride",
    "Sustainable and eco-friendly practices",
    "Customer satisfaction first"
  ];

  return (
    <section id="brand-story" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-dark-brown mb-6">
              The <span className="text-saddle-brown">Jotah</span> Story
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Born from a vision to provide India with its first premium rolling paper brand, 
              Jotah represents a breakthrough in quality and craftsmanship. We recognized the 
              need for superior rolling papers in the Indian market and set out to create 
              something truly special.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Every Jotah rolling paper is crafted with meticulous attention to detail, 
              using the finest materials and traditional techniques combined with modern 
              innovation. We're not just making rolling papers – we're crafting experiences.
            </p>

            <div className="bg-white rounded-2xl p-6 shadow-lg border border-saddle-brown/10 mb-8">
              <h4 className="font-semibold text-dark-brown mb-4">Our Values</h4>
              <div className="space-y-3">
                {values.map((value, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-goldenrod rounded-full mr-4"></div>
                    <p className="text-gray-600">{value}</p>
                  </div>
                ))}
              </div>
            </div>

            <Button 
              className="bg-saddle-brown hover:bg-dark-brown text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105"
              data-testid="button-learn-more-story"
            >
              Learn More About Us
            </Button>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-playfair font-bold text-dark-brown mb-4">
                  What Drives Us
                </h3>
                <p className="text-gray-600">
                  Our commitment to excellence in every aspect
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {milestones.map((milestone, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-saddle-brown to-goldenrod rounded-full flex items-center justify-center mx-auto mb-4">
                      <milestone.icon className="h-8 w-8 text-white" />
                    </div>
                    <h4 className="font-semibold text-dark-brown mb-2">{milestone.title}</h4>
                    <p className="text-sm text-gray-600">{milestone.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-saddle-brown to-dark-brown rounded-2xl p-8 text-white text-center">
              <h4 className="text-xl font-semibold mb-4">India's First</h4>
              <p className="text-3xl font-playfair font-bold mb-2">Rolling Paper Brand</p>
              <p className="text-warm-cream">
                Pioneering quality and innovation in the Indian market
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}