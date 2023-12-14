//generics function
const fn = <T>(args: T): T => {
  return args;
};

const getArrayLength = <T>(arr: T[]): number => {
  return arr.length;
};

//calling function
getArrayLength<number>([1, 2, 3, 4, 5]);
getArrayLength<string>(["123", "232", "34"]);

const ifElse = <T, K>(condition: boolean, ifTrue: T, ifFalse: K) =>
  condition ? ifTrue : ifFalse;

//generics in class
class customArray<T> {
  private arr: T[] = [];

  getItems(arr: T[]) {
    return (this.arr = arr);
  }

  addItem(item: T) {
    this.arr.push(item);
  }

  removeItem(item: T) {
    let index = this.arr.indexOf(item);
    if (index > -1) this.arr.splice(index, 1);
  }
}

let numObj = new customArray<number>();
