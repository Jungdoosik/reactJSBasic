var memberArray = ['egoing', 'graphittie', 'leezche'];
console.group("array start");
var i = 0;

while (i < memberArray.length) {
  console.log(memberArray[i]);
  i++;
}
console.groupEnd("array end");

var memberObject = {
  menager: 'egoing',
  developer: 'graphittie',
  designer: 'leezche'
}
/*
console.group("array start");
console.groupEnd("array end");
*/

console.group("array start");
for (let name in memberObject) {
  console.log(name, memberObject[name]);
}
console.groupEnd("array end");