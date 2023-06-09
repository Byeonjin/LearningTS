/* -------------------------------------------------------------------------- */
/*                           object의 type assingment                          */
/* -------------------------------------------------------------------------- */

// object의 type assingment
/* 
const dog: { name: string; age: number } = {
  name: "바둑이",
  age: 11,
};
*/

/* -------------------------------------------------------------------------- */
/*                                   중첩객체 생성                                  */
/* -------------------------------------------------------------------------- */

const animal: {
  num: number;
  type: string[];
  recorded: { name: string; age: number };
} = {
  num: 2,
  type: ["포유류", "갑각류"],
  recorded: {
    name: "수달",
    age: 11,
  },
};
