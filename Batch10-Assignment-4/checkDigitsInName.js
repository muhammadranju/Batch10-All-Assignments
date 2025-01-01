function checkDigitsInName(name) {
  if (typeof name !== "string") {
    return "Invalid Input";
  }
  const isNumberExist = name.split("");

  for (let value of isNumberExist) {
    if (!isNaN(parseInt(value)) && value !== " ") {
      return true;
    }
  }
  return false;
}

const result = checkDigitsInName(["Raj"]);
console.log(result);
