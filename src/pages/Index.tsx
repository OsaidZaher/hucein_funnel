import { ChevronDown, Shield, Clock, FileCheck, MessageCircle } from "lucide-react";
import VSLPlayer from "@/components/VSLPlayer";
import Testimonials from "@/components/Testimonials";
import FAQSection from "@/components/FAQSection";
import GHLInlineForm from "@/components/GHLInlineForm";

const Index = () => {
  const scrollToFAQs = () => {
    document.getElementById("faqs")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-12 md:py-20 px-4">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/3 rounded-full blur-3xl" />
        </div>

        <div className="max-w-6xl mx-auto relative">
          {/* Badge */}
          <div className="flex justify-center mb-6">
            <span className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 text-primary px-4 py-2 rounded-full text-sm font-medium">
              <Shield className="w-4 h-4" />
              2026 Edition — Updated for Latest Regulations
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-center text-foreground mb-6 leading-tight">
            Book a Strategy Call With Hocine & His Team
            <span className="block text-gradient-gold mt-2">
              to Map Out Your Golden Visa or Investment Plan
            </span>
            <span className="block text-xl md:text-2xl lg:text-3xl font-medium text-muted-foreground mt-4">
              For Canadians, By Canadians — Your Trusted Guide to Dubai
            </span>
          </h1>



          {/* Main Content Grid - Form always above video */}
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            {/* Left: VSL + FAQs Button - Shows second */}
            <div className="space-y-6 animate-fade-in order-2">
              <VSLPlayer />
              
              {/* FAQs Button */}
              <button
                onClick={scrollToFAQs}
                className="w-full flex items-center justify-center gap-2 py-3 text-muted-foreground hover:text-primary transition-colors group"
              >
                <span>Have questions? See FAQs</span>
                <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </button>
            </div>

            {/* Right: Form Card - Shows first on mobile */}
            <div
              id="lead-form"
              className="animate-slide-up order-1 lg:order-2"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="card-luxury">
                <h2 className="font-display text-2xl font-bold text-foreground mb-2 text-center">
                  Get Your Free Guide
                </h2>
                <p className="text-muted-foreground text-center mb-6 text-sm">
                  Instant access via Email
                </p>

                <GHLInlineForm />
              </div>
              {/* Trust Indicators */}
              <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                <div className="space-y-1">
                  <Clock className="w-5 h-5 mx-auto text-primary" />
                  <p className="text-xs text-muted-foreground">Instant Delivery</p>
                </div>
                <div className="space-y-1">
                  <FileCheck className="w-5 h-5 mx-auto text-primary" />
                  <p className="text-xs text-muted-foreground">2026 Updated</p>
                </div>
                <div className="space-y-1">
                  <Shield className="w-5 h-5 mx-auto text-primary" />
                  <p className="text-xs text-muted-foreground">100% Free</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* FAQs */}
      <FAQSection />

      {/* Footer CTA */}
      <section className="py-16 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-muted-foreground mb-6">
            Get your free guide and take the first step toward your Dubai Golden Visa
          </p>
          <button
            onClick={() =>
              document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" })
            }
            className="btn-gold"
          >
            Get My Free Guide →
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2026 Dubai Golden Visa Guide. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://wa.link/z62upv"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </a>
            <a
              href="https://www.instagram.com/hocinedubairealty/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              Instagram
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
