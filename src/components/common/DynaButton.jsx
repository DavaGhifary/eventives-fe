import { useState } from "react";
import DynaPlusBtn from "./DynaPlusBtn";
import DynaMinusBtn from "./DynaMinusBtn";

export function DynaButton(props) {
  const [button, setButton] = useState(true);
  function toggleButton() {
    setButton(!button);
    props.onClick;
  }

  return button ? (
    <DynaPlusBtn iconClass={props.iconClass} onClick={toggleButton} />
  ) : (
    <DynaMinusBtn iconClass={props.iconClass} onClick={toggleButton} />
  );
}
