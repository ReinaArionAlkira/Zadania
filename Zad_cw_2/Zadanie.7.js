
const readlineSync = require('readline-sync');

var x = readlineSync.questionInt();
var y = readlineSync.questionInt();
var width = readlineSync.questionInt();
var hight = readlineSync.questionInt();
var char = readlineSync.keyIn();
var lineOfMarks = "";
var blindLine = "";

for (var j=0; j<y; j++) console.log(" ")
for(var s=0; s<x; s++) blindLine += " ";

for (var i = 0; i < hight; i++) {
  lineOfMarks = "";
  for (var j = 0; j < width; j++) {
    lineOfMarks += char;
    }

  console.log(blindLine + lineOfMarks);
}
