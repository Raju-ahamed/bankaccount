document.getElementById('btn-withdraw').addEventListener('click',function(){
    const withdrawField = document.getElementById('withdraw-field');
    // console.log(withdrawField);
    const withdrawFieldString = withdrawField.value;
    const newWithdrawAmount = parseFloat(withdrawFieldString);
    console.log(newWithdrawAmount);

    withdrawField.value = '';
    if(isNaN(newWithdrawAmount)){
        alert('please provite a vaild number')
        return;
    }
    const totalWithdraw = document.getElementById('total-withdraw');
    const totalWithdrawString = totalWithdraw.innerText;
    const withdrawAmount = parseFloat(totalWithdrawString);

    

    
    const totalWithdrawAmountString = newWithdrawAmount + withdrawAmount;
    


    const totalAmount = document.getElementById('total-balance');
    const totalAmountString = totalAmount.innerText;
    const mainAccountBalance = parseFloat(totalAmountString);

    
    if(newWithdrawAmount > mainAccountBalance){
        alert('ato taka nai');
        return;
    }
    
    const totalWithdrawAmount = parseFloat(totalWithdrawAmountString);
    totalWithdraw.innerText = totalWithdrawAmount;

    const mainBalanceString = mainAccountBalance - totalWithdrawAmount;
    const mainBalance = parseFloat(mainBalanceString)
    totalAmount.innerText = mainBalance; 


   
})