
export const fetchData = (url, options) => {
  const fetchRequest = new Request(url, options);
  var statusCode = null;
  return fetch(fetchRequest)
    .then(response => (
      statusCode = response.status,
      response.json().then(result => ({ result: result, status: statusCode }))
    ))
    .catch(error => ({ error: error, status: statusCode }));
};
