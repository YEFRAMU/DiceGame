const randomNumber1 = Math.floor(Math.random() * 6) + 1;
console.log(randomNumber1);
document.querySelector(".img1").setAttribute("src", "./images/dice" + randomNumber1 + ".png")

const randomNumber2 = Math.floor(Math.random() * 6) + 1;
console.log(randomNumber2);
document.querySelector(".img2").setAttribute("src", "./images/dice" + randomNumber2 + ".png")


