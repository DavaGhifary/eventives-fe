import { CFormSwitch } from "@coreui/react";
import { ArrangeVertical } from "iconsax-react";

function BaseSpacing(props) {
  return (
    <div className="col-1" {...props}>
      <div className="position-relative top-50 start-50 translate-middle">
        {props.children}
      </div>
    </div>
  );
}

export function SwitchBtn(props) {
  return (
    <BaseSpacing>
      <CFormSwitch label={""} id={props.id} defaultChecked/>
    </BaseSpacing>
  );
}

export function DynaBtn(props) {
  return <BaseSpacing>{props.dynaButton}</BaseSpacing>;
}

export function Dongle(props) {
  return (
    <BaseSpacing {...props}>
      <ArrangeVertical></ArrangeVertical>
    </BaseSpacing>
  );
}
