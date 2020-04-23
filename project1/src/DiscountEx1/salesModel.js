const _customerType = Symbol("_customerType");
const _amount = Symbol("_amount");
export default class salesModel {
  set customerType(value) {
    this[_customerType] = value;
  }
  get customerType() {
    return this[_customerType];
  }
  set amount(value) {
    this[_amount] = value;
  }
  get amount() {
    return this[_amount];
  }
}
salesModel.customerType = undefined;
