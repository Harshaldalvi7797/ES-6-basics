import discount from "./discount";
export default class customerB extends discount {
  //override
  async discountCalculation(numAmount) {
    try {
      return await new Promise(resolve => {
        (numAmount * 20) / 100;
      });
    } catch (ex) {
      throw ex;
    }
  }
}
