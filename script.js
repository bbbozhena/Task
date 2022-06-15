const oneBlock = document.querySelector('.one-block');
const twoBlock = document.querySelector('.two-block');



 oneBlock.addEventListener('click', (e) => {

    if (oneBlock.style.backgroundColor == 'green') {
        oneBlock.style.backgroundColor = 'blue';
        twoBlock.style.backgroundColor = 'green';
    } else {
        oneBlock.style.backgroundColor = 'green';
        twoBlock.style.backgroundColor = 'blue';
    
    }
    
    
 });


 twoBlock.addEventListener('click', (e) => {
     if (twoBlock.style.backgroundColor == 'blue') {
        oneBlock.style.backgroundColor = 'blue';
        twoBlock.style.backgroundColor = 'green';
     } else {
        oneBlock.style.backgroundColor = 'green';
        twoBlock.style.backgroundColor = 'blue';
     }
    
    
 });







