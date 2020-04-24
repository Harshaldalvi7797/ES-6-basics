//set
let setObj = new Set();
setObj.add(1);
setObj.add(2);
setObj.add(2);
setObj.add("Harshal");
setObj.forEach(element => {
  console.log(element);
});

let numArray = [1, 2, 2, 1, 3, 4, 4, 5, 5, 6];
setObj = new Set();
numArray.forEach(element => {
  setObj.add(element);
});
setObj.forEach(element => {
  console.log(element);
});
console.log(setObj.has(2));
console.log(setObj.delete(2));
console.log(setObj);

let weaksetObj = new WeakSet();
weaksetObj.add(setObj);
console.log(weaksetObj);

//map
let mapObj = new Map();
mapObj.set(1, "harshal");
mapObj.set(2, "saylee");
mapObj.set("hello", "saylee");
mapObj.set(4, "Minal");
mapObj.set(4, "h");
var name = mapObj.get(4);
console.log(name);
mapObj.forEach(element => console.log(element));
