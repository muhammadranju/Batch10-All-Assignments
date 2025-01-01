function calculateTax(income, expenses) {
  if (income < 0 || expenses < 0) {
    return "Invalid Input";
  }
  if (income < expenses) {
    return "Invalid Input";
  }
  const totalProfit = income - expenses;
  const totalTax = totalProfit * 0.2;
  return totalTax;
}
const result = calculateTax(6000, 600);
console.log(result);
