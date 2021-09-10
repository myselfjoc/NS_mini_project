// For Contact Button
var contactPage = document.getElementById("contactPage");
var contactBtn = document.getElementById("contactBtn");
var contactClose = document.getElementsByClassName("close")[0];

contactBtn.onclick = function () {
  contactPage.style.display = "block";
};

contactClose.onclick = function () {
  contactPage.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == contactPage) {
    contactPage.style.display = "none";
  }
};
