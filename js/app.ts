/* toggle 'active' */

const button = (document.querySelector('.main-header_mobile_button') as HTMLButtonElement)
const nav = (document.querySelector('.main-header_nav-primary') as HTMLButtonElement)

button.addEventListener('click',(): void => {
    nav.classList.toggle('active');
});