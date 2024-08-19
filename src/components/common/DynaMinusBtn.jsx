import { CButton } from "@coreui/react";
import { Minus } from "iconsax-react";

export default function DynaMinusBtn(props) {
  return (
    <CButton type="button" variant="outline" color="danger" className={props.btnClass} onClick={props.onClick}>
      <Minus className={props.iconClass} />
    </CButton>
  );
}
