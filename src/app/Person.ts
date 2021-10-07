type Gender = 'M' | 'F';

/* istanbul ignore next */
abstract class Person {
  speed: number;
  readonly name: string;
  private age: number;
  private gender: Gender;

  constructor(name: string, age: number, gender: Gender) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.speed = 0;
  }

  laughing() {
    console.log(this instanceof Woman ? this.name + ' смеетя так: Гы-гы' : this.name + ' смеетя так: Хи-хи');
  }
  // abstract laughing(): void;

  sayHi() {
    console.log(`Hello! My name is ${this.name}. I am ${this.age}`);
  }

  setSpeed(speed: number) {
    this.speed = speed;
  }
}

/* istanbul ignore next */
class Woman extends Person {
  laughing() {
    console.log(`${this.name} смеетя так: Хи-хи`);
  }
}

/* istanbul ignore next */
class Man extends Person {
  laughing() {
    console.log(`${this.name} смеетя так: Гы-гы`);
  }
}

const Ina = new Woman('Ina', 18, 'F');
const Stas = new Man('Stas', 38, 'M');

Ina.sayHi();
Stas.laughing();
Stas.sayHi();
Ina.laughing();
Stas.speed;
Stas.setSpeed(10);
console.log(Stas.speed);
Stas.setSpeed(20);
console.log(Stas.speed);
