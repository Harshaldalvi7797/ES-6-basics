//declaration
const privateMethodDemo = Symbol("privateMethodDemo"); // define symbol for private method

//define for public property
const _fullname = Symbol("fullname");
//define private property
const age = Symbol("age"); // for property name
const _age = Symbol("age"); //property private variable

export default class classDemo {
  constructor() {
    console.log("constructor automatically called when instance is created");
  }

  //private method define using symbol
  [privateMethodDemo]() {
    console.log("private method");
  }

  //private property
  set [age](value) {
    this[_age] = value;
  }
  get [age]() {
    return this[_age];
  }

  //public method
  publicMethodDemo(strname) {
    console.log(strname);
    this[privateMethodDemo](); // call private method using symbol

    //access private property
    this[_age] = 23;
    console.log(this[_age]);
  }

  //public property
  set fullname(value) {
    if (value.length >= 6) {
      this[_fullname] = value;
    } else {
      this[_fullname] = undefined;
    }
  }
  get fullname() {
    return this[_fullname];
  }
}
