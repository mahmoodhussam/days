let currentYear = new Date().getFullYear();
let age = document.getElementById('year');
let value = 0 ; 
let submit = document.getElementById('submit');
let result = document.getElementById('result');
let days = 0;
function setYear(e){
    e.preventDefault();
    if(days !== ""){
        result.innerText = days;
    }
    
}

submit.addEventListener( 'click', setYear );

age.addEventListener('keyup',function(e){
    console.log(e.target.value);
    days = (currentYear - e.target.value) *365;
});