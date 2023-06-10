document.getElementById('btn-deposite').addEventListener('click',function(){
    const depositeMoney = document.getElementById('deposite-field')
    const newDepositeAmountString = depositeMoney.value;
    const newDepositeAmount = parseFloat(newDepositeAmountString);
    
    const depositeTotalElement = document.getElementById('deposite-total');
    const previousDepositeTotalString=depositeTotalElement.innerText;
    // console.log(depositeTotal
    const previousDepositeTotal = parseFloat(previousDepositeTotalString);
    const currentDepositeTotalString = newDepositeAmount + previousDepositeTotal;
    const currentDepositeTotal = parseFloat(currentDepositeTotalString)
    depositeTotalElement.innerText = currentDepositeTotal;


    const totalAmount = document.getElementById('total-balance');
    const totalBalanceString = totalAmount.innerText;
    const totalBalance = parseFloat(totalBalanceString);
    const totalBankAmountString = totalBalance + newDepositeAmount;
    const totalBankAmount = parseFloat(totalBankAmountString);
    totalAmount.innerText = totalBankAmount;

    // newDepositeAmount
    depositeMoney.value = '';
    
})