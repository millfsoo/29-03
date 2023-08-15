function getAllTypes(type) {
  return typeof type;
}
console.log(getAllTypes(true));
console.log(getAllTypes("My name is Kamila"));
console.log(getAllTypes(26));
console.log(getAllTypes({ color: "purple" }));
