function donateHistoryShow(
  donateHistoryAmount,
  donateHistoryTitle,
  donateHistoryDate
) {
  return `
    <div class="w-full border rounded-xl">
        <div class="card-body">
            <h2 class="text-lg">
                <span id="donateHistoryAmount">${donateHistoryAmount}</span>
                  Taka is Donated for
                  <span id="donateHistoryTitle">${donateHistoryTitle.innerText}</span>
            </h2>
            <p class="p-4 bg-slate-100 rounded-xl">Date:
                <span id="donateHistoryDate">${donateHistoryDate}</span>
            </p>
        </div>
    </div>`;
}
function showDate() {
  return new Date().toLocaleString();
}
