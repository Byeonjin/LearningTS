// index type

interface ErrorContainer {
  [prop: string]: string;

  //id: number; => !!! ERROR !!!
}

class Test {
  [prop: string]: string;
  // id: number;
}
