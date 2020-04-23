import discount from "./discount";
import salesModel from "./salesModel";
import customerA from "./customerA";
import customerB from "./customerB";
import customerC from "./customerC";
export default class salesContext {
  static async dicountCalculation(SalesModel) {
    let dicountObj = null;
    let discountPrice = null;
    try {
      return await new Promise(async resolve => {
        dicountObj = new discount();
        if (salesModel.customerType == "A") {
          dicountObj = new customerA(); //poly
        } else if (salesModel.customerType == "B") {
          dicountObj = new customerB();
        } else if (salesModel.customerType == "C") {
          dicountObj = new customerC();
        }

        discountPrice = await dicountObj.discountCalculation(SalesModel.amount);
        return resolve(discountPrice);
      });
    } catch (ex) {
      throw ex;
    }
  }
}
