const boxes = document.querySelectorAll(".draggable_box");

$(document).ready(function () {
  $(".draggable_box").draggable({
    start: function () {
      if ($(this).hasClass("off")) {
        return false;
      }
    },
    drag: function (event, ui) {
      if ($(this).hasClass("off")) {
        return false;
      }
    },
  });

  $(".draggable_box").on("dblclick", function (event) {
    var clickedBox = event.target;
    console.log(clickedBox);
    boxes.forEach(function (box) {
      if (box !== clickedBox) {
        if (box.classList.contains("on")) {
          box.classList.remove("on");
          box.classList.add("off");
          box.innerHTML = "Sorry, No more draggable :(";
        } else {
          box.classList.add("on");
          box.classList.remove("off");
          box.innerHTML = "Hi! I'm a draggable box";
        }
      }
    });
  });
});
