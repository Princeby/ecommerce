const bar = document.querySelector('.bar');
const close = document.querySelector('.close');
const nav = document.querySelector('.navigation');



bar.addEventListener('click', () => {
    nav.classList.add('active');
})

close.addEventListener('click', () => {
    nav.classList.remove('active');
})