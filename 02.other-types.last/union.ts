function combine(input1: string | number, input2: boolean) {
  let result;

  if (typeof input1 == "number" && typeof input2 == "number") {
    // 유니언 타입을 이용해 함수를 구현한 후 런타임 타입 체크를 통해 argument들의 type의 종류에 따라 유연하게 기능을 구현할 수 있다.
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }

  return result;
}

const combineNumber = combine(1, 44);
console.log(combineNumber); // => 45

const conbineName = combine("변", "진상");
console.log(conbineName); // => 변진상
