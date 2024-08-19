import { useRouter } from "next/router";
import useSWR from "swr";
import { addQueryParam } from "../../helpers/";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

export const useDataPaginate = (ApiEndpoint) => {
  const router = useRouter();
  const { textSearch, page, perPage } = router.query;
  let queryCombo = new URLSearchParams({
    textSearch: !textSearch ? "" : textSearch,
    page: !page ? 1 : page,
    perPage: !perPage ? 5 : perPage,
  });
  const { data, error, isLoading } = useSWR(
    ApiEndpoint + "?" + queryCombo.toString(),
    fetcher
  );
  // handle nextPage
  const nextPage = () => {
    if (data.meta.next !== null) {
      addQueryParam(router, "page", parseInt(page) + 1);
    }
  };
  // handle previous page
  const prevPage = () => {
    if (data.meta.prev !== null) {
      addQueryParam(router, "page", parseInt(page) - 1);
    }
  };

  // return all functions
  return { prevPage, nextPage, data, error, isLoading };
};
