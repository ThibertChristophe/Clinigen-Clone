const menuCountry  = document.getElementById('country');
const menuCacheCountry  = document.getElementById('menuCacheCountry');

const menuAbout  = document.querySelector('.menuAbout');
const menuCacheAbout  = document.querySelector('.menuCache_about');

const menuGlobalOffice = document.querySelector('.menuGlobaOffice');
const menuCacheGlobalOffice = document.querySelector('.menuCache_globalOffice');

const arrayOfLeftMenu = document.querySelectorAll('.header_top_menuLeft > nav > ul > li > a');

menuCountry.addEventListener('click', (e) => {
    removeAll(menuCountry.classList[0], false);
    if (!e.target.classList.contains('active')){
        menuCacheCountry.classList.add('show');
    }
    menuCountry.classList.toggle('active');
});

menuAbout.addEventListener('click', (e) => {
    removeAll(menuAbout.classList[0], true);
    if (!e.target.classList.contains('active')){
        menuCacheAbout.classList.add('show');
    }
    menuAbout.classList.toggle('active');
});


menuGlobalOffice.addEventListener('click', (e) => {
    removeAll(menuGlobalOffice.classList[0], true);
   if (!e.target.classList.contains('active')){
         menuCacheGlobalOffice.classList.add('show');
    }
    menuGlobalOffice.classList.toggle('active');
});

/**
 * 
 * @param {*} except class de l'element sur lequel on a click
 * @param {*} country si on a click sur country a gauche ou pas
 */
const removeAll = (except, country) => {
    if (country) {
        menuCountry.classList.remove('active');
    }
    menuCacheCountry.classList.remove('show');
    menuCacheAbout.classList.remove('show');
    menuCacheGlobalOffice.classList.remove('show');

    arrayOfLeftMenu.forEach(e => {
        if (e.classList[0] !== except){
            e.classList.remove('active');
        }
    });
}