export default class abstractDemo {
  constructor() {
    console.log("abstarct constructor");
    if (this.constructor == abstractDemo) {
      throw new Error("you cant create instance of abstarct class");
    }
  }
  //public method

  //virtual method
  //@virtual

  completeMethodDemo(strname) {
    console.log(strname);
    //logic
    //console.log("complete method demo");
    return strname;
  }
  isEmailId(strname) {
    console.log(strname);
  }
}
