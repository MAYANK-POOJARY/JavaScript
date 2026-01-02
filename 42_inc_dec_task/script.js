let h2 = document.querySelector('#count');
let inc = document.querySelector('#inc');
let dec = document.querySelector('#dec');
let counter = 0;

inc.addEventListener('click',function(){
    counter++;
    h2.innerHTML = `counter value : ${counter}`
})

dec.addEventListener('click',function(){
    if(counter>0){
        counter--;
        h2.innerHTML = `counter value : ${counter}`;
    }
})