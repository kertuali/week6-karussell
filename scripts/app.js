const slides = document.getElementsByClassName('karussell_item');
const slidesTotal = slides.length;
const nextButton = document.querySelector('#karussell_button-next');
const prevButton = document.querySelector('#karussell_button-prev');

let slidePosition = 0;

nextButton.addEventListener('click', () => {
    console.log('click from next');

    for(let slide of slides){
        slide.classList.remove('karussell_item-visible');
    }

    if(slidePosition === slidesTotal-1) {
        slidePosition = 0;
    } else {
        slidePosition++;
    }

    slides[slidePosition].classList.add('karussell_item-visible');

});

prevButton.addEventListener('click', () => {
    console.log('click from prev');

    for(let slide of slides){
        slide.classList.remove('karussell_item-visible');
    }

    if(slidePosition === 0) {
        slidePosition = slidesTotal-1;
    } else {
        slidePosition--;
    }

    slides[slidePosition].classList.add('karussell_item-visible');
});

