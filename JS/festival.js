// const swiper = new Swiper(".swiper", {
//   // And if we need scrollbar
//   scrollbar: {
//     el: ".swiper-scrollbar",
//     hide: false,
//     clickable: true,
//   },
//   spaceBetween: 30,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
//   autoplay: {
//     delay: 3000,
//   },
//   loop: true,
// });

var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});
// ======================지역 섹션별로 나오게 하기=============================
const festival_recommand = document.querySelector(".festival_recommand");
const festival_divid = document.querySelector(".festival_divid");
const gyeong_gi = document.querySelector(".festival_now gyeong-gi");
const gang_won = document.querySelector(".festival_now gang-won");
const regionElements = document.querySelectorAll(
  ".festival_nav .select_region div"
);
const now_subtitle = document.querySelector(".now_subtitle");
let festivalNows = document.getElementsByClassName("festival_now");
festival_divid.style.height = "0px";

// 각 지역 요소에 클릭 이벤트 리스너를 추가합니다.
regionElements.forEach((regionElement) => {
  regionElement.addEventListener("click", function () {
    festival_divid.style.height = "90px";

    const region = this.classList[0]; // 해당 지역의 클래스명을 가져옵니다.
    for (let i = 0; i < festivalNows.length; i++) {
      //모든 섹션 보이게
      festivalNows[i].style.display = "block";
      if (!festivalNows[i].classList.contains(`${region}`))
        // 선택한 섹션 제외한 모든 섹션 안보이게
        festivalNows[i].style.display = "none";
    }
    console.log(festival_recommand);
    // recommand_wrap.scrollIntoView({ behavior: "smooth" });
    console.log(
      festival_divid.scrollIntoView(true, {
        behavior: "smooth",
        block: "start",
      })
    );
  });
});
