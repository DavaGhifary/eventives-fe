import {
  CTable,
} from "@coreui/react";
import { Edit2, Trash } from "iconsax-react";
import ActionButtons from "../common/ActionButtons";

const columns = [
  {
    key: "id",
    label: "#",
    _props: { scope: "col" },
  },
  {
    key: "categoryName",
    label: "Category Name",
    _props: { scope: "col" },
  },
  {
    key: "status",
    label: "Status",
    _props: { scope: "col" },
  },
  {
    key: "action",
    _props: { scope: "col" },
  },
];

export function EventCategoriesTable({
  datas,
  router,
  toggleModal = () => {},
  toggleConfirm = () => {},
  addQueryParam = () => {},
}) {
  const items = datas.map((item) => ({
    ...item,
    status: item.status ? "Active" : "Unused",
    action: (
      <ActionButtons
        router={router}
        id={item.id}
        toggleModal={toggleModal}
        toggleConfirm={toggleConfirm}
        addQueryParam={addQueryParam}
      />
    ),
    _cellProps: { id: { scope: "row" }, action: { className: "d-flex gap-3" } },
  }));
  return <CTable columns={columns} items={items} striped hover small />;
}
