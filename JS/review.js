const review_box_innerAll = document.querySelectorAll(".review_box_inner>*");
const review_box_inner = document.querySelector(".review_box_inner");
const sort = document.querySelector(".sort");
const len = sort.options.length;

const data = [
  {
    writter: "조진형",
    review:
      "술맛이 깔끔하고 목넘김이 좋아서 또 먹고싶어요. 생각보다 맛있어서 기분이 좋았습니다.",
    rating: 5,
    star: `<i class="fa-solid fa-star" style="color: #f6ff75;"></i>
    <i class="fa-solid fa-star" style="color: #f6ff75;"></i>
    <i class="fa-solid fa-star" style="color: #f6ff75;"></i>
    <i class="fa-solid fa-star" style="color: #f6ff75;"></i>
    <i class="fa-solid fa-star" style="color: #f6ff75;"></i>`,
    img: "강릉소주",
    id: 1,
    date: "2023.07.25",
  },
  {
    writter: "심재운",
    review: "너무 쓰고 숙취가 심합니다. ㅠㅠ 맛없어요. 웩",
    rating: 1,
    star: `<i class="fa-solid fa-star" style="color: #f6ff75;"></i>`,
    img: "가야곡양주",
    id: 2,
    date: "2023.06.25",
  },
  {
    writter: "김현승",
    review:
      "한 잔을 마시니 이미 한 병을 다 마신듯한 느낌입니다. 막걸리에 흔치 않은 도수라 그런지 맛도 묵직하고 도수도 바로 느껴집니다.",
    rating: 4,
    star: `<i class="fa-solid fa-star" style="color: #f6ff75;"></i>
    <i class="fa-solid fa-star" style="color: #f6ff75;"></i>
    <i class="fa-solid fa-star" style="color: #f6ff75;"></i>
    <i class="fa-solid fa-star" style="color: #f6ff75;"></i>`,
    img: "덕산막걸리",
    id: 3,
    date: "2023.04.05",
  },
  {
    writter: "김성제",
    review:
      "술맛이 깔끔하고 목넘김이 좋아서 또 먹고싶어요. 생각보다 맛있어서 기분이 좋았습니다.",
    rating: 3,
    star: `<i class="fa-solid fa-star" style="color: #f6ff75;"></i>
    <i class="fa-solid fa-star" style="color: #f6ff75;"></i>
    <i class="fa-solid fa-star" style="color: #f6ff75;"></i>`,
    img: "고소리술",
    id: 4,
    date: "2023.01.11",
  },
];

function ChangeValue() {
  let value = sort.options[sort.selectedIndex].value;
  console.log(value);
  let html = "";
  if (value === "higtest") {
    data.sort((a, b) => b.rating - a.rating);
  } else if (value === "lowest") {
    data.sort((a, b) => a.rating - b.rating);
  } else if (value === "lastest") {
    data.sort((a, b) => a.id - b.id);
  } else if (value === "longest") {
    data.sort((a, b) => b.id - a.id);
  }

  for (let i = 0; i < data.length; i++) {
    html += `<div class="review_content_wrapper">
    <div class="review_content">
    <div class="name_box">
    <div class="name"><strong>작성자:</strong> ${data[i].writter}</div>
      <div class="date"> ${data[i].date}</div>
    </div>
        <div class="review_goods_info">
            <div class="review_goods_img">
                <div class="review_goods_content">
                    <span><strong>후기:</strong> ${data[i].review}</span>
                    <div class="reveiw_good_rating_wrapper">
                        <div class="review_good_rating">
                            <strong>별점:</strong>
                            ${data[i].star}
                        </div>
                    </div>
                </div>
                <div class="img_box">
                    <img src="alcoholjpg/${data[i].img}.png" alt="">
                    <div class="reivew_goods_name">
                    ${data[i].img}
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>`;
  }
  review_box_inner.innerHTML = html;
}
