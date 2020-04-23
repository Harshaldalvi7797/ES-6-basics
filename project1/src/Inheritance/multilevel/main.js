import A from "./A";
import B from "./B";
import C from "./C";
export default class Main {
  onLoad() {
    let aObj = new A();
    aObj.aMethodDemo();

    let bObj = new B();
    bObj.aMethodDemo();
    bObj.bMethodDemo();

    //polymorphism of A and B

    let aObj1 = new B();
    aObj1.aMethodDemo();
    aObj1.bMethodDemo();

    let cObj = new C();
    cObj.aMethodDemo();
    cObj.bMethodDemo();
    cObj.cmethodDemo();

    //poly of a b
    aObj = new C();
    aObj.aMethodDemo();
    aObj.bMethodDemo();
    aObj.cmethodDemo();

    //poly of b and c
    bObj = new C();
    bObj.aMethodDemo();
    bObj.bMethodDemo();
  }
}
var mainObj = new Main();
mainObj.onLoad();
