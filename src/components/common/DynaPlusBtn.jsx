import { CButton } from "@coreui/react";
import { Add } from "iconsax-react";

export default function DynaPlusBtn(props) {
  return (
    <CButton type="button" variant="outline" color="success" className={props.btnClass} onClick={props.onClick}>
      <Add className={props.iconClass} />
    </CButton>
  );
}
