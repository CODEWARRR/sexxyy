import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Phone, MapPin } from "lucide-react";
import type { Dealer } from "@shared/schema";

export default function DealerLocator() {
  const [searchCity, setSearchCity] = useState("");
  const [searchZip, setSearchZip] = useState("");
  const [radius, setRadius] = useState("10");

  const { data: dealers = [], isLoading } = useQuery<Dealer[]>({
    queryKey: ["/api/dealers"],
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would trigger a new search query
    console.log("Searching for dealers:", { searchCity, searchZip, radius });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "open":
        return "bg-green-100 text-green-800";
      case "closes_soon":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "open":
        return "Open";
      case "closes_soon":
        return "Closes Soon";
      default:
        return "Closed";
    }
  };

  return (
    <section id="dealers" className="py-20 bg-gradient-to-br from-warm-cream to-cornsilk">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-dark-brown mb-6">
            Find Our Products
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Locate authorized dealers and retailers near you to experience our premium products firsthand
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-playfair font-bold text-dark-brown mb-6">
                Dealer Locator
              </h3>
              
              <form onSubmit={handleSearch}>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                      Location
                    </Label>
                    <div className="relative">
                      <Input
                        id="location"
                        type="text"
                        placeholder="Enter city or ZIP code"
                        value={searchCity}
                        onChange={(e) => setSearchCity(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-saddle-brown focus:border-transparent pr-10"
                        data-testid="input-dealer-location"
                      />
                      <Search className="h-4 w-4 absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="radius" className="block text-sm font-medium text-gray-700 mb-2">
                      Search Radius
                    </Label>
                    <Select value={radius} onValueChange={setRadius}>
                      <SelectTrigger className="w-full" data-testid="select-search-radius">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="10">10 km</SelectItem>
                        <SelectItem value="25">25 km</SelectItem>
                        <SelectItem value="50">50 km</SelectItem>
                        <SelectItem value="100">100 km</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-saddle-brown hover:bg-dark-brown text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                    data-testid="button-find-dealers"
                  >
                    Find Dealers
                  </Button>
                </div>
              </form>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <h4 className="font-semibold text-dark-brown mb-4">Become a Dealer</h4>
                <p className="text-gray-600 text-sm mb-4">
                  Join our network of premium retailers and offer your customers the finest tobacco accessories
                </p>
                <Button 
                  className="bg-goldenrod hover:bg-peru-gold text-dark-brown px-6 py-3 rounded-lg font-medium transition-colors"
                  data-testid="button-apply-dealer"
                >
                  Apply Now
                </Button>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {isLoading ? (
              <div className="text-center py-8">
                <p className="text-gray-600">Loading dealers...</p>
              </div>
            ) : dealers.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-gray-600">No dealers found. Please try a different search.</p>
              </div>
            ) : (
              dealers.map((dealer, index) => (
                <div key={dealer.id} className="bg-white rounded-xl p-6 shadow-lg" data-testid={`dealer-card-${index}`}>
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="font-semibold text-lg text-dark-brown">{dealer.name}</h4>
                      <p className="text-gray-600">{dealer.address}, {dealer.city}, {dealer.state}</p>
                    </div>
                    <div className={`flex items-center px-3 py-1 rounded-full text-sm ${getStatusColor(dealer.status)}`}>
                      <div className="w-2 h-2 rounded-full bg-current mr-2"></div>
                      {getStatusText(dealer.status)}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-600">
                      <Phone className="h-4 w-4 mr-2" />
                      <span>{dealer.phone}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>2.3 km</span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
