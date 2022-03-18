var kim = { name: 'kim', first: 10, second: 20 };
var lee = { name: 'lee', first: 10, second: 10 };
function sum(prefix) {
  return prefix + (this.first + this.second);
}

sum.call(kim, '=>');//=== sum();

console.log(sum.call(kim, ' => ')); //유사 apply call이랑
console.log(sum.call(lee, ' : '));

var kimSum = sum.bind(kim, ' == ');

kimSum.first = 90;
kimSum.second = 50;

var kk = sum.bind(kimSum, ' oo ')
console.log(kimSum())
console.log(kk())
