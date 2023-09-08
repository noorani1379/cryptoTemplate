const nav = document.querySelector('.navbar');
// window check
document.addEventListener('scroll', function () {
  // window scroll small 60 remove or bigger 60 add
  window.scrollY < 60
    ? nav.classList.remove('fixed')
    : nav.classList.add('fixed');
});
