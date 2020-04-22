export default class parent {
  constructor() {}
  //public method
  //incomplete method
  inCompleteMethodDemo() {
    throw new Error("parent : Incomplete method");
  }

  completeMethodDemo() {
    console.log("Parent : Complete Method");
  }
}
