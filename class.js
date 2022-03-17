class Person {
  constructor(name, first, second) {
    this.name = name;
    this.first = first;
    this.second = second;
    console.log('constructor');

  }
}

console.log('==================');
var kim = new Person('kim', 10, 20);
console.log(kim);




/*
kim.sum = function () {
  return 'kim : ' + (this.first + this.second + this.five);
}
var lee = new Person(10, 10);

console.log(kim.sum(), kim.name1, kim.five);
console.log(lee.sum(), lee.name2);
*/