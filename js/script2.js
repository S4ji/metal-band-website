document.addEventListener('DOMContentLoaded', function () {
    let navBtn = document.getElementById('navBtn');
    let nav = document.getElementById('nav');

    navBtn.addEventListener('click', navFunction);

    function navFunction() {
        if (nav.style.visibility === 'hidden') {
            nav.style.visibility = 'visible';
            nav.style.height = '175px';
        } else {
            nav.style.visibility = 'hidden';
            nav.style.height = '0px';
        }

        nav.style.transition = `visibility 0.2s ease-in-out, height 0.8s ease-in-out`;
    }
});
