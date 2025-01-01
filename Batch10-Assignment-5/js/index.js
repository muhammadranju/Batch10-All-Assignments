// Get Element by ID
function id(id) {
  return document.getElementById(id);
}
// All Cards Section and Donate History Section
const cardContainer = id("cardContainer");
const donateHistory = id("donateHistory");
const errorId = id("errorId");

const errorMessage = {
  validAmount: "Please Enter Valid Amount",
  positiveAmount: "Please Enter Positive Amount",
  insufficientBalance: "Insufficient Balance You Can't Donate",
};

// Donate Buttons
const donateBtn1 = id("donateBtn1");
const donateBtn2 = id("donateBtn2");
const donateBtn3 = id("donateBtn3");
const donateBtn4 = id("donateBtn4");
const donateBtn5 = id("donateBtn5");

// Donate Titles
const donateTitle1 = id("donateTitle1");
const donateTitle2 = id("donateTitle2");
const donateTitle3 = id("donateTitle3");
const donateTitle4 = id("donateTitle4");
const donateTitle5 = id("donateTitle5");

// Balance
const balance = id("balance");

// Donation and History Buttons
const donationButton = id("donationButton");
const historyButton = id("historyButton");

// Donation Button
donationButton.addEventListener("click", function () {
  donateHistory.classList.add("hidden");
  cardContainer.classList.remove("hidden");

  historyButton.classList.remove(
    "bg-primaryColor",
    "hover:bg-primaryHoverColor"
  );
  historyButton.classList.add("btn-outline");

  donationButton.classList.remove("btn-outline");
  donationButton.classList.add("bg-primaryColor", "hover:bg-primaryHoverColor");
});

// History Button
historyButton.addEventListener("click", function () {
  donateHistory.classList.remove("hidden");
  cardContainer.classList.add("hidden");

  donationButton.classList.remove(
    "bg-primaryColor",
    "hover:bg-primaryHoverColor"
  );
  donationButton.classList.add("btn-outline");

  historyButton.classList.remove("btn-outline");
  historyButton.classList.add("bg-primaryColor", "hover:bg-primaryHoverColor");
});

// Add Donate Button 1
donateBtn1.addEventListener("click", function () {
  const inputAmount1 = Number(id("inputAmount1").value);
  const displayDonateAmount1 = Number(id("displayDonateAmount1").innerText);

  if (isNaN(inputAmount1)) {
    errorId.innerText = errorMessage.validAmount;
    return errorModal.showModal();
  }
  if (inputAmount1 <= 0) {
    errorId.innerText = errorMessage.positiveAmount;
    return errorModal.showModal();
  }
  const newBalance = balance.innerText - inputAmount1;
  if (newBalance < 0) {
    errorId.innerText = errorMessage.insufficientBalance;
    return errorModal.showModal();
  }

  id("displayDonateAmount1").innerHTML = displayDonateAmount1 + inputAmount1;
  balance.innerText = newBalance;

  donateHistory.innerHTML += donateHistoryShow(
    inputAmount1,
    donateTitle1,
    showDate()
  );

  successModal.showModal();
  id("inputAmount1").value = "";
});

// Add Donate Button 2
donateBtn2.addEventListener("click", function () {
  const inputAmount2 = Number(id("inputAmount2").value);
  const displayDonateAmount2 = Number(id("displayDonateAmount2").innerText);

  if (isNaN(inputAmount2)) {
    errorId.innerText = errorMessage.validAmount;
    return errorModal.showModal();
  }
  if (inputAmount2 <= 0) {
    errorId.innerText = errorMessage.positiveAmount;
    return errorModal.showModal();
  }
  const newBalance = balance.innerText - inputAmount2;
  if (newBalance < 0) {
    errorId.innerText = errorMessage.insufficientBalance;
    return errorModal.showModal();
  }
  id("displayDonateAmount2").innerHTML = displayDonateAmount2 + inputAmount2;
  balance.innerText = newBalance;

  donateHistory.innerHTML += donateHistoryShow(
    inputAmount2,
    donateTitle2,
    showDate()
  );

  successModal.showModal();
  id("inputAmount2").value = "";
});

// Add Donate Button 3
donateBtn3.addEventListener("click", function () {
  const inputAmount3 = Number(id("inputAmount3").value);
  const displayDonateAmount3 = Number(id("displayDonateAmount3").innerText);

  if (isNaN(inputAmount3)) {
    errorId.innerText = errorMessage.validAmount;
    return errorModal.showModal();
  }
  if (inputAmount3 <= 0) {
    errorId.innerText = errorMessage.positiveAmount;
    return errorModal.showModal();
  }
  const newBalance = balance.innerText - inputAmount3;
  if (newBalance < 0) {
    errorId.innerText = errorMessage.insufficientBalance;
    return errorModal.showModal();
  }
  id("displayDonateAmount3").innerHTML = displayDonateAmount3 + inputAmount3;
  balance.innerText = newBalance;

  donateHistory.innerHTML += donateHistoryShow(
    inputAmount3,
    donateTitle3,
    showDate()
  );

  successModal.showModal();
  id("inputAmount3").value = "";
});

// Add Donate Button 4
donateBtn4.addEventListener("click", function () {
  const inputAmount4 = Number(id("inputAmount4").value);
  const displayDonateAmount4 = Number(id("displayDonateAmount4").innerText);

  if (isNaN(inputAmount4)) {
    errorId.innerText = errorMessage.validAmount;
    return errorModal.showModal();
  }
  if (inputAmount4 <= 0) {
    errorId.innerText = errorMessage.positiveAmount;
    return errorModal.showModal();
  }
  const newBalance = balance.innerText - inputAmount4;
  if (newBalance < 0) {
    errorId.innerText = errorMessage.insufficientBalance;
    return errorModal.showModal();
  }
  id("displayDonateAmount4").innerHTML = displayDonateAmount4 + inputAmount4;
  balance.innerText = newBalance;

  donateHistory.innerHTML += donateHistoryShow(
    inputAmount4,
    donateTitle4,
    showDate()
  );

  successModal.showModal();
  id("inputAmount4").value = "";
});

// Add Donate Button 5
donateBtn5.addEventListener("click", function () {
  const inputAmount5 = Number(id("inputAmount5").value);
  const displayDonateAmount5 = Number(id("displayDonateAmount5").innerText);

  if (isNaN(inputAmount5)) {
    errorId.innerText = errorMessage.validAmount;
    return errorModal.showModal();
  }
  if (inputAmount5 <= 0) {
    errorId.innerText = errorMessage.positiveAmount;
    return errorModal.showModal();
  }
  const newBalance = balance.innerText - inputAmount5;
  if (newBalance < 0) {
    errorId.innerText = errorMessage.insufficientBalance;
    return errorModal.showModal();
  }
  id("displayDonateAmount5").innerHTML = displayDonateAmount5 + inputAmount5;
  balance.innerText = newBalance;

  donateHistory.innerHTML += donateHistoryShow(
    inputAmount5,
    donateTitle5,
    showDate()
  );

  successModal.showModal();
  id("inputAmount5").value = "";
});
