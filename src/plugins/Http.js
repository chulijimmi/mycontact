const get = async url => {
  const response = await fetch(url, {
    method: 'GET',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  });
  return response.json();
};

const post = async (url, payload) => {
  try {
    console.log("post_payload", JSON.stringify(payload))
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload)
    });
    response.json().then((data) => console.log("data", data)).catch((error) => console.log("error", error))
    return []
  } catch (error) {
    console.error(error);
  }
};

const Http = {
  get,
  post,
};

export default Http;
