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

//object desctructors

let userModel5Obj = {
  firstname1: "Mayur",
  lastname: "Veer"
};
console.log(userModel5Obj.firstname1);
let { firstname1, lastname1 } = userModel5Obj;
console.log(firstname1);

let userModel6Obj = {
  firstname: "Harshal",
  lastname: "Dalvi",
  communication: {
    email1: "h@gmail.com",
    mno1: "8087737437"
  }
};
let {
  firstname,
  lastname,
  communication: { email1, mno1 }
} = userModel6Obj;
console.log(mno1);
console.log(email1);
console.log(userModel6Obj.communication);

let userModel7Obj = {
  firstname: "Harshal",
  lastname: "Dalvi",
  communication: [
    {
      email: "h@gmail.com",
      mno: "8087737437"
    },
    {
      email: "h1@gmail.com",
      mno: "7039271020"
    }
  ]
};
let {
  communication: [{ email, mno }]
} = userModel7Obj;
console.log(userModel7Obj.communication[0]);
console.log(userModel7Obj.communication[1]);
