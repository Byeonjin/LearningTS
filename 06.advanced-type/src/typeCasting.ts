// type casting (형 변환)

const btnByTag = document.querySelector("button");
// const btnByTag: HTMLButtonElement | null
// => HTMLButtonElement

// const btnById = document.getElementById("button-yo")!;
// const btnById: HTMLElement | null
// => HTMLElement

const btnById1 = <HTMLButtonElement>document.getElementById("button-yo")!;
//or
const btnById2 = document.getElementById("button-yo")! as HTMLButtonElement;

btnById1.addEventListener("click", () => {});
