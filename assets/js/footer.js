const footerToggle = document.querySelectorAll('.footer--responsive__header');
const footerContent = document.querySelectorAll('.footer--responsive__content');
// ! *****************************
footerToggle.forEach((element, index) => {
  element.addEventListener('click', function (e) {
    e.preventDefault();
    if (footerContent[index].classList.contains('show')) {
        footerContent[index].classList.remove('show')
    } else {
        footerContent[index].classList.add('show')
    }
  });
});
