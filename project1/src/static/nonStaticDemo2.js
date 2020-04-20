import staticMehodDemo from "./staticMethod";

export default class nonStaticDemo2 {
  getJsonValue() {
    let _userModelJson = undefined;
    let _jsonValue = undefined;
    //get data from staticdemo class
    _jsonValue = staticMehodDemo.bindJsonValue; //get

    // pass data usermodel to object type
    _userModelJson = JSON.parse(_jsonValue);
    staticMehodDemo.bindJsonValue = "Harshal";
    console.log(_userModelJson);
  }
}
