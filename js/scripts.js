$(document).ready(function() {
  $("button#cat").click(function() {
    $("ul#cat").prepend("<li>Meow!</li>");
    $("ul#dog").prepend("<li>Bark!</li>");
  });
$("button#cat").css("background-color", "red");

  $("button#dog").click(function() {
    $("ul#cat").prepend("<li>Meow!</li>");
    $("ul#dog").prepend("<li>Bark!</li>");
  });

$("button#dog").css("background-color", "purple");
$("h1").css("text-align", "center")
var imageUrl = "img/picha.jpg";
$(".container").css("background-image", "url(" + imageUrl + ")");

});


//
//   $("button#stop").click(function() {
//     $("ul#user").prepend("<li>Stop copying me!</li>");
//     $("ul#webpage").prepend("<li>Pardon me. I meant no offense.</li>");
//   });
// });
