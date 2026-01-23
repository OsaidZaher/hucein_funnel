import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CheckCircle, Calendar } from "lucide-react";

// Configuration
const CONFIG = {
  GHL_EMBED_URL: "https://api.leadconnectorhq.com/widget/booking/HEZ6qy9e3Kpmi2R3zMAP",
};

const ThankYou = () => {
  const navigate = useNavigate();
  const { trackLead, trackCompleteRegistration } = useMetaPixel();

  // Track Lead & CompleteRegistration events on page load
  useEffect(() => {
    trackLead({
      content_name: 'Dubai Golden Visa Guide',
      content_category: 'Lead Magnet',
    });
    trackCompleteRegistration({
      content_name: 'Dubai Golden Visa Guide Opt-In',
      status: 'complete',
    });
  }, [trackLead, trackCompleteRegistration]);

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 bg-gradient-to-br from-primary/5 via-background to-secondary/10">
      <div className="max-w-2xl w-full">
        <div className="card-luxury text-center">
          {/* Success Icon */}
          <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-green-500/20 flex items-center justify-center animate-pulse">
            <CheckCircle className="w-16 h-16 text-green-500" />
          </div>

          <h1 className="font-display text-4xl font-bold text-foreground mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Thank You for Your Submission!
          </h1>
          
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-6 mb-8">
            <div className="flex items-center justify-center mb-4">
              <Gift className="w-8 h-8 text-primary mr-3" />
              <h2 className="font-display text-2xl font-semibold text-foreground">
                Your Dubai Golden Visa Guide is Coming!
              </h2>
            </div>
            <p className="text-lg text-muted-foreground mb-6">
              We're excited to help you on your journey to securing your Dubai Golden Visa. 
              Your comprehensive guide has been sent to your email and should arrive within the next few minutes.
            </p>
            
            <div className="flex items-center justify-center p-6 bg-background/50 rounded-lg border mb-4">
              <Mail className="w-8 h-8 text-blue-500 mr-4" />
              <div className="text-center">
                <h3 className="font-semibold text-lg mb-1">Check Your Email</h3>
                <p className="text-sm text-muted-foreground">Don't forget to check your spam/junk folder if you don't see it in your inbox</p>
              </div>
            </div>
            
            <div className="text-sm text-muted-foreground bg-accent/10 p-4 rounded-lg">
              <strong>What's included in your guide:</strong>
              <ul className="text-left mt-2 space-y-1">
                <li>• Complete eligibility requirements</li>
                <li>• Step-by-step application process</li>
                <li>• Investment options and amounts</li>
                <li>• Required documents checklist</li>
                <li>• Timeline and processing information</li>
              </ul>
            </div>
          </div>

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
