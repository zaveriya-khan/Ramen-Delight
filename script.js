function selectRamen(ramenName) {
    alert(`Thank you for selecting ${ramenName}! Your delicious ramen will be ready shortly.`);
  }

const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const scrollToTopBtn = document.getElementById("scroll-to-top-btn");
  window.onscroll = function () {
  if(
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
    ) {
      scrollToTopBtn.style.display = "block";
    } else {
      scrollToTopBtn.style.display = "none";
    }
      };
      scrollToTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
      });