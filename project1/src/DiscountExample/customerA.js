import discount from "./discount";

export default class customerA extends discount {


    //@Override
    async discountCalculation(numAmount) {

        try {
            return await new Promise((resolve) => {

                return resolve(numAmount * 10 / 100);

            });
        }
        catch (ex) {
            throw ex;
        }

    }

}