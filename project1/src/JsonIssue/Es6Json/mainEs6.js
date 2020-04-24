import userModel from "./userModel";
export default class mainEs6 {
  onLoad() {
    let userModelObj = new userModel();

    userModelObj.firstname = "Harshal";
    userModelObj.lastname = "Dalvi";
    console.log(userModelObj.firstname);
    userModelObj.toJson();
    // let userModeljson = JSON.stringify(userModelObj);
    let userModeljson = userModelObj.toJson();
    console.log(userModeljson);
  }
}
let mainObj = new mainEs6();
mainObj.onLoad();
