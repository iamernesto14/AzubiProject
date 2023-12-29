const toggleIcon = document.querySelector('.toggle');
const navMenu = document.querySelector("nav");
const overLay = document.querySelector('.overlay')

toggleIcon.addEventListener('click', () => {
    toggleIcon.classList.toggle('active');
    navMenu.classList.toggle('active');
    overLay.classList.toggle('active');
})