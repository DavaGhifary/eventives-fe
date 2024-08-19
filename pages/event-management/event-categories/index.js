import { Add } from "iconsax-react";
import styles from "../../../styles/Home.module.css";
import ConfirmDialog from "../../../src/components/common/ConfirmDialog";
import {
  CAlert,
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CFormInput,
  CFormSelect,
  CHeader,
  CModal,
  CModalBody,
  CModalFooter,
  CModalTitle,
  CRow,
  CSpinner,
} from "@coreui/react";
import EventCategoryForm from "./form";
import useModalTrigger from "../../../src/hooks/useModalTrigger";
import { useRouter } from "next/router";
import Search from "../../../src/components/common/Search";
import Pagination from "../../../src/components/Pagination";
import { addQueryParam, removeQueryParam } from "../../../helpers/";
import LimitSelectBox from "../../../src/components/common/LimitSelectBox";
import { useDataPaginate } from "../../../src/hooks/useDataPaginate";
import { EventCategoriesTable } from "../../../src/components/tables/EventCategoriesTable";

const category_list = [
  {
    id: 1,
    category_name: "Seminar",
    category_status: "Active",
  },
  {
    id: 2,
    category_name: "Peluncuran Produk",
    category_status: "Active",
  },
  {
    id: 3,
    category_name: "Pameran",
    category_status: "Active",
  },
  {
    id: 4,
    category_name: "Webinar",
    category_status: "Unused",
  },
  {
    id: 5,
    category_name: "Konferensi",
    category_status: "Active",
  },
  {
    id: 6,
    category_name: "Konser",
    category_status: "Active",
  },
  {
    id: 7,
    category_name: "Workshop",
    category_status: "Active",
  },
];
const url = "/api/event-management/event-categories/";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

async function handleRemove(id) {
  const response = await fetch(url + id, { method: "DELETE" });
}

export default function EventCategories({ repo }) {
  const router = useRouter();
  //Modal trigger
  const { modalVisibility, toggleModal } = useModalTrigger();
  const {
    modalVisibility: confirmVis,
    toggleModal: toggleConfirm,
    forceFalse,
  } = useModalTrigger();
  let { page, perPage } = router.query;
  let isCreateMode = !router.query.id;
  //Fetched data from backend as variable
  const { prevPage, nextPage, data, error, isLoading } = useDataPaginate(url);
  if (data && data.meta.lastPage < data.meta.currentPage)
    addQueryParam(router, "page", 1);
  if (error) return <div>failed to load: $(error)</div>;
  if (isLoading) return <CSpinner />;
  //if (data.count <= limit) offset = 0;
  let firstEntryOfPage = parseInt(page) + 1;
  let lastEntryOfPage =
    data.count <= perPage ? data.count : parseInt(page) + parseInt(perPage);
  return (
    <div className={styles.container}>
      <ConfirmDialog
        visible={confirmVis}
        onClose={() => {
          forceFalse();
          removeQueryParam(router, "id");
        }}
        onApprove={() => {
          handleRemove(router.query.id);
          forceFalse();
        }}
        title="Remove"
        body="Are you sure you want to remove this data ?"
      />
      {/* <CAlert color="primary" dismissible></CAlert> */}
      <CCard className="mb-4">
        <CCardHeader className="d-md-flex justify-content-between">
          <strong>Event Categories Table</strong>
          <CButton
            color="primary"
            onClick={() => {
              toggleModal();
            }}
          >
            <Add className="icon" /> New...
          </CButton>
          {/* Form Modal */}
          <CModal
            visible={modalVisibility}
            // onClose={(event) => toggleModal(event)}
            aria-labelledby="Event Categories Input Form"
          >
            <CHeader>
              <CModalTitle>
                {isCreateMode
                  ? "Input into Event Categories"
                  : "Edit Value of Event Categories"}
              </CModalTitle>
            </CHeader>
            <CModalBody>
              <EventCategoryForm isCreateMode={isCreateMode} />
            </CModalBody>
            <CModalFooter>
              <CButton
                color="secondary"
                form="EventCategoriesForm"
                onClick={() => {
                  toggleModal();
                  removeQueryParam(router, "id");
                }}
              >
                Close
              </CButton>
            </CModalFooter>
          </CModal>
        </CCardHeader>
        <CCardBody>
          {/* Limit and Search */}
          <CRow className="d-md-flex justify-content-between mb-3">
            <CCol className="d-flex gap-2 align-items-center" xs={2}>
              <LimitSelectBox
                defaultValue={perPage}
                onChange={(e) => {
                  addQueryParam(router, "perPage", e.target.value);
                }}
              />
            </CCol>
            <Search />
          </CRow>
          {/* Table */}
          {/* <CTable striped hover small>
            <CTableHead>
              <CTableRow>
                <CTableHeaderCell scope="col">#id</CTableHeaderCell>
                {eventCategories_columns_EN.map((column) => (
                  <CTableHeaderCell scope="col" key={column}>
                    {column}
                  </CTableHeaderCell>
                ))}
                <CTableHeaderCell scope="col">Action</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              {data.data &&
                data.data.map(({ id, categoryName, status }) => (
                  <CTableRow key={id}>
                    <CTableDataCell scope="row">{id}</CTableDataCell>
                    <CTableDataCell>{categoryName}</CTableDataCell>
                    <CTableDataCell>
                      {status ? "Active" : "Unused"}
                    </CTableDataCell>
                    <CTableDataCell className="d-flex gap-3">
                      <CButton
                        color="primary"
                        onClick={() => {
                          toggleModal();
                          addQueryParam(router, "id", id);
                        }}
                      >
                        <Edit2 size="16" color="#fff" />
                      </CButton>
                      <CButton
                        color="danger"
                        onClick={() => {
                          addQueryParam(router, "id", id);
                          toggleConfirm();
                        }}
                      >
                        <Trash size="16" color="#fff" />
                      </CButton>
                    </CTableDataCell>
                  </CTableRow>
                ))}
            </CTableBody>
          </CTable> */}
          <EventCategoriesTable
            datas={data.data}
            router={router}
            addQueryParam={addQueryParam}
            toggleModal={toggleModal}
            toggleConfirm={toggleConfirm}
          />
        </CCardBody>
        <CCardFooter className="d-md-flex justify-content-between">
          {data.meta && (
            <div
              className="align-self-start text-medium-emphasis small"
              id="entrynumber_info"
              role="entries_status"
              aria-live="polite"
            >
              Showing {firstEntryOfPage} to {lastEntryOfPage} of{" "}
              {data.meta.total} entries
            </div>
          )}
          <Pagination
            className="pagination justify-content-end align-self-end"
            total={data.meta.total}
            perPage={perPage ? perPage : 5}
            prevPage={prevPage}
            nextPage={nextPage}
          />
        </CCardFooter>
      </CCard>
    </div>
  );
}
