import discount from "./discount";

export default class customerD extends discount {

    //@override
    async discountCalculation(numAmount) {

        try {
            return await new Promise((resolve) => {
                return resolve(numAmount * 60 / 100);
            })
        }
        catch (ex) {
            throw ex;
        }


    }
}