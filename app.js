
const ReasonInput = document.querySelector('#input-reason');
const AmountInput = document.querySelector('#input-amount');
const BtnClose = document.querySelector('#btn-cancel');
const BtnConfirm = document.querySelector('#btn-confirm');
const expensesList = document.querySelector('#expenses-list');
const totalExpensesOutput = document.querySelector('#total-expenses');
const alertCtrl = document.querySelector('ion-alert-controller');

let totalExpenses = 0;
const clear = () => {
    ReasonInput.value = '';
    AmountInput.value = '';
};

BtnConfirm.addEventListener('click', async () => {
    const enteredReason = ReasonInput.value;
    const enteredAmount = AmountInput.value;

    if (
      enteredReason.trim().length <= 0 ||
      enteredAmount <= 0 ||
      enteredAmount.trim().length <= 0
    ) {
      alert('Tabel harus diisi')
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
