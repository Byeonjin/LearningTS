// 1. type keyword를 이용한 타입가드

/* type Uniersal = number | string;

function add(a: Uniersal, b: Uniersal) {
  if (typeof a === "string" || typeof b === "string") {
    // 조건문 부분이 type guard
    return a.toString() + b.toString();
  }

  return a + b;
}
 */

// 2. in을 이용한 타입가드

// type Admin = {
//   name: string;
//   privileges: string[];
// };

// type Employee = {
//   name: string;
//   startDate: Date;
// };

// type emp = Admin | Employee;

// const e1: emp = {
//   name: "dkdkdk",
//   privileges: ["djkfasl"],
//   // startDate: new Date(),
// };

// function printEmpInfo(e: emp) {
//   if (e.privileges) {
//     ...
//   }
//   ...
// }

// function printEmpInfo(e: emp) {
//   console.log("Name: " + e.name);

//   if ("privileges" in e) {
//     console.log("privileges: " + e.privileges);
//   }
//   if ("startDate" in e) {
//     console.log("startDate: " + e.startDate);
//   }
// }

// printEmpInfo(e1);

// 3. instanceof type guard

class Car {
  driving() {
    console.log("driving car...!");
  }
}

class Truck {
  driving() {
    console.log("driving Truck Yeah...!");
  }

  load() {
    console.log("loading stuff!");
  }
}

type Vehicle = Car | Truck;

function carAction(v: Vehicle) {
  v.driving();
  if (v instanceof Truck) {
    v.load();
  }
}

const trk = new Truck();

carAction(trk);
