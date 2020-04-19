import classDemo from "../class/classDemo";
//import { class1,class2,class3} from "../Class/classDemo"; // When u introduce multiple clasess in single .js file (Without using default)

const _classDemoObj = Symbol("_classDemoObj");
export default class mainDemo {
  constructor(classDemoObj) {
    // let _classDemoObj = classDemoObj;
    this[_classDemoObj] = classDemoObj;
  }
  //public method
  onsubmit() {
    this[_classDemoObj].publicMethodDemo("Harshal Dalvi");
  }
}

export function onsubmitClickEvent() {
  //create instance of class demo
  let classDemoObj = new classDemo();

  let maindemoObj = new mainDemo(classDemoObj);
  maindemoObj.onsubmit();
}

// export { mainDemo, onsubmitClickEvent };
