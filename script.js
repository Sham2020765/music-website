let box = document.getElementById("box");
let pos = 0;

setInterval(function() {
  pos = pos + 2;
  box.style.left = pos + "px";
}, 30);
