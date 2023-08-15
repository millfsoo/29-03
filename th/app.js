var tagsList = [
  "li",
  "div",
  "li",
  "p",
  "h1",
  "p",
  "h1",
  "div",
  "div",
  "li",
  "h1",
  "p",
  "h1",
  "ol",
  "br",
];
var tagCounts = {};
for (var i = 0; i < tagsList.length; i++) {
  var tag = tagsList[i];
  if (tagCounts[tag]) {
    tagCounts[tag]++;
  } else {
    tagCounts[tag] = 1;
  }
}
console.log(tagCounts);
