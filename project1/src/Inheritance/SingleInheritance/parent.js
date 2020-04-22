export default class parent {
  // Public Method

  // InComplete Method
  // @virtual
  inCompleteMethodDemo() {
    throw new Error("Parent : InComplete Method");
  }

  //Complete Method
  // @Virtual
  completeMethodDemo() {
    console.log("Parent : Complete Method");
  }
}
