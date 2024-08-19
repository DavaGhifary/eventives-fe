import {
  CAccordion,
  CAccordionBody,
  CAccordionItem,
  CFormInput,
} from "@coreui/react";
import { CustomCAccordionHeader } from "./CustomCHeader";
import { DynaBtn } from "./CustomCHeaderMicros";
import useDynamicFields from "./useDynamicFields";
export function SpeakerSectionX({ accordionClass }) {
  const [listFields, handleFieldsChange, handleButtonStateChange] =
    useDynamicFields([
      (""),
      (""),
      (""),
    ]);
  return (
    <div>
      <CFormInput
        type="text"
        id="title_aspeaker"
        placeholder="Input Speaker title here..."
        floatingClassName="w-50 mb-3"
        floatingLabel="Speaker (Section) Title"
      />
      {/*Speaker List*/}
      <CAccordion activeItemKey={0} className={accordionClass}>
        {listFields.map((listField, index) => (
          <CAccordionItem itemKey={index} key={index}>
            <CustomCAccordionHeader
              title={"Speaker Individual"}
              dynabtn={
                <DynaBtn
                  dynaButton={handleButtonStateChange(listField, index, "icon")}
                />
              }
            />
            <CAccordionBody>
              <div className="row mb-3">
                <div className="col-md">
                  {/* <label
                    htmlFor={"name_speaker_" + index}
                    className="form-label"
                  >
                    Speaker Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id={"name_speaker_" + index}
                    onChange={(e) => handleFieldsChange(index, e)}
                    placeholder="Input Speaker name here..."
                  /> */}
                  <CFormInput
                    type="text"
                    id={"name_speaker_" + index}
                    onChange={(e) => handleFieldsChange(index, e)}
                    value={listField.name_speaker}
                    label="Speaker Name"
                  />
                </div>
                <div className="col-md">
                  {/* <label
                    htmlFor={"jobtitle_speaker_" + index}
                    className="form-label"
                  >
                    Job Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id={"jobtitle_speaker_" + index}
                    onChange={(e) => handleFieldsChange(index, e)}
                    placeholder="Input Speaker job title here..."
                  /> */}
                  <CFormInput
                    type="text"
                    id={"jobtitle_speaker_" + index}
                    onChange={(e) => handleFieldsChange(index, e)}
                    value={listField.jobtitle_speaker}
                    label="Speaker Name"
                  />
                </div>
                <div className="col-md">
                  <label
                    htmlFor={"avatar_speaker_" + index}
                    className="form-label"
                  >
                    Speaker Avatar
                  </label>
                  <input
                    type="file"
                    className="form-control"
                    id={"avatar_speaker_" + index}
                    onChange={(e) => handleFieldsChange(index, e)}
                  />
                </div>
              </div>
            </CAccordionBody>
          </CAccordionItem>
        ))}
      </CAccordion>
    </div>
  );
}
