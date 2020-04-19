//declaration
const privateMethodDemo = Symbol("privateMethodDemo"); // define symbol for private method

//define for public property
const _fullname = Symbol("fullname");

export default class classDemo {
  constructor() {
    console.log("constructor automatically called when instance is created");
  }

  //private method define using symbol
  [privateMethodDemo]() {
    console.log("private method");
  }

  //public method
  publicMethodDemo(strname) {
    console.log(strname);
    this[privateMethodDemo](); // call private method using symbol
  }

  //public property

  set fullname(value) {
    this[_fullname] = value;
  }
  get fullname() {
    return this[_fullname];
  }
}
