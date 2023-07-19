// const slides = document.querySelectorAll(".img_content li");
const prevBtn = document.querySelector(".button_before");
const nextBtn = document.querySelector(".button_next");
let slideIndex = 7;
let slides = document.querySelectorAll(".img_content li");

// // 이전 버튼
// prevBtn.addEventListener("click", function () {
//   let img_content = document.querySelector(".img_content");
//   console.log(img_content);
//   img_content.appendChild(slides[0]);

//   console.log(slides[0]);
//   //   slides[0].remove();
// });

// 다음 버튼
// nextBtn.addEventListener("click", function () {
//   const slides = document.querySelectorAll(".img_content li");
// });

// 이전 버전
function showSlide(index) {
  if (index < 0) {
    slideIndex = slides.length - 1;
  } else if (index >= slides.length) {
    slideIndex = 0;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  //   현재 슬라이드
  slides[slideIndex].style.display = "flex";
  slides[slideIndex].style.flexDirection = "column";
  slides[slideIndex].style.marginTop = "0px";
  slides[slideIndex].style.transform = "rotate(0deg)";

  // 이전 슬라이드
  let prevIndex = slideIndex - 1 < 0 ? slides.length - 1 : slideIndex - 1;
  slides[prevIndex].style.display = "flex";
  slides[prevIndex].style.flexDirection = "column";
  slides[prevIndex].style.marginTop = "70px";
  slides[prevIndex].style.transform = "rotate(-15deg)";

  // 다음 슬라이드
  let nextIndex = slideIndex + 1 >= slides.length ? 0 : slideIndex + 1;
  slides[nextIndex].style.display = "flex";
  slides[nextIndex].style.flexDirection = "column";
  slides[nextIndex].style.marginTop = "70px";
  slides[nextIndex].style.transform = "rotate(15deg)";
}

// 이전 버튼
prevBtn.addEventListener("click", function () {
  slideIndex--;
  showSlide(slideIndex);
});

// 다음 버튼
nextBtn.addEventListener("click", function () {
  slideIndex++;
  showSlide(slideIndex);
});

showSlide(slideIndex);
