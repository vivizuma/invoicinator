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
import "../styles/DynamicText.css";
import { useAddItemContext } from "../ContentContainer";
import { format } from "date-fns";
//RECIEVER

function Preview() {
  const { name, yourAddress, yourPostcode, yourPhoneNumber, yourEmail } =
    useYourInfoContext();
  const { theirName, theirAddress, theirPostcode } = useTheirInfoContext();
  const { refNumber, vat, date } = useInvoiceContext();
  const { items } = useAddItemContext();

  return (
    <div className=" a4-preview bg-white shadow-lg grid m-6 grid-cols-12 grid-rows-5">
      {/* THE PAGE */}

      <div className="col-start-11 col-end-12">
        <h2 className="ml-auto scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0">
          INVOICE
        </h2>

        <div className="flex flex-row justify-between items-center py-4">
          <div className="">
            <p className="font-bold">{name}</p>
            <p>{yourAddress}</p>
            <p>{yourPostcode}</p>
            <p>{yourPhoneNumber}</p>
            <p>{yourEmail}</p>
          </div>
          <div>
            <h3>Them</h3>
            <p className="font-bold">{theirName}</p>
            <p>{theirAddress}</p>
            <p>{theirPostcode}</p>
          </div>
        </div>
        <div className="flex">
          <p>{refNumber}</p>
          <span>Due Date:</span>
          {date ? format(date, "dd/MM/yyyy") : <span>Pick a date</span>}
        </div>
        {/* Invoice Items Table */}
        <div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead> Product</TableHead>
                <TableHead> Quantity</TableHead>
                <TableHead> Price </TableHead>
                <TableHead> Total </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {items.map((item, index) => (
                <TableRow key={index} className="py-0 my-0">
                  <TableCell>{item.product}</TableCell>
                  <TableCell>{item.quantity}</TableCell>
                  <TableCell>{item.amountDue}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}

export default Preview;
