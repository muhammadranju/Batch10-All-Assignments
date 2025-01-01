function calculateFinalScore(obj) {
  if (typeof obj !== "object" || Array.isArray(obj)) {
    return "Invalid Input";
  }

  if (obj.testScore > 50 || obj.schoolGrade > 30) {
    return "Invalid Input";
  }

  let calculateScore = obj.testScore + obj.schoolGrade;

  if (obj.isFFamily) {
    calculateScore += 20;
  }
  return calculateScore >= 80 ? true : false;
}
const result = calculateFinalScore({
  name: "Rajib",
  testScore: 15,
  schoolGrade: 25,
  isFFamily: true,
});
console.log(result);
