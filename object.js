var memberArray = ['egoing', 'graphittie', 'leezhce'];

console.log("memberArray[2]", memberArray[2]);

var memberObject = {
  menager: 'egoing',
  developer: 'graphittie',
  designer: 'leezhce'
}

memberObject.designer = 'leezche'

console.log("memberObject.designer", memberObject.designer);
console.log("memberObject['designer']", memberObject['designer']);

delete memberObject.menager;
console.log(memberObject.menager);

