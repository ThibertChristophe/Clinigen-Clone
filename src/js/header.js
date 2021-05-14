
const country  = document.getElementById('country');
const sousMenu  = document.getElementById('menuCache');

country.addEventListener('click', () => {
    country.classList.toggle('active');
    sousMenu.classList.toggle('show');
})