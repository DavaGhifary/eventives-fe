import { CFormInput, CFormTextarea, CInputGroup } from "@coreui/react";
import useDynamicFields from "./useDynamicFields";
export function AboutSectionX() {
  const [listFields, handleFieldsChange, handleButtonStateChange] = useDynamicFields('');
  return (
    <div>
      <CFormInput
        type="text"
        id="title_about"
        floatingClassName="w-50 mb-3"
        floatingLabel="About Title"
        placeholder="Input About title here.."
      />
      <CFormTextarea
        type="text"
        id="desc_about"
        style={{ height: 120 }}
        floatingClassName="mb-3"
        floatingLabel="About Description"
      />
      {listFields.map((listField, index) => (
        <CInputGroup className="mb-3 w-50" key={index}>
          <CFormInput
            type="text"
            id={"title_list_" + index}
            placeholder="List content..."
            value={listField.value ?? ''}
            floatingClassName=""
            floatingLabel="List Item"
            onChange={(e) => handleFieldsChange(index, e)}
          />
          {handleButtonStateChange(listField, index, 'icon')}
        </CInputGroup>
      ))}

      {/*About Section Content END*/}
    </div>
  );
}
