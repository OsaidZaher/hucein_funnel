import { useNavigate } from "react-router-dom";
import { CheckCircle, Calendar } from "lucide-react";

// Configuration
const CONFIG = {
  GHL_EMBED_URL: "https://api.leadconnectorhq.com/widget/booking/HEZ6qy9e3Kpmi2R3zMAP",
};

const ThankYou = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="max-w-xl w-full">
        <div className="card-luxury text-center">
          {/* Success Icon */}
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-500/20 flex items-center justify-center">
            <CheckCircle className="w-12 h-12 text-green-500" />
          </div>

          <h1 className="font-display text-3xl font-bold text-foreground mb-4">
            Your Guide is on the Way!
          </h1>
          
          <p className="text-muted-foreground mb-8">
            Check your WhatsApp and email for your Dubai Golden Visa Guide.
          </p>

          {/* Booking Section */}
          <div className="animate-fade-in">
            <h2 className="font-display text-xl font-semibold text-foreground mb-4">
              <Calendar className="w-5 h-5 inline mr-2" />
              Book Your Free Strategy Call
            </h2>
            
            <div className="bg-secondary/30 rounded-xl overflow-hidden">
              <iframe
                src={CONFIG.GHL_EMBED_URL}
                className="w-full h-[600px] border-0"
                title="Book a Call"
              />
            </div>

            <button
              onClick={() => navigate("/")}
              className="mt-6 text-muted-foreground hover:text-foreground transition-colors text-sm"
            >
              ← Back to Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
