import discount from "./discount";
import customerA from "./customerA";
import customerB from "./customerB";
import customerC from "./customerC";
import customerD from "./customerD";

export default class salesContext {

    static async discountCalculation(salesModel) {
        let discountObj = null;
        let discountPrice = undefined;

        try {

            return await new Promise(async (resolve) => {

                // Create an instance of discount Parent Obj
                discountObj = new discount(); // Parent

                if (salesModel.customerType == "A") {
                    discountObj = new customerA(); // Polymorphism
                }
                else if (salesModel.customerType == "B") {
                    discountObj = new customerB();
                }
                else if (salesModel.customerType == "C") {
                    discountObj = new customerC();
                }
                else if (salesModel.customerType == "D") {
                    discountObj = new customerD();
                }

                discountPrice = await discountObj.discountCalculation(salesModel.amount);

                return resolve(discountPrice);
            });


        }
        catch (ex) {
            throw ex;
        }


    }

}