// Intro click
$('.intro-flex').on('click', function() {
    $('.intro-flex').addClass('intro-off');
    setTimeout(function() {
        $('.main-flex div').addClass('section-on');
    }, 1350);
});

// Animation end event listener
const e = document.getElementById("a");
e.addEventListener("animationend", (ev) => {
  if (ev.type === "animationend") {
    e.style.display = "none";
  }
}, false);
