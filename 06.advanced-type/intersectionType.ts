// type Admin = {
//   name: string;
//   privileges: string[];
// };

// type Employee = {
//   name: string;
//   startDate: Date;
// };

// type tmp = Admin | Employee;

// const OBJ: tmp = {
//   name: "dkdkdk",
//   privileges: ["djkfasl"],
//   startDate: new Date(),
// };

// interface ElevatedEmployee extends Employee, Admin {}

// interface Admin {
//   name: string;
//   privileges: string[];
// }

// interface Employee {
//   name: string;
//   startDate: number;
// }

// type ElevatedEmployee = Admin & Employee;
// or
// interface ElevatedEmployee extends Admin, Employee {}

// type ElevatedEmployee = Admin | Employee;

// const e1: ElevatedEmployee = {
// name: "max",
// privileges: ["aaa"],
// startDate: 1992,
// };

// type Combinable = string | number;
// type Numeric = number | boolean;

// type Universal = Combinable & Numeric; //=> type Universal = number
// type Universal2 = Combinable | Numeric; //=> type Universal2 = string | number | boolean
