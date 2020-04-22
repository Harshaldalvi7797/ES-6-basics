import abstractDemo from "./abstractDemo";
import childDemo from "./childDemo";

const _childDemoObj = Symbol("_childDemoObj");
export default class mainDemo {
  constructor(childDemoObj = undefined) {
    this[_childDemoObj] = childDemoObj;
  }
  onsubmit() {
    //   let childDemoObj = null;
    //   childDemoObj = new childDemo();
    //   childDemoObj.add();
    //   childDemoObj.isEmailId();
    // this[_childDemoObj].completeMethodDemo("harshal");

    this[_childDemoObj].completeMethodDemo("Harshal Dalvi");

    this[_childDemoObj].validEmailId("kishor@gmail.com");
  }
}
export function onSubmitClickEvent() {
  // let abstractDemoObj = new abstractDemo();
  let childDemoObj = new childDemo();
  let mainDemoObj = new mainDemo(childDemoObj);
  mainDemoObj.onsubmit();
}
onSubmitClickEvent();
