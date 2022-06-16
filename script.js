const oneBlock = document.querySelector('.one-block');
const twoBlock = document.querySelector('.two-block');

oneBlock.addEventListener('click', (e) => changeColor (e, 'green'));
twoBlock.addEventListener('click', (e) => changeColor (e, 'blue'));


function changeColor (e, color) {
   switch (color) {
       case 'green':
           oneBlock.style.backgroundColor = 'blue';
           twoBlock.style.backgroundColor = 'green';
           break
           case 'blue':
            oneBlock.style.backgroundColor = 'green';
            twoBlock.style.backgroundColor = 'blue';
            break
            default: ''

   }
}
















// if (oneBlock.style.backgroundColor == 'green') {
//     oneBlock.style.backgroundColor = 'blue';
//     twoBlock.style.backgroundColor = 'green';
// } else {
//     oneBlock.style.backgroundColor = 'green';
//     twoBlock.style.backgroundColor = 'blue';

// }

// if (twoBlock.style.backgroundColor == 'blue') {
//     oneBlock.style.backgroundColor = 'blue';
//     twoBlock.style.backgroundColor = 'green';
//  } else {
//     oneBlock.style.backgroundColor = 'green';
//     twoBlock.style.backgroundColor = 'blue';
//  }













