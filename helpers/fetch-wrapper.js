export const fetchWrapper = {
  get,
  post,
  patch,
  delete: _delete,
};

async function get(url) {
  const requestOptions = {
    method: "GET",
  };
  return await fetch(url, requestOptions).then(handleResponse);
}

async function post(url, body) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  };
  return await fetch(url, requestOptions).then(handleResponse);
}

async function patch(url, body) {
  const requestOptions = {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  };
  return await fetch(url, requestOptions).then(handleResponse);
}

// prefixed with underscored because delete is a reserved word in javascript
async function _delete(url) {
  const requestOptions = {
    method: "DELETE",
  };
  return await fetch(url, requestOptions).then(handleResponse);
}

// helper functions

function handleResponse(response) {
  return response.text().then((text) => {
    const data = text && JSON.parse(text);

    if (!response.ok) {
      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}
