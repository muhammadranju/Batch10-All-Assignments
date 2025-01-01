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

function sendNotification(email) {
  const splitText = email.split("@");
  const name = splitText[0];
  const domain = splitText[1];
  if (!email.includes("@")) {
    return "Invalid Email";
  }

  if (!name || !domain) {
    return "Invalid Email";
  }
  const message = `${name} sent you an email from ${domain}`;
  return message;
}

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

function waitingTime(waitingTimes, serialNumber) {
  if (!Array.isArray(waitingTimes) || typeof serialNumber !== "number") {
    return "Invalid Input";
  }
  let totalTime = 0;
  for (let time of waitingTimes) {
    totalTime += time;
  }
  const timeAvg = Math.round(totalTime / waitingTimes.length);
  const stillWaiting = serialNumber - 1;
  const sinceWaiting = stillWaiting - waitingTimes.length;

  if (sinceWaiting <= 0) {
    return 0;
  }
  const waitingTimeAre = timeAvg * sinceWaiting;
  return waitingTimeAre;
}
