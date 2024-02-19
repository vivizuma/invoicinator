import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useTheirInfoContext } from "@/contexts/TheirInfoContext";
import { useYourInfoContext } from "@/contexts/YourInfoContext";
import { useInvoiceContext } from "@/contexts/InvoiceContext";
import { useAddItemContext } from "@/contexts/AddItemContext";
import "../styles/DynamicText.css";

import { format } from "date-fns";
//RECIEVER

function Preview() {
  const { name, yourAddress, yourPostcode, yourPhoneNumber, yourEmail } =
    useYourInfoContext();
  const { theirName, theirAddress, theirPostcode } = useTheirInfoContext();
  const { refNumber, vat, date } = useInvoiceContext();
  const { items, sumTotal } = useAddItemContext();

  return (
    <div className=" a4-preview bg-white shadow-lg grid m-6 grid-cols-8 grid-rows-12">
      {/* THE PAGE */}

      <div className="col-start-7 col-end-9 row-span-full">
        <h2 className="ml-auto scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0">
          INVOICE
        </h2>
      </div>
      <div className="col-start-1 col-span-4 row-start-2 px-2">
        <p className="font-bold">name{name}</p>
        <p>{yourAddress}</p>
        <p>{yourPostcode}</p>
        <p>{yourPhoneNumber}</p>
        <p>{yourEmail}</p>
      </div>
      <div className="col-start-6 col-end-9 row-start-2">
        <div>
          <h3 className="font-bold font-xl ">Bill To</h3>
          <p className="font-bold">{theirName}</p>
          <p>{theirAddress}</p>
          <p>{theirPostcode}</p>
        </div>
      </div>

      <div className="row-start-4 col-start-6 col-end-9">
        <p>Reference Number: {refNumber}</p>
        <span>Due Date:</span>
        {date ? format(date, "dd/MM/yyyy") : <span>Pick a date</span>}
      </div>
      {/* Invoice Items Table */}
      <div className="row-start-6 col-start-1 col-end-9">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead> Product</TableHead>
              <TableHead> Quantity</TableHead>
              <TableHead> Unit Price </TableHead>
              <TableHead> Total </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {items.map((item, index) => (
              <TableRow key={index} className="py-0 my-0">
                <TableCell>{item.product}</TableCell>
                <TableCell>{item.quantity}</TableCell>
                <TableCell>{item.amountDue}</TableCell>
                <TableCell>{item.itemTotal}</TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell>TOTAL: {sumTotal}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export default Preview;
