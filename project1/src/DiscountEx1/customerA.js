export default class customerA {
  //override

  async discountCalculation(numAmount) {
    try {
      return await new Promise(resolve => {
        (numAmount * 10) / 100;
      });
    } catch (ex) {
      throw ex;
    }
  }
}
