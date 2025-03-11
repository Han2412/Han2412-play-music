const btnEditUserEle = document.querySelector(".btn-edit-user");
const btnEditPasswordEle = document.querySelector(".btn-edit-password");
const btnLogOutEle = document.querySelector(".btn-log-out");
const modal3Ele = document.querySelector(".modal-3");
const modal4Ele = document.querySelector(".modal-4");
console.log(modal3Ele);
//modal chỉnh sửa thông tin user
document.addEventListener("click", function (e) {
  if (
    e.target === btnEditUserEle ||
    e.target.closest(".edit-user-information")
  ) {
    modal3Ele.style.display = "block";
  } else {
    modal3Ele.style.display = "none";
  }
  if (e.target.closest(".btn-confirm")) {
    modal3Ele.style.display = "none";
  }
});

//modal thay đổi mật khẩu
document.addEventListener("click", (e) => {
  if (e.target === btnEditPasswordEle || e.target.closest(".change-password")) {
    modal4Ele.style.display = "block";
  } else {
    modal4Ele.style.display = "none";
  }
  if (e.target.closest(".btn-confirm")) {
    modal4Ele.style.display = "none";
  }
});

btnLogOutEle.addEventListener("click", () => {
  location.href = "../play-music/index.html";
});
