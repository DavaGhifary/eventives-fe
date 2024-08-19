import { CCol, CFormInput } from "@coreui/react";
import { SearchNormal } from "iconsax-react";
import { useRouter } from "next/router";
import { useState } from "react";
import { addQueryParam } from "../../../helpers/removeQueryParam";

export default function Search({ defaultValue }) {
  const router = useRouter();
  const [inputValue, setValue] = useState(defaultValue);
  const handleChange = (event) => {
    const inputValue = event.target.value;
    setValue(inputValue);
  };
  const handleSearch = () => {
    if (inputValue) return addQueryParam(router, "textSearch", inputValue);
    if (!inputValue) return addQueryParam(router, "textSearch", "");
  };
  const handleKeyPress = (event) => {
    if (event.key === "Enter") return handleSearch();
  };
  return (
    <CCol className="d-flex gap-2 align-items-center" xs={4}>
      <SearchNormal /> Search
      <CFormInput
        type="text"
        id="inputId"
        placeholder="Enter your keywords..."
        value={inputValue ?? ""}
        onChange={handleChange}
        onKeyDown={handleKeyPress}
      />
    </CCol>
  );
}
