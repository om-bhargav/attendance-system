import { useFormStatus } from "react-dom";
import ButtonLoader from "./ButtonLoader";
const SubmitButton = ({ ...props }) => {
  const { pending } = useFormStatus();
  return (
    <button disabled={(props.disabled ? true:false) || pending} type="submit" className="rounded text-white py-1">
      {pending ? <ButtonLoader/> : props.text}
    </button>
  );
};

export default SubmitButton;
