import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ReceiptPane from "./RecieptPane";
import InvoicePane from "./InvoicePane";
import YourInfo from "./YourInfo";
import TheirInfo from "./TheirInfo";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

function SidebarContainer() {
  return (
    <>
      <Accordion
        type="single"
        defaultValue="your-information"
        collapsible
        className="w-full"
      >
        <AccordionItem value="your-information">
          <AccordionTrigger>1. Your Information</AccordionTrigger>
          <AccordionContent>
            <YourInfo />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="their-info">
          <AccordionTrigger>2. Their Information</AccordionTrigger>
          <AccordionContent>
            <TheirInfo />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="add-item">
          <AccordionTrigger>3. Add items</AccordionTrigger>
          <AccordionContent>
            <Tabs defaultValue="receipt">
              <TabsList className="grid grid-cols-2 w-full">
                <TabsTrigger value="invoice">Invoice</TabsTrigger>
                <TabsTrigger value="receipt">Receipt</TabsTrigger>
              </TabsList>

              <TabsContent value="invoice">
                <Card>
                  <CardHeader>
                    <CardTitle>Add Item</CardTitle>
                    <CardDescription></CardDescription>
                  </CardHeader>
                  <CardContent>
                    <InvoicePane />
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="receipt">
                <Card>
                  <CardTitle>Create a receipt</CardTitle>
                  <CardContent className="space-y-2">
                    <ReceiptPane />
                  </CardContent>

                  <CardFooter>
                    <Button>Submit</Button>
                  </CardFooter>
                </Card>
              </TabsContent>
            </Tabs>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="add-item"></AccordionItem>
      </Accordion>
    </>
  );
}

export default SidebarContainer;
