var images = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"]
var randomNumber1 = Math.floor(Math.random() * images.length)

document.querySelector(".img1").src = images[randomNumber1]