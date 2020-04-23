//destructor
let arryObj = [1, 2];

for (let array of arryObj) {
  console.log(array);
}
let [firstValue, secondValue, thirdvalue] = arryObj;
console.log(firstValue);
console.log(secondValue);
console.log(thirdvalue);

let userModel = [
  {
    firstname: "harshal",
    lastname: "dalvi"
  },
  {
    firstname: "saylee",
    lastname: "mane"
  }
];

for (let userModelObj of userModel) {
  console.log(userModelObj);
}
let [userModel1, userModel2, userModel3] = userModel;
console.log(`${userModel1.firstname} ${userModel1.lastname}`);
