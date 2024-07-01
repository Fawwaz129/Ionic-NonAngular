const ReasonInput = document.querySelector('#input-reason');
const AmountInput = document.querySelector('#input-amount');
const BtnClose = document.querySelector('#btn-cancel');
const BtnConfirm = document.querySelector('#btn-confirm');
const expensesList = document.querySelector('#expenses-list');
const totalExpensesOutput = document.querySelector('#total-expenses');
let totalExpenses = 0;
const clear = () => {
  ReasonInput = '';
  AmountInput = '';
};

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
  const newItem = document.createElement('ion-item');
  newItem.textContent = enteredReason + ": $" + enteredAmount;
  expensesList.appendChild(newItem);

  totalExpenses += +enteredAmount;
  totalExpensesOutput.textContent = totalExpenses;
  clear();
});
BtnClose.addEventListener('click', clear);
