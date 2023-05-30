abstract class Animal {
  constructor(protected name: string, protected sound: string) {}

  abstract whatYourName(): void;
}

class Dog extends Animal {
  constructor(name: string) {
    super(name, "멍멍!");
  }

  whatYourName(): void {
    console.log(this.name);
  }

  whatYourSound(): void {
    console.log(this.sound);
  }
}

const dog = new Dog("바둑이");

dog.whatYourName();
dog.whatYourSound();
