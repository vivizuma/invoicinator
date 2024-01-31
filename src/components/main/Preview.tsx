import { useTheirInfoContext } from "@/contexts/TheirInfoContext";
import { useYourInfoContext } from "@/contexts/YourInfoContext";
import { useInvoiceContext } from "@/contexts/InvoiceContext";
//RECIEVER

function Preview() {
  const { name, yourAddress, yourPostcode, yourPhoneNumber, yourEmail } =
    useYourInfoContext();
  const { theirName, theirAddress, theirPostcode } = useTheirInfoContext();
  const { refNumber, vat } = useInvoiceContext();

  return (
    <div className="w-full h-full bg-white">
      <p className="vw-5">{name}</p>
      <p>{yourAddress}</p>
      <p>{yourPostcode}</p>
      <p>{yourPhoneNumber}</p>
      <p>{yourEmail}</p>
      <h3>Them</h3>
      <p>{theirName}</p>
      <p>{theirAddress}</p>
      <p>{theirPostcode}</p>
      <h3>Invoice</h3>
      <p>{refNumber}</p>
    </div>
  );
}

export default Preview;
