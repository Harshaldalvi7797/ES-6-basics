import staticMehodDemo from "./staticMethod";

export default class nonStaticDemo1 {
  //here we cant use any keyword like var ,let,const,this

  //public method
  setjsonValue() {
    let _userModelJson = undefined; //after converting json it will become string thats why undefined
    //create usermodel using object type reference type
    var userModel = {
      firstname: "Harshal",
      lastname: "Dalvi"
    };

    //convert object model into json
    _userModelJson = JSON.stringify(userModel);

    //bind value in static property
    staticMehodDemo.bindJsonValue = _userModelJson; //set
  }
}
