const axios = require("axios");

async function main() {
  const instance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    timeout: 1000,
    headers: { "X-Custom-Header": "foobar" }
  });

  await get(instance);
  await post(instance);
}

main();

// --- UTILS ---

function get(instance = axios) {
  return instance
    .get("/todos/1", {
      params: {
        // id: 12345,
      }
    })
    .then(function(response) {
      console.log(response.data);
    })
    .catch(function(error) {
      console.log(error);
    });
}

function post(instance = axios) {
  return instance
    .post(
      "/posts",
      {
        title: "foo",
        body: "bar",
        userId: 1
      },
      {
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      }
    )
    .then(function(response) {
      console.log(response.data);
    })
    .catch(function(error) {
      console.log(error);
    });
}
