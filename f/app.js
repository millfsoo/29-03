var arrNumbers = [123, 234, 345, 456, 567, 67, 55, 23, 28, 50];
var newArray = [];
for (var i = 0; i < arrNumbers.length; i++) {
  var numbersString = arrNumbers[i].toString();
  if (numbersString[0] === "2" || numbersString[0] === "5") {
    newArray.push(numbersString);
  }
}
console.log(newArray);
