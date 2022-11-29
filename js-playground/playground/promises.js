// --- Example 1: (Success) ---

const mySuccessPromise = createPromise();
mySuccessPromise.then(
  () => {
    // when "resolve" is called
    console.log("Success");
  },
  () => {
    // when "reject" is called
    console.log("failure");
  }
);

// --- Example 2: [Error .then(successCb, errorCb)] ---

const myErrorPromise1 = createPromise("error");
myErrorPromise1.then(
  () => {
    // when "resolve" is called
    console.log("success");
  },
  () => {
    // when "reject" is called
    console.log("failure");
  }
);

// --- Example 3: [Error .catch] ---

const myErrorPromise2 = createPromise("error");
myErrorPromise2
  .then(() => {
    // when "resolve" is called
    console.log("success");
  })
  .catch(() => {
    // catch an error that could happen on any place of the promises chaining
    console.log("catch error");
  });

// --- Example 4: [Using .then(successCb, errorCb) and .catch() together] ---

const myPromise = createPromise();
myPromise
  .then(() => {
    return "then 1";
  })
  .then(() => {
    throw new Error("then 2 error");
  })
  .then(
    () => {
      return "then 3";
    },
    () => {
      return "then 2 recovered";
    }
  )
  .then((result) => {
    console.log("result should be: 'then 2 recovered'", result);
    throw new Error("Final error");
  })
  .catch((error) => {
    console.log(error);
  });

// --- Utils ---

function createPromise(type) {
  if (type === "error") {
    return new Promise(function (resolve, reject) {
      reject();
    });
  }

  return new Promise(function (resolve, reject) {
    resolve();
  });
}
