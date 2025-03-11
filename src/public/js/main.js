//Khai báo biến
const listBanner = document.querySelector(".banner .list-banner");
const itemBanners = document.querySelectorAll(".banner .list-banner .item");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const loginEle = document.getElementById("login");
const mediaListELe = document.querySelector(".media-list");
const addPlayListEle = document.getElementById("add-playlist");
const ModalEle = document.querySelector(".modal");
const Modal2Ele = document.querySelector(".modal-2");
const heartEle = document.querySelectorAll(".heart");
const more = document.querySelector('.more-icon');
const dropDownMoreEle = document.querySelector(".drop-down-more")
//silder animation
$(document).ready(function () {
  $(".list-banner").slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
  });
});



//click heart
[...heartEle].forEach((val) => {
  val.addEventListener("click", (e) => {
    if (e.target.classList.contains("unlike")) {
      e.target.classList.remove("unlike");
      e.target.classList.add("like");
    } else {
      e.target.classList.remove("like");
      e.target.classList.add("unlike");
    }
  });
});

//Thêm playlists

document.addEventListener("click", (e) => {
  if (e.target === addPlayListEle || e.target.closest(".addplaylist")) {
    ModalEle.style.display = "block";
  } else {
    ModalEle.style.display = "none";
  }
});

//add vào playplists đã có sẵn

document.addEventListener("click", (e) => {
  if (e.target.closest(".fa-plus") || e.target.closest(".addToPlaylist")) {
    Modal2Ele.style.display = "block";
  } else {
    Modal2Ele.style.display = "none";
  }
});


// click more in made for you
document.addEventListener("click", (e) => {
  if (e.target === more || e.target.closest(".drop-down-more") || e.target.closest(".fa-ellipsis")) {
    dropDownMoreEle.style.display = "block"
  }
  else {
    dropDownMoreEle.style.display = "none"
  }
})
console.log(dropDownMoreEle)

function reloadPage() {
  window.location.href = "/"
}
