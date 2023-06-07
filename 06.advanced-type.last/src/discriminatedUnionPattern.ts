// discriminated union pattern

interface Bird {
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

function printAnimalSpeed(animal: Animal) {
  let speed;
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "horse":
      speed = animal.runningSpeed;
      break;
  }
  console.log("This animal's speed is " + speed);
}

const nonnie: Bird = { type: "bird", flyingSpeed: 1000000 };

printAnimalSpeed(nonnie);
