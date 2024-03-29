import YourInfo from "./YourInfo";
import TheirInfo from "./TheirInfo";
import AddItemInput from "./AddItemInput";
import InvoiceInput from "./InvoiceInput";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function SidebarContainer() {
  return (
    <>
      <Accordion
        type="single"
        defaultValue="your-information"
        collapsible
        className="w-full text-white text-lg rounded-none"
      >
        <AccordionItem value="your-information">
          <AccordionTrigger>1. You</AccordionTrigger>
          <AccordionContent>
            <YourInfo />
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="their-info">
          <AccordionTrigger>2. Them</AccordionTrigger>
          <AccordionContent>
            <TheirInfo />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="invoice-info">
          <AccordionTrigger>3. Invoice</AccordionTrigger>
          <AccordionContent>
            <InvoiceInput />
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="add-item">
          <AccordionTrigger>4. Add items</AccordionTrigger>
          <AccordionContent>
            <AddItemInput />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="add-item"></AccordionItem>
      </Accordion>
    </>
  );
}

export default SidebarContainer;
