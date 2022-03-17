function Person(name, first, second, third) {
  this.name = name,
    this.first = first,
    this.second = second
}

// Person.prototype = {
//   name1: "jeong",
//   name2: "park",
//   five: 500,
//   sum: function () {
//     return 'ALL : ' + (this.first + this.second + this.five);
//   }
// }

// Person.prototype.name1 = "jeong";
// Person.prototype.name2 = "park";
// Person.prototype.five = 1000;
Person.prototype.sum = function () {
  return 'prototype : ' + (this.first + this.second);
}
var kim = new Person('kim', 10, 20);
kim.sum = function () {
  return 'kim : ' + (this.first + this.second);
}
var lee = new Person('lee', 10, 10);

console.log(kim.sum());
console.log(lee.sum());

//자바스크립트는  kim이라고 하는 객체에 sum() 이라는 메소드를 호출할때
// 가장먼저 객체 그 자신이 sum()이라는 메소드를 가지고 있는지 찾는다.(있음)

//lee라는 객체는 sum()이라는 메소드를 정의한적이 없음
//그렇기떄문에 객체의 생성자인 Person()의 prototype에 sum이라고
//하는 메소드가 정의되어있는지 찾음
//그것이 찾아지면 그아이를 실행

//프로토타입이란 어떤의미인가
//프로토타입을 사용하지 않고 생성자 안에서 메소드나 속성을 정의하게 되면 어떤 비효율이 생기나
//프로토타입을 통해 어떻게 극복했는가?