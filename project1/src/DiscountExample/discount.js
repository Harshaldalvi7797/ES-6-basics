export default class discount {

    constructor() {
        console.log("Parent Discount");
    }

    // Incomplete Method
    // @Virtual
    discountCalculation(numAmount) {
        throw new Error("Implement Discount Calculation method in Child Class");
    }

}