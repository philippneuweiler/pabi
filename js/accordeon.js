var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var bildinfo = this.nextElementSibling;
    if (bildinfo.style.maxHeight) {
      bildinfo.style.maxHeight = null;
    } else {
      bildinfo.style.maxHeight = bildinfo.scrollHeight + "px";
    } 
  });
}

var acc = document.getElementsByClassName("acc");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var bildinfo = this.nextElementSibling;
    if (bildinfo.style.maxHeight) {
      bildinfo.style.maxHeight = null;
    } else {
      bildinfo.style.maxHeight = bildinfo.scrollHeight + "px";
    } 
  });
}