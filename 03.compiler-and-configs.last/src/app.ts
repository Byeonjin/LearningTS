const testBtn = document.querySelector("button")!;

testBtn.addEventListener(".click", () => {
  console.log("test!");
});

function add(num1: number, num2: number) {
  if (typeof num1 !== "number") return 1;
}
