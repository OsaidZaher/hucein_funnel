import { useEffect, useState, useRef } from "react";
import { Check, Building2, TrendingUp, Calendar, MapPin, Eye, Star, ChevronDown, MessageCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Countdown Timer Component
const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 29,
    hours: 13,
    minutes: 35,
    seconds: 14,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev;
        seconds--;
        if (seconds < 0) {
          seconds = 59;
          minutes--;
        }
        if (minutes < 0) {
          minutes = 59;
          hours--;
        }
        if (hours < 0) {
          hours = 23;
          days--;
        }
        if (days < 0) {
          days = 0;
          hours = 0;
          minutes = 0;
          seconds = 0;
        }
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center justify-center gap-4 text-center">
      <div className="flex flex-col">
        <span className="text-2xl md:text-3xl font-bold text-primary">{timeLeft.days}</span>
        <span className="text-xs text-muted-foreground">days</span>
      </div>
      <span className="text-2xl text-muted-foreground">:</span>
      <div className="flex flex-col">
        <span className="text-2xl md:text-3xl font-bold text-primary">{timeLeft.hours}</span>
        <span className="text-xs text-muted-foreground">hours</span>
      </div>
      <span className="text-2xl text-muted-foreground">:</span>
      <div className="flex flex-col">
        <span className="text-2xl md:text-3xl font-bold text-primary">{timeLeft.minutes}</span>
        <span className="text-xs text-muted-foreground">minutes</span>
      </div>
      <span className="text-2xl text-muted-foreground">:</span>
      <div className="flex flex-col">
        <span className="text-2xl md:text-3xl font-bold text-primary">{timeLeft.seconds}</span>
        <span className="text-xs text-muted-foreground">seconds</span>
      </div>
    </div>
  );
};

// Property Option Card Component
const PropertyCard = ({
  title,
  image,
  price,
  area,
  paymentPlan,
  completionYear,
  description,
}: {
  title: string;
  image: string;
  price: string;
  area: string;
  paymentPlan: string;
  completionYear: string;
  description?: string;
}) => (
  <div className="card-luxury overflow-hidden group">
    <div className="aspect-[4/3] overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
    </div>
    <div className="p-6 space-y-4">
      <h3 className="font-display text-xl font-bold text-foreground">{title}</h3>
      {description && <p className="text-muted-foreground text-sm">{description}</p>}
      <div className="space-y-2 text-sm">
        <p className="text-muted-foreground">
          <span className="text-foreground font-medium">Starting price:</span> {price}
        </p>
        <p className="text-muted-foreground">
          <span className="text-foreground font-medium">Area:</span> {area}
        </p>
        <p className="text-muted-foreground">
          <span className="text-foreground font-medium">Payment plan:</span> {paymentPlan}
        </p>
        <p className="text-muted-foreground">
          <span className="text-foreground font-medium">Completion year:</span> {completionYear}
        </p>
      </div>
      <button className="btn-gold w-full text-sm py-3">View Details</button>
    </div>
  </div>
);

// Pricing Card Component
const PricingCard = ({
  title,
  subtitle,
  features,
  price,
  buttonText,
  badge,
  badgeColor = "primary",
}: {
  title: string;
  subtitle: string;
  features: string[];
  price: string;
  buttonText: string;
  badge?: string;
  badgeColor?: string;
}) => (
  <div className="card-luxury relative overflow-hidden">
    {badge && (
      <div className={`absolute top-4 right-4 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full`}>
        {badge}
      </div>
    )}
    <div className="p-6 space-y-4">
      <h3 className="font-display text-xl font-bold text-foreground">{title}</h3>
      <p className="text-muted-foreground text-sm">{subtitle}</p>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
            <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <div className="pt-4 border-t border-border">
        <p className="text-2xl font-bold text-primary">{price}</p>
      </div>
      <button className="btn-gold w-full text-sm py-3">{buttonText}</button>
    </div>
  </div>
);

// Inline Form Component
const DistressDealsForm = () => {
  const hostRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (hostRef.current) {
      hostRef.current.innerHTML = `
        <iframe
          src="https://api.leadconnectorhq.com/widget/form/l08xUplWrxyWWvSMHtOq"
          style="width:100%;min-height:500px;height:550px;border:none;border-radius:15px"
          id="inline-distress-deals-form"
          data-layout="{'id':'INLINE'}"
          data-trigger-type="alwaysShow"
          data-trigger-value=""
          data-activation-type="alwaysActivated"
          data-activation-value=""
          data-deactivation-type="neverDeactivate"
          data-deactivation-value=""
          data-form-name="Distress Deals Form"
          data-height="500"
          data-layout-iframe-id="inline-distress-deals-form"
          data-form-id="l08xUplWrxyWWvSMHtOq"
          title="Distress Deals Form"
        ></iframe>
      `;
    }

    const src = "https://link.msgsndr.com/js/form_embed.js";
    if (!document.querySelector(`script[src="${src}"]`)) {
      const script = document.createElement("script");
      script.src = src;
      script.async = true;
      document.body.appendChild(script);
    }

    return () => {
      if (hostRef.current) hostRef.current.innerHTML = "";
    };
  }, []);

  return <div ref={hostRef} />;
};

// FAQ Data
const faqs = [
  {
    question: "Can foreigners and Canadians legally own property in Dubai?",
    answer:
      "Yes. Dubai offers freehold ownership zones where foreigners — including Canadians — can own property outright in their own name. Dubai Skyline Residences is located in a freehold zone, and you'll receive a title deed registered with the Dubai Land Department.",
  },
  {
    question: "How does the \"under $500k CAD\" pricing work?",
    answer:
      "Selected 1 bedroom units currently start from approximately $495,000 CAD based on today's AED/CAD exchange rate. Final pricing is in AED and will be confirmed at reservation. Your advisor will show you live pricing and help you understand total costs in CAD, including closing and registration fees.",
  },
  {
    question: "What kind of rental returns can I realistically expect?",
    answer:
      "While returns depend on your unit type, view, and whether you choose long-term or short-term rentals, similar Burj-view residences in this micro-location have historically achieved gross yields in the 7–10% range. Your advisor will provide conservative, scenario-based projections using current market data.",
  },
  {
    question: "Do I need to fly to Dubai to complete the purchase?",
    answer:
      "Not necessarily. Many overseas buyers complete the full process remotely via secure digital contracts, video calls, and verified payment channels. However, you're welcome to visit for an in-person tour, and our team can assist with travel recommendations.",
  },
  {
    question: "Is there any property or capital gains tax on this investment?",
    answer:
      "Dubai does not currently levy property tax on residential units, and there is no capital gains tax on property disposals. However, your personal tax situation in Canada or your country of residence may vary, so we recommend speaking with a tax professional for tailored advice.",
  },
];

const DistressDeals = () => {
  const scrollToForm = () => {
    document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">
      {/* Limited Time Banner */}
      <div className="bg-secondary/80 border-b border-border py-6 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <p className="text-sm uppercase tracking-wider text-muted-foreground font-medium">
            For A Limited Time Only
          </p>
          <CountdownTimer />
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 px-4">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/3 rounded-full blur-3xl" />
        </div>

        <div className="max-w-6xl mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6 animate-fade-in">
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                Own an Iconic Burj View Home in Dubai —{" "}
                <span className="text-gradient-gold">Under $500k CAD</span> in Feb
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Premium, fully-finished 1–2 bedroom residences with uninterrupted Burj Khalifa
                and Downtown Dubai skyline views. A rare chance to step into Dubai's most
                desirable address for less than a downtown Toronto condo.
              </p>
              <ul className="space-y-3">
                {[
                  "Starting from approx. $495,000 CAD",
                  "Projected gross yields of 7–10% annually",
                  "Fully managed, turnkey ownership for overseas buyers",
                  "Flexible payment plans with developer financing",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-foreground">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button onClick={scrollToForm} className="btn-gold">
                  Get Price List
                </button>
                <a
                  href="https://api.leadconnectorhq.com/widget/booking/HEZ6qy9e3Kpmi2R3zMAP"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 rounded-lg border border-primary text-primary font-semibold hover:bg-primary/10 transition-all text-center"
                >
                  Book Virtual Tour
                </a>
              </div>
              <p className="text-sm text-muted-foreground">
                Limited inventory remaining in current release. Secure first access & CAD-priced
                opportunities today.
              </p>
            </div>

            {/* Right Form */}
            <div className="card-luxury animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <h2 className="font-display text-xl font-bold text-foreground mb-2 text-center">
                Get your tailored list of options under 500k CAD
              </h2>
              <p className="text-muted-foreground text-center text-sm mb-4">
                What best describes your interest in Dubai property?
              </p>
              <DistressDealsForm />
              <p className="text-xs text-muted-foreground text-center mt-4">
                No obligation. A local Dubai property specialist will follow up within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Property Options Section */}
      <section className="py-20 px-4 bg-navy-dark/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Current Burj View Options{" "}
              <span className="text-gradient-gold">Under $500k CAD</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Curated shortlist — select units that deliver Burj views and strong value.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <PropertyCard
              title="Option A"
              image="https://cf.bstatic.com/xdata/images/hotel/max1024x768/559903979.jpg?k=1726672c5b2e1976680bd4e6a7a8d7e4907cc2a72d6c7649584d03792db6af55&o="
              price="From $495,000 CAD"
              area="Approx. 650 sq ft"
              paymentPlan="20% deposit, 80% on completion"
              completionYear="2026"
            />
            <PropertyCard
              title="Option B"
              image="https://images.bayut.com/thumbnails/806659037-400x300.jpeg"
              price="From $425k – $790k CAD"
              area="~780–900 sq ft"
              paymentPlan="Flexible options available"
              completionYear="2026"
              description="Burj Views, Downtown Dubai – 1-Bedroom apartment with Burj Khalifa and skyline views"
            />
            <PropertyCard
              title="Option C"
              image="https://static.euronews.com/articles/stories/08/19/07/84/808x808_cmsv2_fbd5b44b-6e9a-5574-87a0-8360c326ec96-8190784.jpg"
              price="From ~AED 8.8M (USD 2.4M+)"
              area="2–5 bedroom apartments + penthouses"
              paymentPlan="70/30 payment plan"
              completionYear="Q4 2026"
              description="Mercedes-Benz Places by Binghatti — Prime Downtown luxury"
            />
            <PropertyCard
              title="Option D"
              image="https://dbz-images.dubizzle.com/images/2025/11/05/aca565f8-4f1e-47d4-a669-e5ba2f809217/5955765adf8f4182a77941d2a63c133d-.jpg?impolicy=lpv"
              price="From $499,000 CAD"
              area="Approx. 680 sq ft"
              paymentPlan="20% deposit, 80% on completion"
              completionYear="2027"
            />
          </div>
        </div>
      </section>

      {/* Affordable Luxury Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-sm uppercase tracking-wider text-primary font-medium">
                Affordable Luxury in the Heart of Dubai
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                Wake up to the world's most famous skyline —{" "}
                <span className="text-gradient-gold">for less than you think.</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Dubai Skyline Residences is a curated collection of high-floor apartments with
                unobstructed Burj Khalifa views, resort-style amenities, and hotel-inspired
                services. Designed for both end-users and investors, each residence pairs timeless
                interiors with one of the most Instagrammable views on earth.
              </p>
              <ul className="space-y-3">
                {[
                  "Spacious 1 & 2 bedroom layouts with floor-to-ceiling glass",
                  "Infinity pool, sky lounge, fitness & spa facilities",
                  "Freehold ownership for foreigners with residency pathway options",
                  "Minutes to Dubai Mall, Business Bay and DIFC",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-muted-foreground">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm text-muted-foreground italic">
                Ideal for Canadians and international buyers seeking a tax-efficient,
                income-generating asset in a world city with no property tax on residential units.
              </p>
            </div>

            <div className="relative">
              <img
                src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_900/u_https://storage.googleapis.com/funnel-ai-production/image-generation/ajouUet0bnIVCH6g9DI0/overview-jB0D_0vzuy.png"
                alt="Modern Dubai apartment living room with direct Burj Khalifa view at sunset"
                className="rounded-xl shadow-2xl"
              />
              {/* Stats Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-xl">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-2xl font-bold text-primary">$495k CAD</p>
                    <p className="text-xs text-gray-300">Starting price*</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-primary">7–10%</p>
                    <p className="text-xs text-gray-300">Projected gross yield</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-primary">Q4 2026</p>
                    <p className="text-xs text-gray-300">Estimated completion</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Views Section */}
      <section className="py-20 px-4 bg-navy-dark/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_900/u_https://storage.googleapis.com/funnel-ai-production/image-generation/ajouUet0bnIVCH6g9DI0/views-showcase-rpNxWYNTo4.png"
                alt="Bedroom interior with night view of Burj Khalifa from floor-to-ceiling windows"
                className="rounded-xl shadow-2xl"
              />
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <p className="text-sm uppercase tracking-wider text-primary font-medium">
                Uninterrupted Burj Khalifa Vistas
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                Every evening, your living room becomes front-row seats to the{" "}
                <span className="text-gradient-gold">Burj Khalifa light show.</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Floor-to-ceiling glass walls frame Dubai's most iconic landmark — from sunrise
                over Downtown to the nightly fountain shows below. This is more than a view; it's
                a global status symbol and a constant reminder that you own a piece of the
                world's most photographed skyline.
              </p>
              <ul className="space-y-3">
                {[
                  "Select units with dual-aspect views of Burj Khalifa + Dubai Canal",
                  "High-floor placements to clear future view obstructions",
                  "Glazing engineered for heat + sound insulation",
                  'Ideal for premium nightly rentals with "Burj View" keyword demand',
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-muted-foreground">
                    <Eye className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <button onClick={scrollToForm} className="btn-gold">
                See Available View Lines
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-wider text-primary font-medium mb-4">
              Pricing & Payment
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Luxury Burj Views at a{" "}
              <span className="text-gradient-gold">Fraction of Canadian Prices</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose between flexible payment plans or upfront discounts. All figures below
              shown in CAD for clarity, based on today's FX rates.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <PricingCard
              title="1 Bedroom Burj View"
              subtitle="Limited corner units with wraparound glass available."
              features={[
                "Approx. 650–800 sq ft",
                "High floors with direct Burj Khalifa view",
                "Ideal entry point for first-time Dubai investors",
                "Projected gross yield: 7–9% annually",
              ]}
              price="$495,000"
              buttonText="Request 1BR Inventory"
            />
            <PricingCard
              title="2 Bedroom Burj Panorama"
              subtitle="Best balance of space, view and yield."
              features={[
                "Approx. 1,050–1,250 sq ft",
                "Panoramic skyline & water views",
                "Perfect for families or premium rentals",
                "Projected gross yield: 8–10% annually",
              ]}
              price="$675,000"
              buttonText="Request 2BR Inventory"
              badge="MOST POPULAR"
            />
            <PricingCard
              title="Penthouse Collection"
              subtitle="Available to qualified buyers only."
              features={[
                "Top floors with expansive terraces",
                "Showpiece residences with full Burj frontage",
                "Priority access & fully bespoke interiors",
                "On-request rental management solutions",
              ]}
              price="$980,000"
              buttonText="Apply for Penthouse Access"
              badge="LIMITED RELEASE"
            />
          </div>

          <p className="text-xs text-muted-foreground text-center mt-8">
            *Pricing shown is indicative in CAD and may vary with currency fluctuations and availability.
            A Dubai-licensed advisor will provide a live price list and payment plan tailored to your budget.
          </p>

          <div className="text-center mt-8">
            <button onClick={scrollToForm} className="btn-gold">
              Get CAD Investment Breakdown
            </button>
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-20 px-4 bg-navy-dark/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-wider text-primary font-medium mb-4">
              Connected, Cosmopolitan, Effortless
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Live in the centre of{" "}
              <span className="text-gradient-gold">everything Dubai is famous for.</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              From Michelin-star restaurants and designer shopping to beach clubs and business
              hubs, your new address places you at the apex of Dubai living.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="card-luxury text-center p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-4">
                Resort-Level Amenities
              </h3>
              <p className="text-muted-foreground text-sm">
                Infinity pool with Burj views, fully equipped gym, spa, kids' play areas,
                residents' lounge and 24/7 concierge — all managed like a 5-star hotel.
              </p>
            </div>
            <div className="card-luxury text-center p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-4">
                Prime Downtown Access
              </h3>
              <p className="text-muted-foreground text-sm">
                Reach Dubai Mall, Business Bay, DIFC, and Dubai International Airport in
                minutes, while still enjoying a private sanctuary above the city buzz.
              </p>
            </div>
            <div className="card-luxury text-center p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Building2 className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-4">
                Hands-Off Ownership
              </h3>
              <p className="text-muted-foreground text-sm">
                Professional property management, tenant sourcing, and short-term rental
                services available so you can own in Dubai while living abroad with peace of mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-sm uppercase tracking-wider text-primary font-medium">
                Next Steps
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                Request full details, floor plans &{" "}
                <span className="text-gradient-gold">CAD investment analysis.</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Share your details and a Dubai-licensed property specialist will send you
                current availability, CAD-priced payment options, and a tailored cashflow projection
                for your budget.
              </p>
              <ul className="space-y-3">
                {[
                  "No fees to receive information",
                  "Canadian & international buyers welcome",
                  "Virtual tours and video walkthroughs available",
                  "Priority access before units hit public portals",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-muted-foreground">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card-luxury">
              <h3 className="font-display text-xl font-bold text-foreground mb-2 text-center">
                Get the Dubai Burj View Investment Kit
              </h3>
              <p className="text-muted-foreground text-sm text-center mb-4">
                Fill out the form below and receive:
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                {[
                  "Brochure & floor plans (PDF)",
                  "Latest inventory & price list",
                  "Rental yield & cashflow projections",
                  "Step-by-step guide to buying from abroad",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-primary flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <DistressDealsForm />
              <p className="text-xs text-muted-foreground text-center mt-4">
                By submitting, you agree to be contacted by a Dubai Skyline Residences partner
                agency. Your information is kept confidential and you may unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-navy-dark/50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-wider text-primary font-medium mb-4">
              FAQs
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Answers to common questions from{" "}
              <span className="text-gradient-gold">Canadian & overseas buyers.</span>
            </h2>
            <p className="text-muted-foreground">
              If you don't see your question below, request the investment kit and our team
              will walk you through everything 1:1.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="card-luxury border-border/50 px-6"
              >
                <AccordionTrigger className="text-left text-foreground hover:text-primary transition-colors py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm uppercase tracking-wider text-primary font-medium mb-4">
            Dubai Skyline Residences
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
            Your Burj Khalifa view is closer — and{" "}
            <span className="text-gradient-gold">more affordable</span> — than you think.
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Request the full information kit now and discover how owning a Burj-view home in
            Dubai can fit comfortably under a $500k CAD budget.
          </p>
          <button onClick={scrollToForm} className="btn-gold text-lg px-10 py-5">
            Get the Investment Kit
          </button>
          <p className="text-sm text-muted-foreground mt-6">
            No spam. No pressure. Just clear numbers, world-class views, and a conversation
            about whether this fits your goals.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2026 Dubai Skyline Residences. All rights reserved.
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
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DistressDeals;
