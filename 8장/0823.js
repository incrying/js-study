var string = "Hello World.";
var search = "l";
var count = 0;

//문자열은 유사 배열이므로 for 문으로 순회할 수 있다.
for (var i = 0; i < string.length; i++) {
  //'l'이 아니면 현 지점에서 실행을 중단하고 반복문의 증감식으로 이동
  if (string[i] !== search) continue;
  count++; //countinue문이 실행되면 이 문은 실행되지 않음
}

console.log(count); //3

const regexp = new RegExp(search, "g");
console.log(string.match(regexp).length); //3

for (var i = 0; i < string.length; i++) {
  //'l'이면 카운트를 증가시킨다.
  if (string[i] === search) count++;
}
