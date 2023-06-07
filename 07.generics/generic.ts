// generics

const names: Array<string> = ["otter", "dog"];

const tgmp = names[1].concat("jijijijijijijiji", "fjidjdiji");
// => dogjijijijijijijijifjidjdiji

const promise: Promise<number> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(13333330);
  }, 2000);
});

promise.then((data) => {
  console.log(data.toLocaleString());
});

//
