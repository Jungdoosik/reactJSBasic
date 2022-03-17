console.log("Math.PI", Math.PI);
console.log("Math.random()", Math.random() * 20);
let a = Math.random() * 50;
console.log("Math.floor(3.9)", Math.floor(a));

var MyMath = {
  PI: Math.PI,
  random: function () {
    return Math.random();
  },
  floor: function (val) {
    return Math.floor(val);
  }
}

console.log(MyMath.PI);
console.log(MyMath.random());
console.log(MyMath.floor(4.1));