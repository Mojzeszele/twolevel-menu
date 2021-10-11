
const slider = () => {

    const burger = document.querySelector(".nav__burger")
    const slideBar = document.querySelector(".nav__container")
    const overlay = document.querySelector('.overlay')




    burger.addEventListener('click', ()=> {
        slideBar.classList.toggle('nav-active');
        overlay.classList.toggle('overlay-active')
    });

}

slider()

