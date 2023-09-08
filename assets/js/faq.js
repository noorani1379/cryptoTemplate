const btnFaq = document.querySelectorAll(".faq__link");
const faqContent = document.querySelectorAll("#faq-content");
const faqToggle = document.querySelectorAll(".faq__toggle");
const faqDes = document.querySelectorAll(".faq__description");
// ! **************************************************************

btnFaq.forEach((e, index) => {
  e.addEventListener("click", function (event) {
    event.preventDefault();
    faqContent.forEach((content) => {
      content.classList.remove("active");
    });
    btnFaq.forEach((el) => {
      el.classList.remove("active");
    });
    e.classList.add("active");
    faqContent[index].classList.add("active");
  });
});
// ! **************************************************************
faqToggle.forEach((e, index) => {
  e.addEventListener("click", function (event) {
    event.preventDefault();

    if (faqDes[index].classList.contains('active')) {
      faqDes[index].classList.remove('active');
    } else {
      faqDes.forEach((des) => {
        des.classList.remove('active');
      });
      faqDes[index].classList.toggle('active');
    }

  });
});
