import {
  CAccordion,
  CAccordionBody,
  CAccordionHeader,
  CAccordionItem,
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CFormInput,
  CFormTextarea,
  CInputGroup,
  CListGroup,
  CListGroupItem,
  CRow,
} from "@coreui/react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import DynaPlusBtn from "../common/DynaPlusBtn";
import DynaMinusBtn from "../common/DynaMinusBtn";
import { CustomCAccordionHeader } from "./CustomCHeader";
import { DynaBtn } from "./CustomCHeaderMicros";

export function HeaderSection() {
  return (
    <div className="mb-3">
      <CCard>
        <CCardHeader>
          <h5>Header Section</h5>
        </CCardHeader>
        <CCardBody>
          <CFormInput
            type="file"
            id="logo_event"
            className="w-50 mb-3"
            label="Logo"
            placeholder=""
          />
        </CCardBody>
      </CCard>
    </div>
  );
}

export function FooterSection() {
  return (
    <div className="mt-3">
      <CCard>
        <CCardHeader>
          <h5>Footer Section</h5>
        </CCardHeader>
        <CCardBody>
          <CFormInput
            type="file"
            id="organizerlogo_event"
            className="w-50 mb-3"
            label="Organizer Logo"
            placeholder=""
          />
          <CFormInput
            type="text"
            id="copyright_event"
            floatingClassName="w-50 mb-3"
            floatingLabel="Copyright"
            placeholder=""
          />
          <CInputGroup className="mb-3 w-25">
            <CFormInput
              type="text"
              id=""
              name=""
              placeholder="Social Media 1..."
              floatingClassName=""
              floatingLabel="Social Media"
            />
            <DynaPlusBtn btnClass={""} iconClass={"icon"} />
          </CInputGroup>
        </CCardBody>
      </CCard>
    </div>
  );
}

export function BannerSection() {
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
        <CListGroupItem className="border rounded m-3">
          <CRow className="p-2">
            <CCol md={{ span: true, order: 1 }} sm={{ span: true, order: 2 }}>
              <p className="form-label">Image</p>
            </CCol>
            <CCol md={{ span: 3, order: 2 }} sm={{ span: 12, order: 1 }}>
              <DynaPlusBtn btnClass={"w-100"} iconClass={"icon"} />
            </CCol>
          </CRow>
          <CRow>
            <CCol>
              <CFormInput type="file" id="image_banner" />
            </CCol>
          </CRow>
        </CListGroupItem>
      </CListGroup>
      {/*Banner Section Content END*/}
    </div>
  );
}

export function SpeakerSection({ accordionClass }) {
  return (
    <div>
      <CFormInput
        type="text"
        id=""
        name=""
        placeholder="Input Speaker title here..."
        floatingClassName="w-50 mb-3"
        floatingLabel="Speaker (Section) Title"
      />
      {/*Speaker List*/}
      <CAccordion activeItemKey={1} className={accordionClass}>
        <CAccordionItem itemKey={1}>
          <CustomCAccordionHeader
            title={"Speaker Individual"}
            dynabtn={
              <DynaBtn
                dynaButton={<DynaPlusBtn btnClass={""} iconClass={"icon"} />}
              />
            }
          />
          <CAccordionBody>
            <div className="row mb-3">
              <div className="col-md">
                <label htmlFor="name_speaker" className="form-label">
                  Speaker Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name_speaker"
                  placeholder="Input Speaker name here..."
                />
              </div>
              <div className="col-md">
                <label htmlFor="jobtitle_speaker" className="form-label">
                  Job Title
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="jobtitle_speaker"
                  placeholder="Input Speaker job title here..."
                />
              </div>
              <div className="col-md">
                <label htmlFor="avatar_speaker" className="form-label">
                  Speaker Avatar
                </label>
                <input
                  type="file"
                  className="form-control"
                  id="avatar_speaker"
                />
              </div>
            </div>
          </CAccordionBody>
        </CAccordionItem>
      </CAccordion>
    </div>
  );
}

export function ScheduleSection({ accordionClass }) {
  return (
    <div>
      {/*Activity List*/}
      <CAccordion activeItemKey={1} className={accordionClass}>
        <CAccordionItem itemKey={1}>
          <CustomCAccordionHeader
            title={"Activity"}
            dynabtn={
              <DynaBtn
                dynaButton={<DynaPlusBtn btnClass={""} iconClass={"icon"} />}
              />
            }
          />
          <CAccordionBody>
            <div className="row mb-3">
              <div className="col-md">
                <label htmlFor="name_speaker" className="form-label">
                  Speaker Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name_speaker"
                  placeholder="Input Speaker name here..."
                />
              </div>
              <div className="col-md">
                <label htmlFor="jobtitle_speaker" className="form-label">
                  Job Title
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="jobtitle_speaker"
                  placeholder="Input Speaker job title here..."
                />
              </div>
              <div className="col-md">
                <label htmlFor="avatar_speaker" className="form-label">
                  Speaker Avatar
                </label>
                <input
                  type="file"
                  className="form-control"
                  id="avatar_speaker"
                />
              </div>
            </div>
            <div className="row row-cols mb-3 mt-3">
              <div className="form-floating col-8 ">
                <input
                  type="text"
                  className="form-control"
                  id="activitytitle_schedule"
                  placeholder="Input Activity title here..."
                />
                <label
                  htmlFor="activitytitle_schedule"
                  className="form-label mx-2"
                >
                  Activity Title
                </label>
              </div>
              <div className="form-floating col-4 ">
                <input
                  type="date"
                  className="form-control"
                  id="activitytime_schedule"
                  placeholder=""
                />
                <label
                  htmlFor="activitytime_schedule"
                  className="form-label mx-2"
                >
                  Date
                </label>
              </div>
            </div>
            <div className="form-floating ">
              <textarea
                type="text"
                className="form-control"
                id="activitydesc_schedule"
                placeholder="Input Activity description here..."
                defaultValue={""}
              />
              <label htmlFor="activitydesc_schedule" className="form-label">
                Activity Description
              </label>
            </div>
            <div className="row row-cols mb-3 mt-3">
              <div className="form-floating col-4 ">
                <input
                  type="time"
                  className="form-control"
                  id="activitytime_schedule"
                  placeholder=""
                />
                <label
                  htmlFor="activitytime_schedule"
                  className="form-label mx-2"
                >
                  Time Range - Start
                </label>
              </div>
              <div className="form-floating col-4 ">
                <input
                  type="time"
                  className="form-control"
                  id="activitytime_schedule"
                  placeholder=""
                />
                <label
                  htmlFor="activitytime_schedule"
                  className="form-label mx-2"
                >
                  Time Range - Finish
                </label>
              </div>
            </div>
          </CAccordionBody>
        </CAccordionItem>
      </CAccordion>
      {/*Speaker Section Content END*/}
    </div>
  );
}

export function TicketSection({ accordionClass }) {
  return (
    <div>
      <CFormInput
        type="text"
        id="title_ticket"
        floatingClassName="w-50 mb-3"
        floatingLabel="Ticket Title"
        placeholder="Input Ticket title here.."
      />
      {/*Ticket List*/}
      <CAccordion activeItemKey={1} className={accordionClass}>
        <CAccordionItem itemKey={1}>
          <CustomCAccordionHeader
            title={"Ticket Item"}
            dynabtn={
              <DynaBtn
                dynaButton={<DynaPlusBtn btnClass={""} iconClass={"icon"} />}
              />
            }
          />
          <CAccordionBody>
            <div className="w-50 mb-3">
              <label htmlFor="price_ticket" className="form-label">
                Ticket Name
              </label>
              <input
                type="text"
                className="form-control"
                id="price_ticket"
                placeholder="Ticket name goes here..."
              />
            </div>
            <div className="row mb-3">
              <div className="col input-group">
                <label htmlFor="price_ticket" className="form-label w-75">
                  Ticket Price
                </label>
                <input
                  type="number"
                  className="form-control w-75"
                  id="price_ticket"
                  placeholder="Input Activity title here..."
                />
                <select className="form-select input-group-text w-25" defaultValue={0}>
                  <option value={0}>Rupiah (Rp.)</option>
                  <option value={1}>Dollar ($)</option>
                  <option value={2}>Argentina Peso</option>
                  <option value={3}>Yen</option>
                </select>
              </div>
              <div className="col">
                <label htmlFor="price_ticket" className="form-label">
                  Icon/Image
                </label>
                <input
                  type="file"
                  className="form-control"
                  id="price_ticket"
                  placeholder="icon/image for ticket item goes here..."
                />
              </div>
            </div>
            <CInputGroup className="mb-3 w-50">
              <CFormInput
                type="text"
                id=""
                name=""
                placeholder="Benefit 1..."
                floatingClassName=""
                floatingLabel="Benefit"
              />
              <DynaPlusBtn btnClass={""} iconClass={"icon"} />
            </CInputGroup>
          </CAccordionBody>
        </CAccordionItem>
      </CAccordion>
      {/*Speaker Section Content END*/}
    </div>
  );
}

export function VenueSection() {
  return (
    <div>
      <div className="row g-1">
        <div className="form-floating col-6 mb-3 px-1">
          <input
            type="text"
            className="form-control"
            id="price_ticket"
            placeholder=""
          />
          <label htmlFor="price_ticket" className="form-label">
            Google Maps source link
          </label>
        </div>
        <div className="form-floating col-6 mb-3 px-1">
          <input
            type="text"
            className="form-control"
            id="price_ticket"
            placeholder=""
          />
          <label htmlFor="price_ticket" className="form-label">
            Venue Section Title
          </label>
        </div>
      </div>
      <div className="row g-1">
        <div className="form-floating col-6 mb-3 px-1">
          <input
            type="text"
            className="form-control"
            id="eventdateend_venue"
            placeholder=""
          />
          <label htmlFor="eventdateend_venue" className="form-label">
            Contact name
          </label>
        </div>
        <div className="form-floating col-6 mb-3 px-1">
          <input
            type="text"
            className="form-control"
            id="price_ticket"
            placeholder=""
          />
          <label htmlFor="price_ticket" className="form-label">
            Contact number
          </label>
        </div>
      </div>
      <div className="row d-flex flex-wrap">
        <div className="col-md-4 col-sm-12">
          <small className="mb-3">
            <emphasis>Time</emphasis>
          </small>
          <div className="form-floating mb-3">
            <input
              type="datetime-local"
              className="form-control"
              id="eventdatestart_venue"
              placeholder=""
            />
            <label htmlFor="eventdatestart_venue" className="form-label">
              Event starts at...
            </label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="datetime-local"
              className="form-control"
              id="eventdateend_venue"
              placeholder=""
            />
            <label htmlFor="eventdateend_venue" className="form-label">
              Event ends at...
            </label>
          </div>
        </div>
        <div className="col-md-4 col-sm-12">
          <small className="mb-3">
            <emphasis>Location</emphasis>
          </small>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="price_ticket"
              placeholder=""
            />
            <label htmlFor="price_ticket" className="form-label">
              Location Address
            </label>
          </div>
          <div className="form-floating mb-3">
            <textarea
              type="text"
              className="form-control"
              id="price_ticket"
              placeholder=""
              defaultValue={""}
            />
            <label htmlFor="price_ticket" className="form-label">
              Location Description
            </label>
          </div>
        </div>
        <div className="col-md-4 col-sm-12">
          <small className="mb-3">
            <emphasis>How-to</emphasis>
          </small>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="price_ticket"
              placeholder=""
            />
            <label htmlFor="price_ticket" className="form-label">
              How-to Title
            </label>
          </div>
          <div className="form-floating mb-3">
            <textarea
              type="text"
              className="form-control"
              id="price_ticket"
              placeholder=""
              defaultValue={""}
            />
            <label htmlFor="price_ticket" className="form-label">
              How-to Description
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export function SponsorSection({ accordionClass }) {
  return (
    <div>
      {/*Sponsor List*/}
      <CAccordion activeItemKey={1} className={accordionClass}>
        <CAccordionItem itemKey={1}>
          <CustomCAccordionHeader
            title={"Sponsor Item"}
            dynabtn={
              <DynaBtn
                dynaButton={<DynaPlusBtn btnClass={""} iconClass={"icon"} />}
              />
            }
          />
          <CAccordionBody>
            <div className="row mb-3">
              <div className="col">
                <label htmlFor="avatar_speaker" className="form-label">
                  Sponsor Logo
                </label>
                <input
                  type="file"
                  className="form-control"
                  id="avatar_speaker"
                />
              </div>
              <div className="col">
                <label htmlFor="name_speaker" className="form-label">
                  Sponsor Website
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name_speaker"
                  placeholder="Input Speaker name here..."
                />
              </div>
            </div>
          </CAccordionBody>
        </CAccordionItem>
      </CAccordion>
    </div>
  );
}
