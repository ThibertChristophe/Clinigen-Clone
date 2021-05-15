const country  = document.getElementById('country');
const sousMenu  = document.getElementById('menuCache');

const menuAbout  = document.querySelector('.menuAbout');
const menuCacheAbout  = document.querySelector('.menuCache_about');


country.addEventListener('click', () => {
    removeAll('country');
    country.classList.toggle('active');
    sousMenu.classList.toggle('show');
});

menuAbout.addEventListener('click', () => {
    removeAll('about');
    menuAbout.classList.toggle('active');
    menuCacheAbout.classList.toggle('show');
});

const removeAll = (except) => {

    if(except==='about'){
        country.classList.remove('active');
        sousMenu.classList.remove('show');
    }
    if(except==='country'){
        menuAbout.classList.remove('active');
        menuCacheAbout.classList.remove('show');
    }
}