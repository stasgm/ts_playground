interface IAnimal {
  readonly name: string;
  makeSound: () => void;
}

abstract class Animal implements IAnimal {
  readonly name: string;
  private distance = 0;

  constructor(name = '') {
    this.name = name;
  }

  abstract makeSound(): void;

  move(distance: number): void {
    this.distance += distance;
  }
}

class Cat extends Animal {
  makeSound(): void {
    console.log('meaw');
  }
}

const cat = new Cat('Nox');
cat.makeSound();

function main(): number {
  const a = 1;
  console.log(a);

  return a;
}

export { main };
