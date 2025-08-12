import { Button } from "@/components/ui/button";
import { QrCode, ArrowLeft, Smartphone, Gift, Star } from "lucide-react";
import { Link } from "wouter";

export default function WhatTheFun() {
  // QR Code SVG - This would typically be generated dynamically
  const QRCodeSVG = () => (
    <svg
      width="200"
      height="200"
      viewBox="0 0 200 200"
      className="border-2 border-saddle-brown rounded-lg"
    >
      <rect width="200" height="200" fill="white" />
      {/* QR Code pattern - simplified representation */}
      <g fill="#8B4513">
        <rect x="10" y="10" width="30" height="30" />
        <rect x="160" y="10" width="30" height="30" />
        <rect x="10" y="160" width="30" height="30" />
        <rect x="50" y="50" width="20" height="20" />
        <rect x="130" y="50" width="20" height="20" />
        <rect x="90" y="90" width="20" height="20" />
        <rect x="50" y="130" width="20" height="20" />
        <rect x="130" y="130" width="20" height="20" />
        {/* Additional QR pattern elements */}
        <rect x="70" y="30" width="10" height="10" />
        <rect x="100" y="30" width="10" height="10" />
        <rect x="30" y="70" width="10" height="10" />
        <rect x="170" y="70" width="10" height="10" />
        <rect x="70" y="170" width="10" height="10" />
        <rect x="100" y="170" width="10" height="10" />
      </g>
    </svg>
  );

  const funFeatures = [
    {
      icon: Gift,
      title: "Exclusive Rewards",
      description: "Scan and unlock special discounts and offers"
    },
    {
      icon: Star,
      title: "VIP Access",
      description: "Get early access to new product launches"
    },
    {
      icon: Smartphone,
      title: "Digital Experience",
      description: "Connect with our digital community and content"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-warm-cream to-cornsilk">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center">
              <ArrowLeft className="h-5 w-5 text-saddle-brown mr-2" />
              <span className="text-saddle-brown font-medium">Back to Home</span>
            </Link>
            <h1 className="text-2xl font-playfair font-bold text-saddle-brown">
              Jotah
            </h1>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-20 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-playfair font-bold text-dark-brown mb-6">
              What the <span className="text-goldenrod">Fun!</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Scan the QR code below to unlock exclusive content, rewards, and join the premium Jotah experience
            </p>
          </div>

          {/* QR Code Section */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 text-center mb-12">
            <div className="mb-8">
              <QrCode className="h-16 w-16 text-goldenrod mx-auto mb-4" />
              <h2 className="text-3xl font-playfair font-bold text-dark-brown mb-4">
                Scan & Discover
              </h2>
              <p className="text-gray-600 mb-8">
                Point your camera at the QR code to unlock the fun
              </p>
            </div>

            {/* QR Code Display */}
            <div className="flex justify-center mb-8">
              <QRCodeSVG />
            </div>

            <div className="bg-goldenrod/10 rounded-2xl p-6 mb-6">
              <p className="text-saddle-brown font-semibold">
                🎉 Limited Time: Scan now for a special surprise!
              </p>
            </div>

            <Button 
              className="bg-saddle-brown hover:bg-dark-brown text-white px-8 py-4 rounded-lg font-semibold text-lg"
              data-testid="button-scan-qr"
            >
              Open Camera to Scan
            </Button>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {funFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg text-center">
                <div className="w-16 h-16 bg-goldenrod rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-dark-brown" />
                </div>
                <h3 className="text-xl font-playfair font-bold text-dark-brown mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-saddle-brown to-dark-brown rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-playfair font-bold mb-4">
                Join the Premium Experience
              </h3>
              <p className="text-warm-cream mb-6">
                Be part of India's premier rolling paper community
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  className="bg-goldenrod hover:bg-peru-gold text-dark-brown px-6 py-3 rounded-lg font-semibold"
                  data-testid="button-join-community"
                >
                  Join Community
                </Button>
                <Link href="/#contact">
                  <Button 
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white hover:text-dark-brown px-6 py-3 rounded-lg font-semibold"
                    data-testid="button-contact-us"
                  >
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}