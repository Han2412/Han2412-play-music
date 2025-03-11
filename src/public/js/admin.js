// // import { user, playlist, music, album, artist } from "./variable.js";
// console.log("TEST");

// function test() {
//   alert(1);
// }
// //Khai báo biến
const modal3Ele = document.querySelector(".modal-3");
const modal4Ele = document.querySelector(".modal-4");
const modal5Ele = document.querySelector(".modal-5");
const modal6Ele = document.querySelector(".modal-6");
const modal7Ele = document.querySelector(".modal-7");
const modal8Ele = document.querySelector(".modal-8");
const userListEle = document.querySelector(".user-list");
const menuListEle = document.querySelectorAll(".menu-list button");
const userManagementEle = document.querySelector(".user");
const contentManagementEle = document.querySelector(".content");
const staticAndPayEle = document.querySelector(".staticPay");
const commentEle = document.querySelector(".comment");
const userManagementContainerEle = document.querySelector(".user-management");
const contentManagementContainerEle = document.querySelector(
  ".content-management"
);
const contentEle = document.querySelector(".content");
const btnAddPlayListEle = document.querySelector(".btn-add-playlist");
const btnAddAlbumEle = document.querySelector(".btn-add-album");
const btnAddArtistEle = document.querySelector(".btn-add-artist");
const btnAddMusictEle = document.querySelector(".btn-add-music");
const btnAddUserEle = document.querySelector(".btn-add-user");
const btnConfirmUserEle = document.querySelector(".btn-confirm");
const modal7Edit = document.querySelector(".modal-7-edit");
const updateSongEle = document.querySelectorAll(".update-song");

// const renderUser = (user) => {
//   let userHtml = "";
//   user.forEach((users) => {
//     userHtml += `
//     <div class="user flex a-center j-between">
//     <span class="name flex a-center">
//         <img src="${users.image}" alt="">
//         ${users.name}
//     </span>
//     <span class="email-user">${users.email}</span>
//     <span class="password-user">${users.password.replace(
//       /.(?=.{0,}$)/g,
//       "*"
//     )}</span>
//     <span class="birthday-user">${users.birthday}</span>
//     <div class="btn-RUD">
//         <button class="update">
//             <i class="fa-solid fa-pencil"></i>
//         </button>
//         <button onclick="handleDeleteUser(${users.id})" class="delete">
//             <i class="fa-solid fa-xmark"></i>
//         </button>
//     </div>
// </div>
//         `;
//   });
//   userListEle.innerHTML = userHtml;
// };
// renderUser(user);
// //Xác nhận thêm user
// btnConfirmUserEle.addEventListener("click", function (e) {
//   e.preventDefault();
//   const inputUserNameValue = inputUserNameEle.value;
//   const inputUserEmailValue = inputUserEmailEle.value;
//   const inputUserPasswordValue = inputUserPasswordEle.value;
//   const inputUserBirthdayValue = inputUserBirthdayEle.value;

//   if (
//     !inputUserNameValue ||
//     !inputUserEmailValue ||
//     !inputUserPasswordValue ||
//     !inputUserBirthdayValue
//   ) {
//     alert("input is invalid");
//     return;
//   } else {
//     user.push({
//       id: user.length + 1,
//       name: inputUserNameValue,
//       email: inputUserEmailValue,
//       password: inputUserPasswordValue,
//       image: "image/Rectangle 33.png",
//       birthday: inputUserBirthdayValue,
//     });
//   }
//   modal3Ele.style.display = "none";
//   inputUserNameEle.value = "";
//   inputUserEmailEle.value = "";
//   inputUserPasswordEle.value = "";
//   inputUserBirthdayEle.value = "";
//   renderUser(user);
//   console.log(user);
// });

// //render playlist
// const renderPlayList = (playlist) => {
//   let playListHtml = "";
//   playlist.forEach((playLists) => {
//     playListHtml += `
//     <div class="list-song ">
//       <a class="song" href="#"><img src="${playLists.image}" alt=""></a>
//       <h4>${playLists.name}</h4>
//       <a href="">${playLists.type}</a>
//   </div>
//         `;
//   });
//   playListEle.innerHTML += playListHtml;
// };
// renderPlayList(playlist);

// //render music
// const renderMusic = (music) => {
//   let musicHtml = "";
//   music.forEach((musics) => {
//     musicHtml += `
//     <div class="music flex a-center j-between ">
//     <div class="flex a-center">
//         <img src="${musics.image}" alt="">
//         <h3>${musics.name}</h3>
//     </div>
//     <span>${musics.artist}</span>
//     <span class="type-music">Ballad</span>
//     <div class="btn-RUD flex a-center">
//         <span class="time">${musics.minutes}</span>
//         <button class="update-music">
//             <i class="fa-solid fa-pencil"></i>
//         </button>
//         <button class="delete-music">
//             <i class="fa-solid fa-xmark"></i>
//         </button>
//     </div>
// </div>
//         `;
//   });
//   muiscListEle.innerHTML += musicHtml;
// };
// renderMusic(music);

// // render album
// const renderAlbum = (album) => {
//   let albumhtml = "";
//   album.forEach((albums) => {
//     albumhtml += `
//     <div class="list-song ">
//       <a class="song" href="#"><img src="${albums.image}" alt=""></a>
//       <h4>${albums.name}</h4>
//       <a href="">${albums.type}</a>
//   </div>
//         `;
//   });
//   albumListEle.innerHTML += albumhtml;
// };
// renderAlbum(album);

// //render artist
// const renderArtist = (artist) => {
//   let artistHtml = "";
//   artist.forEach((artists) => {
//     artistHtml += `
//     <div class="list-song ">
//       <a class="song" href="#"><img src="${artists.image}" alt=""></a>
//       <h4>${artists.name}</h4>
//       <a href="">${artists.musicalArtist}</a>
//   </div>
//         `;
//   });
//   artistListEle.innerHTML += artistHtml;
// };
// renderArtist(artist);

// //hiện modal để chỉnh sửa user
// document.addEventListener("click", (e) => {
//   if (
//     e.target.closest(".update") ||
//     e.target.closest(".user-information") ||
//     e.target === btnAddUserEle
//   ) {
//     modal3Ele.style.display = "block";
//   } else {
//     modal3Ele.style.display = "none";
//   }
//   // if (e.target.closest(".btn-confirm")) {
//   //   modal3Ele.style.display = "none";
//   // }
// });

// //hiện modal để chỉnh sửa music
// document.addEventListener("click", (e) => {
//   if (
//     e.target === btnAddMusictEle ||
//     e.target.closest(".update-music") ||
//     e.target.closest(".music-information")
//   ) {
//     modal7Ele.style.display = "block";
//   } else {
//     modal7Ele.style.display = "none";
//   }
//   if (e.target.closest(".btn-confirm-music")) {
//     modal7Ele.style.display = "none";
//   }
// });

// //hiện modal để thêm playlist
// document.addEventListener("click", (e) => {
//   if (
//     e.target === btnAddPlayListEle ||
//     e.target.closest(".playlist-information")
//   ) {
//     modal4Ele.style.display = "block";
//   } else {
//     modal4Ele.style.display = "none";
//   }
//   if (e.target.closest(".btn-confirm-playlist")) {
//     modal4Ele.style.display = "none";
//   }
// });

// //hiện modal đẻ thêm album
// document.addEventListener("click", (e) => {
//   if (e.target === btnAddAlbumEle || e.target.closest(".album-information")) {
//     modal5Ele.style.display = "block";
//   } else {
//     modal5Ele.style.display = "none";
//   }
//   if (e.target.closest(".btn-confirm-album")) {
//     modal5Ele.style.display = "none";
//   }
// });

// //hiện modal đẻ thêm artist
// document.addEventListener("click", (e) => {
//   if (e.target === btnAddArtistEle || e.target.closest(".artist-information")) {
//     modal6Ele.style.display = "block";
//   } else {
//     modal6Ele.style.display = "none";
//   }
//   if (e.target.closest(".btn-confirm-artist")) {
//     modal6Ele.style.display = "none";
//   }
// });

// //hiệu ứng thanh menu

// userManagementEle.addEventListener("click", () => {
//   clearClassActive();
//   userManagementEle.classList.add("active");
//   userManagementContainerEle.style.display = "block";
//   contentManagementContainerEle.style.display = "none";
// });
// contentManagementEle.addEventListener("click", () => {
//   clearClassActive();
//   contentManagementEle.classList.add("active");
//   userManagementContainerEle.style.display = "none";
//   contentManagementContainerEle.style.display = "block";
// });
// staticAndPayEle.addEventListener("click", () => {
//   clearClassActive();
//   staticAndPayEle.classList.add("active");
//   userManagementContainerEle.style.display = "none";
//   contentManagementContainerEle.style.display = "none";
// });
// commentEle.addEventListener("click", () => {
//   clearClassActive();
//   commentEle.classList.add("active");
//   userManagementContainerEle.style.display = "none";
//   contentManagementContainerEle.style.display = "none";
// });

function modal3Show() {
  modal3Ele.style.display = "block";
}

function modal3close() {
  modal3Ele.style.display = "none";
}

function modal4Close() {
  modal4Ele.style.display = "none";
}
function modal4Show() {
  modal4Ele.style.display = "block";
}

function modal5Show() {
  modal5Ele.style.display = "block";
}
function modal5Close() {
  modal5Ele.style.display = "none";
}

function modal6Show() {
  modal6Ele.style.display = "block";
}

function modal6close() {
  modal6Ele.style.display = "none";
}

// khi mà cái DOM load xong
document.addEventListener("DOMContentLoaded", () => {
  let UserID;
  const deleteForm = document.forms["delete-user-form"];
  const btnDeleteUser = document.getElementById("btn-delete-user");

  $("#delete-user-modal").on("show.bs.modal", function (event) {
    var button = $(event.relatedTarget); // Button that triggered the modal
    UserID = button.data("id");
  });
  btnDeleteUser.onclick = function (e) {
    deleteForm.action = "admin/" + UserID;
    deleteForm.submit();
  };
});

function modal7how() {
  modal7Ele.style.display = "block";
}
function modal7close() {
  modal7Ele.style.display = "none";
}
document.addEventListener("DOMContentLoaded", () => {
  let SongID;
  const deleteSongForm = document.forms["delete-song-form"];
  const btnDeleteSong = document.getElementById("btn-delete-song");

  $("#delete-song-modal").on("show.bs.modal", function (event) {
    const button = $(event.relatedTarget);
    SongID = button.data("id");
  });
  btnDeleteSong.onclick = function (e) {
    deleteSongForm.action = "/login/admin/songmanagement/" + SongID;
    deleteSongForm.submit();
  };
});
