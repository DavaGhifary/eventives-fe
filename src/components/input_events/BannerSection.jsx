import {
  CCol,
  CFormInput,
  CListGroup,
  CListGroupItem,
  CRow,
} from "@coreui/react";
import useDynamicFields from "./useDynamicFields";
export function BannerSectionX() {
  const [listFields, handleFieldsChange, handleButtonStateChange] = useDynamicFields('');
  return (
    <div>
      <CFormInput
        type="text"
        id="title_banner"
        floatingClassName="w-50 mb-3"
        floatingLabel="Banner Title"
        placeholder="Event name, happening soon!"
      />
      <div className="row g-2">
        <CFormInput
          type="number"
          id="seats_banner"
          floatingClassName="mb-3 col-md"
          floatingLabel="Seat Slots"
          placeholder={100}
        />
        <CFormInput
          type="number"
          id="speaker_count_banner"
          floatingClassName="mb-3 col-md"
          floatingLabel="Speaker Counts"
          placeholder={3}
        />
        <CFormInput
          type="text"
          id="city_banner"
          floatingClassName="mb-3 col-md"
          floatingLabel="City"
          placeholder="City name here..."
        />
        <CFormInput
          type="datetime-local"
          id="event_time_banner"
          floatingClassName="mb-3 col-md"
          floatingLabel="Event Time"
          placeholder=""
        />
      </div>
      <CListGroup className="mb-2" layout={`horizontal-md`}>
        {listFields.map((listField, index) => (
          <CListGroupItem className="border rounded m-3" key={index}>
            <CRow className="p-2">
              <CCol md={{ span: true, order: 1 }} sm={{ span: true, order: 2 }}>
                <p className="form-label">Image</p>
              </CCol>
              <CCol md={{ span: 3, order: 2 }} sm={{ span: 12, order: 1 }}>
                {handleButtonStateChange(listField, index, "icon", "w-100")}
              </CCol>
            </CRow>
            <CRow>
              <CCol>
                <CFormInput
                  type="file"
                  id={"image_banner_" + index}
                  onChange={(e) => handleFieldsChange(index, e)}
                />
              </CCol>
            </CRow>
          </CListGroupItem>
        ))}
      </CListGroup>
      {/*Banner Section Content END*/}
    </div>
  );
}
