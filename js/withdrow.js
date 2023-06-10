document.getElementById('btn-withdraw').addEventListener('click',function(){
    const withdrawField = document.getElementById('withdraw-field');
    // console.log(withdrawField);
    const withdrawFieldString = withdrawField.value;
    const newWithdrawAmount = parseFloat(withdrawFieldString);
    

    const totalWithdraw = document.getElementById('total-withdraw');
    const totalWithdrawString = totalWithdraw.innerText;
    const withdrawAmount = parseFloat(totalWithdrawString);
    const totalWithdrawAmountString = newWithdrawAmount + withdrawAmount;
    const totalWithdrawAmount = parseFloat(totalWithdrawAmountString);
    totalWithdraw.innerText = totalWithdrawAmount;


    const totalAmount = document.getElementById('total-balance');
    const totalAmountString = totalAmount.innerText;
    const mainAccountBalance = parseFloat(totalAmountString);
    const mainBalanceString = mainAccountBalance - totalWithdrawAmount;
    const mainBalance = parseFloat(mainBalanceString);
    totalAmount.innerText = mainBalance; 


    withdrawField.value = '';
})