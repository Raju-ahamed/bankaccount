document.getElementById('button-sunmit').addEventListener('click',function(){
    // console.log('get it')

    //step 2 get the email address
const emailFaild = document.getElementById('user-email')
const email =emailFaild.value
// console.log(email)

const passWordFild = document.getElementById('passord-fild');
const password = passWordFild.value
// console.log(email,password)
if(email === 'rajujoy@gmail.com'&& password == 'raju.com'){
    
        location.href = 'bank.html';
    
}
else{
    alert('maderchood')
}
})