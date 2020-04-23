import salesModel from "./salesModel";
import salesContext from "./salesContext";

const _SalesModel = Symbol("_salesModel");
export default class salesMain {
  constructor(SalesModel) {
    this[_SalesModel] = salesModel;
  }
  async onSubmit() {
    let discountPrice = undefined;
    try {
      return await new Promise(async resolve => {
        discountPrice = await salesContext.dicountCalculation(
          this[_SalesModel]
        );
        console.log(discountPrice);
      });
    } catch (ex) {
      console.log(ex.message);
      console.log(ex.stack);
    }
  }
}

//middleware for ui

export function onClickEvent() {
  let salesMainObj = null;
  let salesModelObj = null;
  try {
    salesModelObj = new salesModel();
    salesModelObj.customerType = "B";
    salesModelObj.amount = "1000";
    console.log(salesModelObj.amount);

    salesMainObj = new salesMain(salesModelObj);
    console.log(salesMainObj);
    salesMainObj.onSubmit().then(resolve => console.log(resolve));
  } catch (ex) {
    console.log(ex.message);
  }
}
