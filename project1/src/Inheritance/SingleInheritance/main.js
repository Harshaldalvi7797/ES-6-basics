import parent from "./parent";
import child from "./child";
export default class main {
  constructor() {
    console.log("hii");
  }
  onSubmit() {
    let parentObj = null;
    let childObj = null;

    //parent instance
    parentObj = new parent();
    parentObj.completeMethodDemo();

    //child ka instance

    childObj = new child();
    childObj.completeMethodDemo();
    childObj.inCompleteMethodDemo();
    childObj.childOwnMethodDemo();

    //polimorphism
    parentObj = new child();
    parentObj.completeMethodDemo(); //child ka
    parentObj.inCompleteMethodDemo(); //child ka

    parentObj.childOwnMethodDemo(); //child ka
  }
}

export function onSubmitClickEvent() {
  console.log("dshbjhj");
  let mainObj = new main();
  mainObj.onSubmit();
}

let mainObj = new main();
mainObj.onSubmit();
