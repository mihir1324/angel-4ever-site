function cutRibbon() {
  document.getElementById("ribbon").style.display = "none";
  document.getElementById("cutSound").play();
  document.getElementById("cat-cloud").classList.remove("hidden");
  document.getElementById("balloons").classList.remove("hidden");
  document.getElementById("love-letter").classList.remove("hidden");
  document.getElementById("angel-photo").classList.remove("hidden");
  document.getElementById("comic").classList.remove("hidden");
  setTimeout(() => {
    document.getElementById("love-letter").classList.add("hidden");
  }, 30000);
}
