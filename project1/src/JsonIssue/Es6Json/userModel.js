const _firstname = Symbol("_firstname");
const _lastname = Symbol("_lastname");
export default class UserModel {
  //public property
  set firstname(value) {
    this[_firstname] = value;
  }
  get firstname() {
    return this[_firstname];
  }
  set lastname(value) {
    this[_lastname] = value;
  }
  get lastname() {
    return this[_firstname];
  }

  toJson() {
    // return {
    //   firstname: this.firstname,
    //   lastname: this.lastname
    // };

    var userModelObj = {
      firstname: this.firstname,
      lastname: this.lastname
    };
    return userModelObj;
  }
}
