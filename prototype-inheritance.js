var superObj = { superVal: 'super' }
//var subObj = { subVal: 'sub' }
//subObj.__proto__ = superObj; 인정하지 않는 사용법

var subObj = Object.create(superObj);
subObj.subVal = 'sub';

console.log('subObj.subVal =>', subObj.subVal);
console.log('subObj.superVal =>', subObj.superVal);

subObj.superVal = 'sub';
console.log('superObj.superVal =>', superObj.superVal);
console.log('subObj.superVal =>', subObj.superVal);

var kim = {
  name: 'kim',
  first: 10,
  second: 20,
  sum: function () {
    return this.first + this.second;
  }
}
var lee = Object.create(kim);
lee.name = 'lee';
lee.first = 20;
lee.second = 50;
lee.avg = function () {
  return (this.first + this.second) / 2;
}




console.log(kim.sum());
console.log(lee.sum());
console.log(lee.avg());