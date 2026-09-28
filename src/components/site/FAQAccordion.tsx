import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/data/empresa";

export function FAQAccordion() {
  return (
    <Accordion type="single" collapsible className="w-full">
      {faqs.map((faq, i) => (
        <AccordionItem key={faq.pregunta} value={`faq-${i}`} className="border-border">
          <AccordionTrigger className="text-left text-base font-semibold text-primary hover:text-primary-light">
            {faq.pregunta}
          </AccordionTrigger>
          <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
            {faq.respuesta}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
