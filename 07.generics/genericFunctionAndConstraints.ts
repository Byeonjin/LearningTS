// 제너릭 함수

function merge<T extends object, U extends object>(a: T, b: U) {
  return Object.assign(a, b);
}

const mergedObj = merge({ name: "nn" }, { age: 11 });
console.log(mergedObj);

//constraints

// console.log(merge({ name: "otter" }, 30));
// 이 경우 30은 객체가 아니라서 기대하는 결과가 나오지 않을 것이다.
// T, U가 어떤 타입이냐 객체의 정확한 구조도 상관 없이 아무 타입이라도 상관없기 때문이다.

interface Lengthy {
  length: number;
}

// 제너릭 함수와 제약 응용
function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let description = "Got no value.";
  if (element.length === 1) {
    description = "Got 1 element.";
  } else if (element.length > 1) {
    description = "Got " + element.length + "elements.";
  }

  return [element, description];
}

console.log(countAndDescribe("djlfkajsdlj"));
