// keyof

function extractValue<T extends object, U extends keyof T>(obj: T, key: U) {
  console.log(obj[key]);
}

extractValue({}, "name");
