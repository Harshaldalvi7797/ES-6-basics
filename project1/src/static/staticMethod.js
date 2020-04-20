const _jsonValue = Symbol("jsonValue");
//const jsonValue = Symbol("jsonValue");
export default class staticMehodDemo {
  //static method
  static set bindJsonValue(value) {
    this[_jsonValue] = value;
  }
  static get bindJsonValue() {
    return this[_jsonValue];
  }
}
