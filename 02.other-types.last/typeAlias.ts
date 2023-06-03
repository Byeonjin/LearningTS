type Combinable = string | number;
type ToTo = "toStr" | "toNumb";

// function combineFunc(input1: Combinable, input2: Combinable, to: ToTo) {
//   if (to === "toStr") {
//     return input1.toString() + input2.toString();
//   } else {
//     return +input1 + +input2;
//   }
// }

/* -------------------------------------------------------------------------- */
/*                            Type Alias와 전개구문의 응용                            */
/* -------------------------------------------------------------------------- */

// type Role = "teacher" | "student" | "parents" | "dog";

// const jack: { name: string; role: [Role, ...Role[]] } = {
//   name: "Jack",
//   role: [
//     "teacher",
//     "student",
//     "parents",
//     "parents",
//     "parents",
//     "parents",
//     "dog",
//   ],
// };

// console.log(jack);

/* -------------------------------------------------------------------------- */
/*                          Type Alias를 이용한 객체 타입 간소화                    */
/* -------------------------------------------------------------------------- */

type User = { name: string; age: number };

function getUserStatus(userObj: User) {
  return console.log(`name: ${userObj.name}, age: ${userObj.age}`);
}

const jack: User = {
  name: "잭",
  age: 1111,
};

console.log(getUserStatus(jack));
