let modal = document.getElementById("modal-box");

let button = document.getElementById("menuBtn");

let closeBtn = document.getElementsByClassName("close-btn")[0];

button.addEventListener("click", function() {
  modal.style.display = "block";
})


closeBtn.addEventListener("click", function() {
  modal.style.display = "none";
})

window.addEventListener("click", function(){
  if (event.target === modal) {
    modal.style.display = "none";
  }
})