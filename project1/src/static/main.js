import nonStaticDemo1 from "./nonStaticDemo1";
import nonStaticDemo2 from "./nonStaticDemo2";
import StaticMethod from "./staticMethod.js";
export default class main {
  //public method

  onSubmit() {
    let _nonStaticDemo1Obj = null;
    let _nonStaticDemo2Obj = null;

    _nonStaticDemo1Obj = new nonStaticDemo1();
    _nonStaticDemo1Obj.setjsonValue();

    _nonStaticDemo2Obj = new nonStaticDemo2();
    _nonStaticDemo2Obj.getJsonValue();
  }
}

export function onSubmiClickEvent() {
  let _mainObj = null;
  _mainObj = new main();
  _mainObj.onSubmit();
}
