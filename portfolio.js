let image_space = document.querySelectorAll('.image-space');
let middle_space_button = document.querySelectorAll('button');
console.log(middle_space_button);
let middle_space = document.querySelector('.middle-space');
let middle_space_1 = document.querySelector('.middle-space-1'),
    middle_space_2 = document.querySelector('.middle-space-2'),
    middle_space_3 = document.querySelector('.middle-space-3'),
    middle_space_4 = document.querySelector('.middle-space-4');

let left_space = document.querySelectorAll('.left-space');

middle_space_button[0].addEventListener('click',function(){
    middle_space_1.style.visibility = 'hidden';
    middle_space_2.style.visibility = 'hidden';
    middle_space.style.visibility = 'hidden';

});
middle_space_button[1].addEventListener('click',function(){
    middle_space_2.style.visibility = 'hidden';
    middle_space.style.visibility = 'hidden';

});
middle_space_button[2].addEventListener('click',function(){
    middle_space_3.style.visibility = 'hidden';
    middle_space.style.visibility = 'hidden';

});
middle_space_button[3].addEventListener('click',function(){
    middle_space_4.style.visibility = 'hidden';
    middle_space.style.visibility = 'hidden';

});
image_space[0].addEventListener('click',function(){
    middle_space_1.style.visibility = 'visible';
    middle_space_2.style.visibility = 'hidden';
    middle_space_3.style.visibility = 'hidden';
    middle_space_4.style.visibility = 'hidden';

});

image_space[1].addEventListener('click',function(){
    middle_space_1.style.visibility = 'hidden';
    middle_space_2.style.visibility = 'visible';
    middle_space_3.style.visibility = 'hidden';
    middle_space_4.style.visibility = 'hidden';

});
image_space[2].addEventListener('click',function(){
    middle_space_1.style.visibility = 'hidden';
    middle_space_2.style.visibility = 'hidden';
    middle_space_3.style.visibility = 'visible';
    middle_space_4.style.visibility = 'hidden';
});
image_space[3].addEventListener('click',function(){
    middle_space_1.style.visibility = 'hidden';
    middle_space_2.style.visibility = 'hidden';
    middle_space_3.style.visibility = 'hidden';
    middle_space_4.style.visibility = 'visible';

});
// let left1 = document.querySelector('#left-1');
// let left2 = document.querySelector('#left-2');

// image_space[0].addEventListener('click',function(){
//     left_space[0].style.visibility = 'hidden';
//     left_space[1].style.visibility = 'visible';

// })

// btn[1].addEventListener('click',function(){
//     left1.style.visibility = 'hidden';

//     left2.style.visibility = 'visible';
// })

let menu_onclick = document.querySelectorAll('.top>ul>li>a');

menu_onclick[0].addEventListener('click',function(){
    this.style.backgroundColor = 'rgb(51, 51, 51)';
    this.style.color = 'white';

    menu_onclick[1].style.backgroundColor = '';
    menu_onclick[1].style.color = '';
})

menu_onclick[1].addEventListener('click',function(){
    this.style.backgroundColor = 'rgb(51, 51, 51)';
    this.style.color = 'white';
    menu_onclick[0].style.backgroundColor = '';
    menu_onclick[0].style.color = '';
    
})
document.addEventListener('DOMContentLoaded',function(){
    new TypeIt('#main-title')
    .pause(1000)
    .go();
})


