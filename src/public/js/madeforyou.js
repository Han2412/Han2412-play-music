
let musicList = [
  {
      id: 1,
      src: "http://localhost:3000/play/tai-vi-sao",    
      name: "Tai Vi Sao - MCK",
      artist: "MCK",        
    },
  {
    id:2,
    src: "http://localhost:3000/play/tay-lai-pro",
  },
    {
    id:3,
    src: "http://localhost:3000/play/rolling-down",
  }, {
    id:4,
    src: "http://localhost:3000/play/nguoi-duoc-chon",
  }, {
    id:5,
    src: "http://localhost:3000/play/ai-cung-co-the-la-quan-quan",
  }, {
    id:6,
    src: "http://localhost:3000/play/teeth",
  },
  {
    id:7,
    src: "http://localhost:3000/play/mien-che",
  },
  {
    id:8,
    src: "http://localhost:3000/play/making-my-way-son-tung-m-tp",
  },
  {
    id:9,
    src :"http://localhost:3000/play/TheresNoOneAtAll-SonTungMTP-7583837",
  }
  ];

  
 window.addEventListener("load", () => {
  let musicIndex = 1;
  loadMusic(musicIndex);
  playingNow();
  
})



//Khai báo biến
const mediaListELe = document.querySelector(".media-list");
const addPlayListEle = document.getElementById("add-playlist");
const ModalEle = document.querySelector(".modal");
const Modal2Ele = document.querySelector(".modal-2");
const heartEle = document.querySelectorAll(".heart");
// test
const mainAudio = document.getElementById("main-audio");
const wrapper = document.querySelector(".main-page"),
volumeBtn = document.querySelector(".volume-btn"),
 lyricsBox = document.querySelector(".music-lyric"),
lyrics = document.querySelector(".lyrics"),
lyricsBtn = document.querySelector(".lyrics-details_btn");



document.addEventListener("DOMContentLoaded", function() {
  const playPauseBtn = document.querySelector('.play-pause');
  playPauseBtn.addEventListener("click", () => {
      const isMusicPaused = wrapper.classList.contains("paused");
      isMusicPaused ? pauseMusic() : playMusic();
      playingNow();
  });
});
//  click vào phần tưe khi hiện ra thẻ div

function clicked(element) {
  let getLiIndex = element.getAttribute("li-index");
  musicIndex = getLiIndex;
  loadMusic(musicIndex);
  playMusic();
  playingNow();
  
}
//  click  ra lyric
// function clicked2(element) {
//   let getLyric = element.getAttribute("li1");
//   lyric = getLyric;
//   loadMusic(lyric);
  
// }

function pauseMusic() {
  const playPauseBtn = document.querySelector('.play-pause');
  wrapper.classList.remove("paused");
  playPauseBtn.querySelector("i").innerText = "play_arrow";
  mainAudio.pause();
}



// play

function playMusic() {
  const mainAudio = document.getElementById("main-audio");
  const playPauseBtn = document.querySelector('.play-pause');
  wrapper.classList.add("paused");
  playPauseBtn.querySelector("i").innerText = "pause";
  mainAudio.play();
}

  
function loadMusic(indexNumb) { 
  // musicName.innerText = musicList[indexNumb - 1].name;
  // musicName.setAttribute("title", musicList[indexNumb - 1].name);
  // musicArtist.innerText = musicList[indexNumb - 1].artist;
  const mainAudio = document.getElementById("main-audio");
  mainAudio.src = musicList[indexNumb - 1].src;
}

// function loadLyic(lyric) {
//   const textContainer = document.querySelector('.lyrics');
//   textContainer.li =lyric;
// }


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

// lyric
document.addEventListener("DOMContentLoaded", function() {
const textContainer = document.querySelector(".lyrics"),
lyricsBtn = document.querySelector(".lyrics-details_btn");
lyricsBtn.addEventListener("click", () => {
   lyricsBox.classList.toggle("show");
   lyricsBox.classList.contains("show") ? lyricsBtn.style.color = "white" : lyricsBtn.style.color = "white";
   wrapper.classList.toggle("expand");
  })
})

//  Nut cho bài tiếp theo và lùi lại

document.addEventListener("DOMContentLoaded", function() {
  
  const prevBtn = document.querySelector(".backward");
  const nextBtn = document.querySelector(".forward");

      nextBtn.addEventListener("click", () => {
          nextMusic();
          console.log("Play/Pause button clicked");
      });

      prevBtn.addEventListener("click", () => {
          prevMusic();
      });

});


function nextMusic() {
  musicIndex++;
  if (musicIndex > musicList.length) musicIndex = 1;
  loadMusic(musicIndex);
  playMusic();
  playingNow();
}

function prevMusic() {
  musicIndex--;
  if (musicIndex < 1) musicIndex = musicList.length;
  loadMusic(musicIndex);
  playMusic();
  playingNow();
}


// nút Replay
document.addEventListener("DOMContentLoaded", function() {
  const repeatBtn = document.getElementById("repeat-plist");

  repeatBtn.addEventListener("click", () => {
    let getText = repeatBtn.innerText;

    switch (getText) {
      case "repeat":
        repeatBtn.innerText = "repeat_one";
        repeatBtn.setAttribute("title", "Song looped");
        break;
      case "repeat_one":
        repeatBtn.innerText = "shuffle";
        repeatBtn.setAttribute("title", "Playback shuffle");
        break;
      case "shuffle":
        repeatBtn.innerText = "repeat";
        repeatBtn.setAttribute("title", "Playlist looped");
        break;
    }
  });
});

mainAudio.addEventListener("ended", () => {
  const repeatBtn = document.getElementById("repeat-plist");
  let getText = repeatBtn.innerText;
  switch(getText) {
      case "repeat":
          nextMusic();
          break;
      case "repeat_one":
          mainAudio.currentTime = 0;
          loadMusic(musicIndex);
          playMusic();
          break;
      case "shuffle":
          let randIndex = Math.floor((Math.random() * musicList.length) + 1);
          do {
              randIndex = Math.floor((Math.random() * musicList.length) + 1);
          } while(musicIndex == randIndex)
          musicIndex = randIndex;
          loadMusic(musicIndex);
          playMusic();
          playingNow();
          break;
  }
})


document.addEventListener("DOMContentLoaded", function() {
  let isMuted = false;
  const volumeBtn = document.querySelector(".volume-btn"),
  volumeRangeInput = document.getElementById("volume_input");
  
  volumeBtn.addEventListener("click", () => {
    isMuted = !isMuted;
    let currentVolume = Number(volumeRangeInput.value) / 100;
    if(isMuted) {
        volumeBtn.textContent = "volume_off";
        mainAudio.volume = 0;
    } else {
        volumeBtn.textContent = "volume_up";
        mainAudio.volume = currentVolume;
        changeIconVolume(currentVolume);
    }
  })
});
// volume-btn


function changeIconVolume(volumeValue) {

  if (volumeValue > 0.5 && volumeValue <= 1) {
      volumeBtn.textContent = "volume_up";
  } else if (volumeValue > 0 && volumeValue <= 0.5) {
      volumeBtn.textContent = "volume_down";
  } else {
      volumeBtn.textContent = "volume_mute";
  }
}

// Khu chứa thanh time.
document.addEventListener("DOMContentLoaded", function() {
const progressArea = document.querySelector(".progress-area");

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
