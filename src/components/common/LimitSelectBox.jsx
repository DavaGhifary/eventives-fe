import { CFormSelect } from "@coreui/react";
import { useState } from "react";

export default function LimitSelectBox({ defaultValue, onChange = () => {} }) {
  return (
    (
      <>
        Show
        <CFormSelect
          size="sm"
          aria-label="Limits displayed entries."
          name="limitSelect"
          defaultValue={defaultValue}
          onChange={onChange}
          options={[
            { label: "5", value: "5" },
            { label: "10", value: "10" },
            { label: "25", value: "25" },
            { label: "50", value: "50" },
            { label: "100", value: "100" },
          ]}
        />
        Entries
      </>
    )
  );
}