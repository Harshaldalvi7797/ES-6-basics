import A from "./A";

export default class B extends A {
  //override
  aMethodDemo() {
    //super.aMethodDemo();
    console.log("b: a method demo");
  }
  bMethodDemo() {
    console.log("b method demo");
  }
}
