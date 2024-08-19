import { CAccordionHeader, CFormSwitch } from "@coreui/react";
import ReactNode from 'react';

const Props = {
  title: String,
  switchfrm: ReactNode,
  dynabtn: ReactNode,
  dongle: ReactNode,
}

export function CustomCAccordionHeader({title, switchfrm, dynabtn, dongle}){
  let colBase = "col-";
  let colSpace = 12;
  if (switchfrm != null ) colSpace--;
  if (dynabtn != null ) colSpace--;
  if (dongle != null ) colSpace--;
  colBase += colSpace;
  return (
    <div className="row d-md-flex">
      <CAccordionHeader className={colBase}>{title}</CAccordionHeader>
      {switchfrm}
      {dynabtn}
      {dongle}
    </div>
  );
}

// function CustomCAccordionHeaderBase(props) {
//   return (
//     <div className="row d-md-flex">
//       <CAccordionHeader className={props.vanillaHeaderColDivider}>
//         {props.title}
//       </CAccordionHeader>
//       {props.children}
//     </div>
//   );
// }

// export function CustomCAccordionHeader({ title, vHColDiv, id }) {
//   return (
//     <CustomCAccordionHeaderBase
//       title={title}
//       vanillaHeaderColDivider={`col-` + vHColDiv}
//     >
//       <div className="col-1">
//         <div className="position-relative top-50 start-50 translate-middle">
//           <CFormSwitch label={""} id={id} checked />
//         </div>
//       </div>
//     </CustomCAccordionHeaderBase>
//   );
// }

// export function CustomCAccordionHeaderDyna({ title, vHColDiv, dynaHColDiv }) {
//   return (
//     <CustomCAccordionHeaderBase
//       title={title}
//       vanillaHeaderColDivider={`col-` + vHColDiv}
//     >
//       <div className={`col-`+dynaHColDiv}>
//         <div className="position-relative top-50 start-50 translate-middle">
//           <DynaPlusBtn btnClass={""} iconClass={"icon"} />
//         </div>
//       </div>
//     </CustomCAccordionHeaderBase>
//   );
// }
