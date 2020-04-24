function mainEs5() {
  this.onLoad = function() {
    //createinstance of user model
    let userModelObj = new userModel();
    userModelObj.firstname = "Harshal";
    userModelObj.lastname = "Dalvi";
    let userModelJsonObj = JSON.stringify(userModelObj);
    console.log(userModelJsonObj);
  };
}
let mainEs5Obj = new mainEs5();
mainEs5Obj.onLoad();
