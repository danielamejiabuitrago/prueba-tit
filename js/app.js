/* toggle 'active' */
var button = document.querySelector('.main-header_mobile_button');
var nav = document.querySelector('.main-header_nav-primary');
button.addEventListener('click', function () {
    nav.classList.toggle('active');
});
