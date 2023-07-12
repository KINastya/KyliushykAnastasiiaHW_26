var randomNumber = Math.floor(Math.random() * 9) + 1;

var img = document.getElementById("randomImage");
img.src = "images/" + randomNumber + ".png";