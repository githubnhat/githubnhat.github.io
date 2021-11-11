
function shuffle(array) {
let currentIndex = array.length,
  randomIndex;

// While there remain elements to shuffle...
while (currentIndex != 0) {
  // Pick a remaining element...
  randomIndex = Math.floor(Math.random() * currentIndex);
  currentIndex--;

  // And swap it with the current element.
  [array[currentIndex], array[randomIndex]] = [
    array[randomIndex],
    array[currentIndex],
  ];
}

return array;
}
function randomString() {
var input = document.querySelector('.input').value;
if (input == " ") {
    alert("Nhập văn bản cần xáo trộn!")
}
console.log(input)
var result = "";
var listLines = input.split(/\r\n|\n/);
listLines.forEach((line) => {
  var listWordLine = new Array();
  var listWords = line.split(/\s/);
  listWords.forEach((element) => {
    var listChar = new Array();
  
    for (let index = 0; index < element.length; index++) {
      listChar.push(element.charAt(index));
    }
    shuffle(listChar);
    var temp = "";
    var listDots = new Array()
    listChar.forEach((c) => {
      if (c != "." && c != "!" && c != "?" && c != "," && c != ":" && c != ";" && c != ")" && c != "(") {
        temp += c;
      } else {
        listDots.push(c);
      }
    });
    listDots.forEach((dot) => {
    if (dot == "(") {
      temp = dot + temp;
      }
    if (dot != " " && dot != "(") {
      temp += dot;
    }
    });
    listWordLine.push(temp);
  });
  let temp1='';
  listWordLine.forEach((word) => {
    temp1 += word + ' ';
  });
  result += temp1 + '\n'
 console.log(result)
});
document.querySelector('.output').value = result;
}
