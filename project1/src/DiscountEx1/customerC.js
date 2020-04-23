import discount from "./discount";
export default class customerC extends discount {
  //override
  async discountCalculation(numAmount) {
    try {
      return await new Promise(resolve => {
        (numAmount * 30) / 100;
      });
    } catch (ex) {
      throw ex;
    }
  }
}
