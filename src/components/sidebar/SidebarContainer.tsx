import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ReceiptPane from "./RecieptPane";
import InvoicePane from "./InvoicePane";
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
    <Tabs defaultValue="receipt" className="w-[400px]">
      <TabsList className="grid grid-cols-2 w-full">
        <TabsTrigger value="invoice">Invoice</TabsTrigger>
        <TabsTrigger value="receipt">Receipt</TabsTrigger>
      </TabsList>

      <TabsContent value="invoice">
        <Card>
          <CardHeader>
            <CardTitle>Generate Invoice</CardTitle>
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
  );
}

export default SidebarContainer;
