import { MaskedInput as MaskedInputComponent } from "antd-mask-input";
import "antd/dist/reset.css";

const MaskedInput = ({ ...props }) => {
  return (
    <MaskedInputComponent
      {...props}
      mask="8000 000 00 00"
      placeholder="0XXX XXX XX XX"
      style={{ width: "100%" }}
    />
  );
};

export default MaskedInput;
