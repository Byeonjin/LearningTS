/* -------------------------------------------------------------------------- */
/*                                함수의 리턴 타입 명시                            */
/* -------------------------------------------------------------------------- */

function add(num1: number, num2: number): number {
  return num1 + num2;
}
// number라고 명시할 수 있지만 TS가 add 함수가 number를 리턴함을 추론할 수 있기 때문에 생략하는 것도 좋다.

function printResult(num: number): void {
  console.log(num);
}
// 이 경우 undefined를 return하는데, void는 함수가 undefined나 아무것도 return하지 않음을 명시한다.

function printResult2(num: number): undefined {
  console.log(num);
  return;
}
// 이렇게 undefined를 리턴함을 명시할 수 있지만 함수 내에 return;을 작성해줘야 경고를 띄우지 않으며, 이렇게는 거의 사용하지 않는다.

/* -------------------------------------------------------------------------- */
/*                              자료형으로서의 Function                           */
/* -------------------------------------------------------------------------- */

let funcPointer: Function;

funcPointer = add;
funcPointer = printResult;

/* -------------------------------------------------------------------------- */
/*                         더욱 엄격한 자료형 제공을 위한 함수 명세 이용                 */
/* -------------------------------------------------------------------------- */

let strictFuncPointer: (a: number, b: number) => number;

strictFuncPointer = add;
// strictFuncPointer = printResult; // !!! ERROR: 자료형으로 제공한 함수의 명세와 일치하지 않기 때문에 Error !!!

/* -------------------------------------------------------------------------- */
/*                   함수의 인자로 주어지는 Callback function의 자료형 명시            */
/* -------------------------------------------------------------------------- */

function addAndHandle(
  num1: number,
  num2: number,
  cb: (result: number) => void
) {
  const addedNum = num1 + num2;

  console.log(cb(addedNum)); // 콜백 함수의 반환값이 void라도 값을 반환할 수 있다.
}

const isReturn = addAndHandle(11, 22, (result) => {
  console.log(result);
  return true;
});
