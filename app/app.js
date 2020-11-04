
let header = document.querySelector('.navigation__list').getBoundingClientRect().height;

console.log(header)
let nav = document.querySelector('.navigation');
let burger = document.querySelector('.burger-box');
let child = document.querySelector('.burger')

burger.addEventListener('click', function(){
    navToggle()

})

function navToggle(){
    let checkClass = nav.classList.contains('clip')
    let checkBurger = child.classList.contains('rotate')
    if (!checkClass && !checkBurger){
        nav.classList.add('clip')
        child.classList.add('rotate')
    }else{
        nav.classList.remove('clip')
        child.classList.remove('rotate')

    }
    // nav.classList.contains('clip')?? nav.classList.remove('clip')
    


}



