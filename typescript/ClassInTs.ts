class Person {
  name: string;
  email: string;
  createdAt: Date;

  //constructor is called when instance of class made
  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
    this.createdAt = new Date();
  }

  getUserData() {
    return {
      name: this.name,
      email: this.email,
      createdAt: this.createdAt,
    };
  }
}

const person = new Person("Nirmal Neuapne", "neupanenirmal");
console.log(person);

/**
 * Question:
 * Image a JavaScript function that takes two parameters:
 * an object and an array of keys. The function will return a new object based on the original one, but with only
 * the keys you want:
 */

const pickUpKeys = <T extends { [key: string]: any }, K extends keyof T>(
  obj: T,
  keys: K[]
) => {
  let restult = {} as Pick<T, K>;

  keys.map((key) => {
    if (key in obj) {
      restult[key] = obj[key];
    }
  });
  return restult;
};

//getter and setter class
class GetAndSet {
  private number: number = 0;

  setNumber(number: number) {
    this.number = number;
  }
  getNumber() {
    return this.number;
  }
}

const number = new GetAndSet();
number.setNumber(5);
console.log(number.getNumber());
