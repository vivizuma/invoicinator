import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "../ui/button";
import { useInvoiceContext } from "@/contexts/InvoiceContext";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";

import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "../ui/textarea";

function InvoiceInput() {
  const { refNumber, setRefNumber, vat, setVat, date, setDate } =
    useInvoiceContext();

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Invoice</CardTitle>
          <CardDescription>General invoice information</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="py-2">
            <Label>Reference Number</Label>
            <Input
              type="number"
              placeholder="0"
              value={refNumber}
              onChange={(e) => {
                setRefNumber(Number(e.target.value));
              }}
            ></Input>
          </div>

          <div className="py-2">
            <Label>Due Date</Label>
            <div>later</div>
            <div className="py-2">
              <Label>Include VAT</Label>
              <div>
                <Checkbox>Include VAT</Checkbox>
              </div>
              <div>
                {" "}
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-[280px] justify-start text-left font-normal",
                        !date && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP") : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>
          </div>
          <Label>Introduction to Invoice</Label>
          <CardDescription>
            A brief text summary of the invoice, and any other information you
            would like to display
          </CardDescription>
          <Textarea />
        </CardContent>
        <CardFooter>
          <Button>Submit</Button>
        </CardFooter>
      </Card>
    </>
  );
}

const stagedItems = [];

export default InvoiceInput;
