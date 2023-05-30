function convertType(input: number | string, to: "string" | "number" | object) {
  // => literal type에 특정한 숫자나 문자가 아닌 일반 타입도 같이 조합(union)해서 사용 가능하다.
  if (to === "string") return input.toString();
  else return +input;
}

console.log(typeof convertType("111", "number")); // => number
console.log(typeof convertType("123123", "string")); // => string

console.log(typeof convertType(123123, "sdtring")); // !!! ERROR !!!
