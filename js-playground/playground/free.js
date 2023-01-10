// https://snov.io/knowledgebase/what-is-a-valid-email-address-format/#:~:text=Every%20email%20address%20consists%20of,.com%E2%80%9D%20is%20the%20domain.

function validateEmail(email) {
  // const regex = /[a-zA-Z0-9]\@[a-zA-Z0-9]\.[a-zA-Z]{2-5}\.[a-zA-Z]{2-5}/;
  const regex = /^[a-zA-Z0-9]{1,25}@[a-zA-Z0-9]{1,25}(\.[a-zA-Z]{2,5}){1,2}$/;

  return regex.test(email);
}

function replace(input, replacement) {
  // const regex = /import (.+) from "\.validations.ts"/;
  // const regex = /import (.+) from "~\/utils\/validations"/;
  const regex = /import (\{(\n.*){1,}\}) from "~\/utils\/validations"/;

  const result = (input.match(regex) || ["", ""]).map((item) => {
    return item;
  });

  console.log({ result, lenght: result.length });

  return result[0].replace(result[1], replacement);
}

// .-_ puntos seguidos no, ni al principio

const inputs = [
  "3ddfeferferfrcsf43rd",
  "3ddfeferferfrcsf43rd@",
  "3ddfeferferfrcsf43rd@gmail",
  "3ddfeferferfrcsf43rd@gmail.",
  "3ddfeferferfrcsf43rd@gmail.com",
  "3ddfeferferfrcsf43rd@gmail.edu.co",
  "3ddfeferferfrcsf-_ss--__ss@gmail.com",
  "3ddfeferferfrcsf43rd@gmail.edu.co",
  "3ddfeferferfrcsf43rd@gmail.com.co.co",
];
inputs.forEach((input) => {
  console.log(input, validateEmail(input));
});

console.log(
  replace(
    `import { isNotEmptyString, isNumber } from "~/utils/validations"`,
    "v"
  )
);

console.log(
  replace(
    `import {
      isNotEmptyArray,
      isNotEmptyString,
      isNotTrue,
      isNotUndefined,
      isNumber,
      isUndefined,
    } from "~/utils/validations"`,
    "v"
  )
);
