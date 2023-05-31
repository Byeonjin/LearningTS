// interface Person {
//   // name: string = "Max"; // interface는 initializer를 가질 수 없다는 에러를 띄운다.
//   name: string;
//   age: number;

//   //method도 추가할 수 있다. functionName(parameter1: type): return type;
//   greet(phrase: string): void;
// }

// let user: Person;

// user = {
//   name: "Jin",
//   age: 11,
//   greet(phrase) {
//     console.log(phrase + this.name);
//   },
// };

// user.greet("안녕하세요 나는 ");

// interface Move {
//   move(): void;
// }

// interface Speak {
//   speak(text: string): void;
// }

// interface Actions extends Move, Speak {
//   readonly actionNumber: number;
//   sayMyName(): void;
// }

// class Human implements Actions {
//   actionNumber = 3;

//   move(): void {
//     console.log("move");
//   }
//   speak(text: string): void {
//     console.log(text);
//   }
//   sayMyName(): void {
//     console.log("sayMyname!");
//   }
// }

// let jack: Actions;

// jack = new Human();

// jack.actionNumber = 4;

// type function
type addNum1 = (n1: number, n2: number) => number;

// interface function
interface addNum2 {
  (n1: number, n2: number): number;
}
