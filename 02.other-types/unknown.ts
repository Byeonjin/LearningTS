let anyVar: any;
let unknownVar: unknown;

anyVar = 3;
console.log(anyVar.toUpperCase()); // !!! 런타임 ERROR: 컴파일 당시에는 문제가 없다. !!!
console.log(typeof anyVar);

unknownVar = 2;
//console.log(unknownVar.toUpperCase());
// !!! ERROR: 컴파일 전에 unknown 자료형이기 때문에 타입체킹을 더 엄격히 하라고 에러를 띄운다.!!!

if (typeof unknownVar === "string") {
  console.log(unknownVar.toUpperCase());
}
// 이렇게 타입체킹을 거치면 에러를 띄우지 않는다.

console.log(typeof unknownVar);
