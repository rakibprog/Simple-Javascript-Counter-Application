
//initial state 
let count = 0; 
//select increment button event listener 
document.getElementById('increment-click').addEventListener('click',function(){
    count --;
   document.getElementById('counter').innerText = count;
});

// select decrement button event listener 

document.getElementById('decrement-click').addEventListener('click',function(){
    count ++;
    document.getElementById('counter').innerText = count;
});



