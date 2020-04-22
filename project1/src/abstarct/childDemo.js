import abstractDemo from "./abstractDemo";
export default class childDemo extends abstractDemo {
  constructor() {
    super();
    console.log("child constructor");
  }
  add() {
    console.log("Addition");
  }
  //@override
  completeMethodDemo(strname) {
    let strnameObj = undefined;
    strnameObj = super.completeMethodDemo(strname);

    return strnameObj.length;
    console.log(strnameObj.length);
    //case1 extend mode
    // let strnameObj = undefined;
    // strnameObj = super.completeMethodDemo(strname);
    // return strnameObj.length;

    //case2 complete mode
  }
  validEmailId(strname) {
    super.isEmailId(strname);
    console.log("emailid");
  }
}
