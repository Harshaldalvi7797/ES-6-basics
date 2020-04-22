import parent from "./parent";
export default class child extends parent {
  //public method
  //override method
  inCompleteMethodDemo() {
    //case1 extend model
    console.log("child:incomplete method implementation");
  }
  //override method
  completeMethodDemo() {
    //case1 Extend model
    super.completeMethodDemo();
    console.log("child:complete method extend mode");

    //case2 pure complete mode
    // console.log("child:complete method pure complete mode");
  }

  //@virtual
  childOwnMethodDemo() {
    super.completeMethodDemo(); //to call parent method and property
  }
}
