import B from "./B";

export default class C extends B {
  //override
  aMethodDemo() {
    //super.aMethodDemo();
    console.log("c : a method demo");
  }
  //@virtual
  bMethodDemo() {
    console.log("c : b method demo");
  }
  cmethodDemo() {
    console.log("c method demo");
  }
}
