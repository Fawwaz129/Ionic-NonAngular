const ReasonInput = document.querySelector("#input-reason");
const AmountInput = document.querySelector("#input-amount");
const BtnClose = document.querySelector("#btn-cancel");
const BtnConfirm = document.querySelector("#btn-confirm");
const expensesList = document.querySelector("#expenses-list");

BtnConfirm.addEventListener("click", () => {
  const enteredReason = ReasonInput.value;
  const enteredAmount = AmountInput.value;

  if (
    enteredReason.trim().length <= 0 ||
    enteredAmount <= 0 ||
    enteredAmount.trim().length <= 0
  ) {
    return;
  }
  const newItem = document.createElement("ion-item");
  newItem.textContent = enteredReason + ": $" + enteredAmount;
  expensesList.appendChild(newItem);
});
BtnClose.addEventListener("click", () => {
  console.log("it works");
});
