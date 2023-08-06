// Maksym Zinchuk
var min = function (list) {
  list.sort(function (a, b) {
    return a - b;
  });
  return list[0];
};

var max = function (list) {
  list.sort(function (a, b) {
    return b - a;
  });
  return list[0];
};
//Eremin Slava
const min = list => list.reduce((acc, curr) => (acc < curr ? acc : curr), list[0]);
const max = list => list.reduce((acc, curr) => (acc > curr ? acc : curr), list[0]);

//Duhnovskiy Oleksii
let min = function(list){
    return list.shift(list.sort((a, b) => a - b));
}

let max = function(list){
    return list.pop(list.sort((a, b) => a - b))
}
