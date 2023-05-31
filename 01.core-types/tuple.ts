const jack: { age: number; married: boolean; role: [number, ...string[]] } = {
  age: 11,
  married: true,
  role: [0, "author", "CEO"],
};

jack.role = [1, "normal", "employee"];

console.log(jack);
