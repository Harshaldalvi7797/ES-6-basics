import salesContext from "./salesContext";
import salesModel from "./salesModel";

const _salesModel = Symbol("_salesModel");
export default class salesMain {

    constructor(salesModel) {
        this[_salesModel] = salesModel; // Encapsulation
    }

    async onSubmit() {
        let discountPrice = undefined;
        try {

            return await new Promise(async (resolve) => {

                discountPrice = await salesContext.discountCalculation(this[_salesModel]);
                console.log(discountPrice);
            });

        }
        catch (ex) {
            console.log(ex.message);
            console.log(ex.stack);
        }
    }

}


// Middleware for the UI
export function onSubmitButtonClickEvent() {
    let salesMainObj = null;
    let salesModelObj = null;
    try {

        // Create an instance of salesModel;
        salesModelObj = new salesModel();
        salesModelObj.customerType = "B";
        salesModelObj.amount = 1000;

        // Create an instance of sales Main
        salesMainObj = new salesMain(salesModelObj);
        salesMainObj
            .onSubmit()
            .then((resolve) => console.log(resolve));


    }
    catch (ex) {
        console.log(ex.message);
        console.log(ex.stack);
    }
}