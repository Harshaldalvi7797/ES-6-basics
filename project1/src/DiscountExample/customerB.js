import discount from "./discount";

export default class customerB extends discount {

    //@override
    async discountCalculation(numAmount) {

        try {
            return await new Promise((resolve) => {
                return resolve(numAmount * 50 / 100);
            })
        }
        catch (ex) {
            throw ex;
        }


    }
}