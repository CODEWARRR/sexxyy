import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import Products from "@/pages/products";
import Testimonials from "@/pages/testimonials";
import WhatTheFun from "@/pages/what-the-fun";
import NotFound from "@/pages/not-found";
// Import the new OrderTrackingPage component
import OrderTrackingPage from "@/pages/order-tracking-page"; // Make sure this path is correct

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/products" component={Products} />
      <Route path="/testimonials" component={Testimonials} />
      <Route path="/what-the-fun" component={WhatTheFun} />
      {/* Add the new route for the order tracking page */}
      <Route path="/track-order" component={OrderTrackingPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
