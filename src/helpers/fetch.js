const baseUrl = process.env.REACT_APP_API_URL;

export const fetchData = (data, method = "POST") => {
  console.log("DATA",data);
  const url = `${baseUrl}`;
  console.log("URL", url);
  return fetch(url, {
    method,
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  });
};
