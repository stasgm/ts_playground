abstract class Animal {
  readonly name: string;
  readonly speed = 1;
  private distance = 0;

  constructor(name: string) {
    this.name = name;
  }

  abstract makeSound(): void;

  move(distance: number) {
    this.distance += distance;
  }
}

class Cat extends Animal {
  makeSound(): void {
    console.log('meaw');
  }
}

class Dog extends Animal {
  makeSound(): void {
    console.log('meaw');
  }
}

const cat = new Cat('Nox');
cat.makeSound();
console.log('name', cat.name);

function main(): number {
  const a = 1;
  console.log(a);

  return a;
}

export { main };
