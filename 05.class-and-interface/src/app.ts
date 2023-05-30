// class Department {
//   // public id: string;
//   // private name: string;
//   private employees: string[] = [];

//   static companyName = "otterCompany";

//   // constructor(id: string, n: string) {
//   //   this.id = id;
//   //   this.name = n;
//   // }

//   constructor(public readonly id: string, private name: string) {
//     //   this.id = id;
//     //   this.name = n;
//   }

//   static makeOtterWithName(name: string) {
//     if (!name) {
//       throw new Error("there is no otter's name!");
//     }

//     return `New Otter's name is ${name}!`;
//   }

//   describe(this: Department) {
//     console.log("department:", this.name);
//     // this.id = "ddd"; // readonly modifier가 설정되어있는 property에 대해 초기화 이후 값을 변경하려고 해 에러를 출력한다.
//   }

//   addEmployee(name: string) {
//     this.employees.push(name);
//   }

//   displayEmployees() {
//     console.log(this.employees.length);
//     console.log(this.employees);
//   }
// }

// class IT extends Department {
//   private admins: string[];

//   constructor(id: string) {
//     super(id, "ITdepartment"); // 상속받은 부모 class의 constructor를 실행한다.
//     this.admins = [];
//   }

//   get getAdmins() {
//     if (this.admins) {
//       return this.admins;
//     }

//     throw new Error("등록된 admin이 없습니다.");
//   }

//   set setAdmin(value: string) {
//     if (!value) {
//       throw new Error("적절하지 않은 value입니다.");
//     }

//     this.addAdmin(value);
//   }

//   private addAdmin(admin: string) {
//     this.admins.push(admin);
//   }

//   displayAdmins() {
//     console.log(this.admins);
//   }
// }

// const ITTeam = new IT("id_IT");

// ITTeam.setAdmin = "진상";
// ITTeam.setAdmin = "수달";
// ITTeam.setAdmin = "김밥";

// console.log(ITTeam.getAdmins);

// const accounting = new Department("idid", "ACCOUNTING");

// accounting.describe();

// accounting.addEmployee("진상");
// accounting.addEmployee("노은");
// // accounting.employees[2] = "수달";
// // 이렇게 외부에서 직접 object 내부의 property에 접근하는 것을 제한하려면 private 접근제어자를 이용할 수 있다.

// accounting.displayEmployees();

// /*
// const tmpAcc = { describe: accounting.describe };

// tmpAcc.describe(); // => department: undefined
//  */
// /*
// const tmpAcc = { name: "dd", describe: accounting.describe };

// tmpAcc.describe(); // => department: undefined
//  */

// // static property
// console.log(Department.companyName);

// // static method
// console.log(Department.makeOtterWithName("진상"));
