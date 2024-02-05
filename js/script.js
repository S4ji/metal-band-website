document.addEventListener('DOMContentLoaded', function () {
    let closeNavBtn = document.getElementById('navClose');
    let openNavBtn = document.getElementById('navOpen');
    let nav = document.getElementById('nav');

    function closeNav() {
        nav.style.height = '0px';
        nav.style.transition = 'height 0.2s ease-in-out';
        openNavBtn.style.display = 'block';
        closeNavBtn.style.display = 'none';
        nav.style.visibility = 'hidden';
    }

    function openNav() {
        nav.style.height = '175px';
        nav.style.transition = 'all 0.8s ease-in-out';
        closeNavBtn.style.display = 'block';
        openNavBtn.style.display = 'none';
        setTimeout(menuslideVisible, 400);
    }

    function menuslideVisible() {
        nav.style.visibility = 'visible';
    }

    closeNavBtn.addEventListener('click', closeNav);
    openNavBtn.addEventListener('click', openNav);
});
