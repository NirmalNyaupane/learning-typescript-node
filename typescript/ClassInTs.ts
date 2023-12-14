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
