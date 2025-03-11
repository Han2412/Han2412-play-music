//Khai báo biến
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

// document.addEventListener("click", (e) => {
//   if (e.target === addPlayListEle || e.target.closest(".addplaylist")) {
//     ModalEle.style.display = "block";
//   } else {
//     ModalEle.style.display = "none";
//   }
// });

//add vào playplists đã có sẵn

// document.addEventListener("click", (e) => {
//   if (e.target.closest(".fa-plus") || e.target.closest(".addToPlaylist")) {
//     Modal2Ele.style.display = "block";
//   } else {
//     Modal2Ele.style.display = "none";
//   }
// });

//chức năng cho song album playlist
const btnSongEle = document.querySelector(".Song");
const btnAlbumEle = document.querySelector(".Album");
const btnPlayListEle = document.querySelector(".Playlist");
const btnEle = document.querySelectorAll("ul .style");
const listSongEle = document.querySelectorAll(".list-song");
console.log(btnEle);
const clearClassActive = () => {
  btnEle.forEach((val) => val.classList.remove("active"));
};

// btnSongEle.addEventListener("click", () => {
//   clearClassActive();
//   btnSongEle.classList.add("active");
//   listSongEle.forEach((val) => (val.style.display = "none"));
//   mediaListELe.style.display = "block";
// });
// btnAlbumEle.addEventListener("click", () => {
//   clearClassActive();
//   btnAlbumEle.classList.add("active");
//   listSongEle.forEach((val) => (val.style.display = "block"));
//   mediaListELe.style.display = "none";
// });
// btnPlayListEle.addEventListener("click", () => {
//   clearClassActive();
//   btnPlayListEle.classList.add("active");
//   listSongEle.forEach((val) => (val.style.display = "block"));
//   mediaListELe.style.display = "none";
// });


// document.addEventListener('DOMContentLoaded', function() {
//   console.log("Hàm đã được tải lên và chạy");
//   const songDivs = document.querySelectorAll('.li-index');
//   const footerAudio = document.getElementById('main-audio');

//   songDivs.forEach(li => {
//       li.addEventListener('click', function() {
//         console.log("Hàm đã được tải lên và chạy");
//           const audioLink = this.getAttribute('link');
//           footerAudio.src = audioLink;
//           footerAudio.play();
//       });
//   });
// });
window.addEventListener("load", () => {
  playingNow();
  
})


function playingNow() {

  const divList = document.querySelector(".media-list");
  let musicIndex = 1;
  const allLiTag = divList.querySelectorAll("div");
  allLiTag.forEach(function(li, index) {
      let audioTag = li.querySelector(".audio-duration");
      if (allLiTag[index].classList.contains("playing")) {
          allLiTag[index].classList.remove("playing");
          let adDuration = audioTag.getAttribute("t-duration");
          audioTag.innerText = adDuration;
      }
      if (allLiTag[index].getAttribute("li-index") == musicIndex) {
          allLiTag[index].classList.add("playing");
      }
      allLiTag[index].setAttribute("onclick", "clicked(this)" )
  })  
}  

function clicked(element) {
  let getLiIndex = element.getAttribute("li-index");
  musicIndex = getLiIndex;
  loadMusic(musicIndex);
  playMusic();
  playingNow();
  
}





document.addEventListener("DOMContentLoaded", function() {
  const playPauseBtn = document.querySelector('.play-pause');
  const wrapper = document.querySelector(".bottom-section");
  playPauseBtn.addEventListener("click", () => {
      const isMusicPaused = wrapper.classList.contains("paused");
      isMusicPaused ? pauseMusic() : playMusic();
      playingNow();
  });
});


function pauseMusic() {
  const mainAudio = document.getElementById("main-audio");
  const playPauseBtn = document.querySelector('.play-pause');
  const wrapper = document.querySelector(".bottom-section");
  wrapper.classList.remove("paused");
  playPauseBtn.querySelector("i").innerText = "play_arrow";
  mainAudio.pause();
}



function playMusic() {
  const mainAudio = document.getElementById("main-audio");
  const playPauseBtn = document.querySelector('.play-pause');
  const wrapper = document.querySelector(".bottom-section");
  wrapper.classList.add("paused");
  playPauseBtn.querySelector("i").innerText = "pause";
  mainAudio.play();
}


function loadMusic(indexNumb) { 
  const mainAudio = document.getElementById("main-audio");
  mainAudio.src = indexNumb;
 }



 document.addEventListener("DOMContentLoaded", function() {
  const progressArea = document.querySelector(".progress-area");
  const mainAudio = document.getElementById("main-audio");
  progressArea.addEventListener("click", (e) => {
    let progressWidthVal = progressArea.clientWidth;
    let clickedOffSetX = e.offsetX;
    let songDuration = mainAudio.duration;
    mainAudio.currentTime = (clickedOffSetX / progressWidthVal) * songDuration;
  });
  });

  
 document.addEventListener("DOMContentLoaded", function() {
  const mainAudio = document.getElementById("main-audio");
  const progressBar = document.querySelector(".progress-bar");
  const musicCurrentTime = document.querySelector(".current");
  const musicDuration = document.querySelector(".duration");

  mainAudio.addEventListener("timeupdate", (e) => {
    const currentTime = e.target.currentTime;
    const duration = e.target.duration;
    let progressBarWidth = (currentTime / duration) * 100;
    progressBar.style.width = `${progressBarWidth}%`;

    let currentMin = Math.floor(currentTime / 60);
    let currentSec = Math.floor(currentTime % 60);
    if (currentSec < 10) {
      currentSec = `0${currentSec}`;
    }
    musicCurrentTime.innerText = `${currentMin}:${currentSec}`;
  });

  mainAudio.addEventListener("loadeddata", () => {
    let audioDuration = mainAudio.duration;
    let totalMin = Math.floor(audioDuration / 60);
    let totalSec = Math.floor(audioDuration % 60);
    if (totalSec < 10) {
      totalSec = `0${totalSec}`;
    }
    musicDuration.innerText = `${totalMin}:${totalSec}`;
  });
});