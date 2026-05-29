// ── DOM REFERENCES ──
let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');

let carouselDom        = document.querySelector('.carousel');
let SliderDom          = carouselDom.querySelector('.list');
let thumbnailBorderDom = carouselDom.querySelector('.thumbnail');
let thumbnailItemsDom  = thumbnailBorderDom.querySelectorAll('.item');

// Move first thumbnail to end so order matches slides
thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);

let timeRunning = 3000;

nextDom.addEventListener('click', () => showSlider('next'));
prevDom.addEventListener('click', () => showSlider('prev'));

// Keyboard arrow support
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') showSlider('next');
    if (e.key === 'ArrowLeft')  showSlider('prev');
});

let runTimeOut;

function showSlider(type) {
    let sliderItems    = SliderDom.querySelectorAll('.item');
    let thumbnailItems = thumbnailBorderDom.querySelectorAll('.item');

    if (type === 'next') {
        SliderDom.appendChild(sliderItems[0]);
        thumbnailBorderDom.appendChild(thumbnailItems[0]);
        carouselDom.classList.add('next');
    } else {
        SliderDom.prepend(sliderItems[sliderItems.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItems[thumbnailItems.length - 1]);
        carouselDom.classList.add('prev');
    }

    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunning);
}
