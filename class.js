class Person {
  constructor(name, first, second) {
    this.name = name;
    this.first = first;
    this.second = second;
  }
  sum() {
    return this.first + this.second;
  }
}

class PersonPlus extends Person {//상속(extends)
  constructor(name, first, second, thrid) {
    super(name, first, second);
    this.thrid = thrid;
  }
  sum() {
    return this.name + ' score : ' + (super.sum() + this.thrid);
  }
  avg() {
    return (this.first + this.second + this.thrid) / 3;
  }
}

var kim = new PersonPlus('kim', 10, 20, 30);
// kim.sum = function () {
//   return this.first + this.second;
// }
console.log(kim.sum(), kim.avg());




/*
kim.sum = function () {
  return 'kim : ' + (this.first + this.second + this.five);
}
var lee = new Person(10, 10);

console.log(kim.sum(), kim.name1, kim.five);
console.log(lee.sum(), lee.name2);
*/