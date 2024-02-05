import { useTheirInfoContext } from "@/contexts/TheirInfoContext";
import { useYourInfoContext } from "@/contexts/YourInfoContext";
import { useInvoiceContext } from "@/contexts/InvoiceContext";
import { TypographyTable } from "./Table";
import "../styles/DynamicText.css";
//RECIEVER

function Preview() {
  const { name, yourAddress, yourPostcode, yourPhoneNumber, yourEmail } =
    useYourInfoContext();
  const { theirName, theirAddress, theirPostcode } = useTheirInfoContext();
  const { refNumber, vat } = useInvoiceContext();

  return (
    <div className=" a4-preview bg-white shadow-lg">
      <div className="m-6">
        <div className="flex justify-between">
          <h2 className="ml-auto scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0">
            INVOICE
          </h2>
        </div>
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
            <h3>Invoice</h3>
            <p>{refNumber}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Preview;
