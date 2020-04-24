function arrayReturnDemo() {
  let value1 = 10;
  let value2 = 20;
  let arrayObj = new Array();
  arrayObj.push(value1);
  arrayObj.push(value2);

  return arrayObj;
}
let arrayResultDemoObj = arrayReturnDemo();
let [value1, value2] = arrayResultDemoObj;
console.log(value1);
console.log(value2);

function objectReturnDemo() {
  let value3 = 30;
  let value4 = 40;
  let valueObj = {
    value3: value3,
    value4: value4
  };
  return valueObj;
}
let objectResultDemo = objectReturnDemo();
console.log(objectResultDemo.value3);
console.log(objectResultDemo.value4);
let { value3, value4 } = objectResultDemo;
console.log(value3);
console.log(value4);

function* generatorsDemo() {
  let value6 = 10;
  let value7 = 20;
  yield value6;
  yield value7;
  return 100;
}
let generatorsResultDemo = generatorsDemo();
let numValue6 = generatorsResultDemo.next();
console.log(numValue6.value);
let numValue7 = generatorsResultDemo.next();
console.log(numValue7.value);
let numValue8 = generatorsResultDemo.next();
console.log(numValue8.value);
let numValue9 = generatorsResultDemo.next();
console.log(numValue9.value);
