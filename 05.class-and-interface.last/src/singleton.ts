/* class Human {
  constructor(protected name: string, protected age: number) {}
}

class Zzheck extends Human {
  private static instance: Zzheck;
  private constructor(name: string, age: number) {
    super(name, age);
  }

  static getZzheck() {
    if (Zzheck.instance) {
      return this.instance;
    }
    this.instance = new Zzheck("짹짹", 23);
    return this.instance;
  }
}

const zz1 = Zzheck.getZzheck();
const zz2 = Zzheck.getZzheck();

console.log(zz1, zz2, "is same! just one Instance!");
 */
