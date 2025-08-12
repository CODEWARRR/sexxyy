import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import ProductShowcase from "@/components/product-showcase";
import HeritageSection from "@/components/heritage-section";
import Testimonials from "@/components/testimonials";
import DealerLocator from "@/components/dealer-locator";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="bg-warm-cream">
      <Navigation />
      <HeroSection />
      <ProductShowcase />
      <HeritageSection />
      <Testimonials />
      <DealerLocator />
      <ContactSection />
      <Footer />
    </div>
  );
}
