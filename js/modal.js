// FA modal general
const faModal = document.getElementById("faModal");
const faBtn1 = document.querySelector(".item01-text");
const faBtn2 = document.getElementById("faModalLink2");
const faX = document.getElementsByClassName("faClose")[0];

faBtn1.onclick = function() {
  faModal.style.display = "block";
}
faBtn2.onclick = function() {
  faModal.style.display = "block";
}

faX.onclick = function() {
  faModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target === faModal) {
    faModal.style.display = "none";
  }
}

// FA modal thumb link to full size

const container = document.querySelector("#display-container");
const faThumb01 = document.querySelector(".thumb01");
const faThumb02 = document.querySelector(".thumb02");
const faThumb03 = document.querySelector(".thumb03");
const faThumb04 = document.querySelector(".thumb04");
const faThumb05 = document.querySelector(".thumb05");
const faThumb06 = document.querySelector(".thumb06");

faThumb01.onclick = function() {
  container.src = 'imgs/fa-01.jpg';
};
faThumb02.onclick = function() {
  container.src = 'imgs/fa-02.jpg';
};
faThumb03.onclick = function() {
  container.src = 'imgs/fa-03.jpg';
};
faThumb04.onclick = function() {
  container.src = 'imgs/fa-04.jpg';
};
faThumb05.onclick = function() {
  container.src = 'imgs/fa-05.jpg';
};
faThumb06.onclick = function() {
  container.src = 'imgs/fa-06.jpg';
};
