const schemeSvg = document.querySelector('.scheme-svg');
const totalPriceTag = document.querySelector('.price-total');
const menuButton = document.querySelector('.m-menu');
const menu = document.querySelector('.menu');

let cost = 600;
let totalPrice = 0;
schemeSvg.addEventListener('click', (event) => {
if (!event.target.classList.contains('booked')){
    event.target.classList.toggle('active');    
    let totalSeats = schemeSvg.querySelectorAll('.active').length
    totalPrice = totalSeats * cost;
    totalPriceTag.textContent = totalPrice;
    console.log(event.target);
}
});

menuButton.addEventListener('click', ()=> {
    console.log('knopka menu');
    menu.classList.toggle('is-open');
})