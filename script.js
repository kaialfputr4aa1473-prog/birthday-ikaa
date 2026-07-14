document.addEventListener("DOMContentLoaded", function () {
  alert("Happy Birthday Ikaa ❤️🎉");

  const btn = document.getElementById("playMusic");

  if (btn) {
    btn.addEventListener("click", function () {
      document.getElementById("music").play();
    });
  }
});
