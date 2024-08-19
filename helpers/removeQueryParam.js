export function removeQueryParam (router, param) {
  const { pathname, query } = router;
  const params = new URLSearchParams(query);
  params.delete(param);
  router.replace({ pathname, query: params.toString() }, undefined, {
    shallow: true,
  });
};

export function addQueryParam (router, name, value) {
  const { pathname, query } = router;
  const params = new URLSearchParams(query);
  params.set(name, value);
  router.replace({ pathname, query: params.toString() }, undefined, {
    shallow: true,
  });
};