import { CPagination, CPaginationItem } from "@coreui/react";
import Link from "next/link";

export default function Pagination(props) {
  const { className, total, perPage } = props;
  const { prevPage = () => {}, nextPage = () => {} } = props;
  const pageNumber = Math.ceil(total / perPage);
  let pagesList = [];
  for (let index = 1; index <= pageNumber; index++) {
    pagesList.push({
      pageIndex: index,
    });
  }
  console.log(pagesList);
  return (
    <CPagination className={className ? className : ""}>
      <CPaginationItem onClick={prevPage}>Previous</CPaginationItem>
      {pagesList.map((pageList) => (
        <Link
          key={pageList.pageIndex}
          href={{ query: { page: pageList.pageIndex, perPage: perPage } }}
          passHref
        >
          <CPaginationItem>{pageList.pageIndex}</CPaginationItem>
        </Link>
      ))}
      <CPaginationItem onClick={nextPage}>Next</CPaginationItem>
    </CPagination>
  );
}
