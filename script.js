let share = document.getElementById("social");
let triangle = document.getElementById("triangle")
let btnShare = document.getElementById("share");
let display = false;

btnShare.addEventListener("click", showShareBar);

function showShareBar() {
  if (display==false){
    share.style.display = "flex";
    triangle.style.display = "flex";
    display = true;
  }
  else {
    share.style.display = "none";
    triangle.style.display = "none";
    display = false;
  }
}
