export default class discount {
  constructor() {
    console.log("parent discount");
  }
  //override

  //incomplete method
  //@virtual
  async discountCalculation(numAmount) {
    throw new Error("Implement discount calculation method"); // for anyone access this method then gives error
  }
}
