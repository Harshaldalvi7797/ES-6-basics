const _firstname = Symbol("_firstname");
const _lastname = Symbol("_lastname");
export default class UserModel {
  //public property
  set firstname(value) {
    this[_firstname] = value;
  }
  get firstname1() {
    return this[_firstname];
  }
}
