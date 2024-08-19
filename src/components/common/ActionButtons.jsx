import { CButton } from "@coreui/react";
import { Edit2, Trash } from "iconsax-react";

export default function ActionButtons({
  router,
  id,
  toggleModal = () => {},
  toggleConfirm = () => {},
  addQueryParam = () => {},
}) {
  return (
    <>
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
    </>
  );
}
