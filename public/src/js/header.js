const menuCountry  = document.getElementById('country');
const menuCacheCountry  = document.getElementById('menuCacheCountry');

const menuAbout  = document.querySelector('.menuAbout');
const menuCacheAbout  = document.querySelector('.menuCache_about');

const menuGlobalOffice = document.querySelector('.menuGlobaOffice');
const menuCacheGlobalOffice = document.querySelector('.menuCache_globalOffice');

const arrayOfLeftMenu = document.querySelectorAll('.header_top_menuLeft > nav > ul > li > a');

menuCountry.addEventListener('click', (e) => {
    removeAll(menuCountry.classList[0], false);
    if (!e.target.classList.contains('actif')){
        menuCacheCountry.classList.add('show');
    }
    menuCountry.classList.toggle('actif');
});

menuAbout.addEventListener('click', (e) => {
    removeAll(menuAbout.classList[0], true);
    if (!e.target.classList.contains('actif')){
        menuCacheAbout.classList.add('show');
    }
    menuAbout.classList.toggle('actif');
});


menuGlobalOffice.addEventListener('click', (e) => {
    removeAll(menuGlobalOffice.classList[0], true);
   if (!e.target.classList.contains('actif')){
         menuCacheGlobalOffice.classList.add('show');
    }
    menuGlobalOffice.classList.toggle('actif');
});

/**
 * 
 * @param {*} except class de l'element sur lequel on a click
 * @param {*} country si on a click sur country a gauche ou pas
 */
const removeAll = (except, country) => {
    if (country) {
        menuCountry.classList.remove('actif');
    }
    menuCacheCountry.classList.remove('show');
    menuCacheAbout.classList.remove('show');
    menuCacheGlobalOffice.classList.remove('show');

    arrayOfLeftMenu.forEach(e => {
        if (e.classList[0] !== except){
            e.classList.remove('actif');
        }
    });
}