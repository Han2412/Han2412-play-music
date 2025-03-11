//topchart
const xValues = [
  "10:00",
  "12:00",
  "14:00",
  "16:00",
  "18:00",
  "20:00",
  "22:00",
  "00:00",
  "02:00",
  "04:00",
];

new Chart("myChart", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [
      {
        data: [860, 1140, 1060, 1060, 1070, 1110, 1330, 2210, 7830, 2478],
        borderColor: "#e35050",
        fill: false,
      },
      {
        data: [1600, 1700, 1700, 1900, 2000, 2700, 4000, 5000, 6000, 7000],
        borderColor: "#50e3c2",
        fill: false,
      },
      {
        data: [300, 700, 2000, 5000, 6000, 4000, 2000, 1000, 200, 100],
        borderColor: "#4a90e2",
        fill: false,
      },
    ],
  },
  options: {
    legend: { display: false },
  },
});

//Khai báo biến
const loginEle = document.getElementById("login");
const mediaListELe = document.querySelector(".media-list");
const addPlayListEle = document.getElementById("add-playlist");
const ModalEle = document.querySelector(".modal");
const Modal2Ele = document.querySelector(".modal-2");
const heartEle = document.querySelectorAll(".heart");

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
