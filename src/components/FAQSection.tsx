import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is the Dubai Golden Visa?",
    answer:
      "The Dubai Golden Visa is a long-term residence visa (5 or 10 years) that allows foreign nationals to live, work, and study in the UAE without the need for a national sponsor. It provides unprecedented stability and access to the UAE's thriving economy.",
  },
  {
    question: "Why do I need the Golden Visa?",
    answer:
      "The Golden Visa offers multiple benefits: 100% business ownership, no income tax, ability to sponsor family members, access to world-class healthcare and education, and a strategic business hub connecting East and West. It's ideal for investors, entrepreneurs, and professionals seeking global mobility.",
  },
  {
    question: "What are the minimum investment requirements?",
    answer:
      "Investment requirements vary by category: Property investment starts at AED 2 million, business/investment visa requires AED 2 million in deposits or company ownership, and specialized talent/professionals may qualify based on their expertise and salary level.",
  },
  {
    question: "How long does the application process take?",
    answer:
      "The timeline varies based on your chosen route. Property-based applications typically take 2-4 weeks once documents are ready. Business/investor routes may take 4-8 weeks. Our guide provides detailed timelines for each pathway.",
  },
  {
    question: "Can I include my family in the application?",
    answer:
      "Yes! Golden Visa holders can sponsor their spouse, children (regardless of age), and parents. This makes it an excellent option for families looking to relocate or establish a second home in Dubai.",
  },
  {
    question: "What documents do I need to apply?",
    answer:
      "Required documents typically include: valid passport, passport photos, proof of investment (property deed, business license, or bank statements), health insurance, and in some cases, a clean criminal record certificate. Our guide provides a complete checklist for your specific route.",
  },
];

const FAQSection = () => {
  return (
    <section id="faqs" className="py-20 px-4 bg-navy-dark/50">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Frequently Asked <span className="text-gradient-gold">Questions</span>
          </h2>
          <p className="text-muted-foreground">
            Everything you need to know about the Dubai Golden Visa
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
  );
};

export default FAQSection;
