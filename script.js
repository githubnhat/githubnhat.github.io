var post =
"Apart from classes in school, I also participate in extra-curricular activities, for example," +
" going camping, workshops, orientation days. Especially, I join a volleyball club. To play volleyball help" +
" me maintain health and take my mind off my study.";


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
var listWordAfterRandom = new Array();
var listWord = input.split(" ");

listWord.forEach((element) => {
  var listChar = new Array();

  for (let index = 0; index < element.length; index++) {
    listChar.push(element.charAt(index));
  }
  shuffle(listChar);
  var temp = "";
  var dot = "";
  listChar.forEach((c) => {
    if (c != "." && c != "!" && c != "?" && c != ",") {
      temp += c;
    } else {
      dot = c;
    }
  });
  if (dot != " ") {
    temp += dot;
  }

  listWordAfterRandom.push(temp);
});
listWordAfterRandom.forEach((word) => {
  result += word + " ";
});
document.querySelector('.output').value = result;
}