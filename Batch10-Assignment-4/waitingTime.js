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
console.log(waitingTime([3, 5, 7, 11, 6], 10));
console.log(waitingTime([13, 2], 6));
console.log(waitingTime([13, 2, 6, 7, 10], 6));
console.log(waitingTime([6], 4));
console.log(waitingTime(7, 10));
console.log(waitingTime("[6,2]", 9));
console.log(waitingTime([7, 8, 3, 4, 5], "9"));
