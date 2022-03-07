//From http://thenewcode.com/81/Make-A-Starfield-Background-with-HTML5-Canvas

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var canvas = document.getElementById("starfield"),
context = canvas.getContext("2d"),
stars = 500,
colorrange = [0,60,240];
for (var i = 0; i < stars; i++) {
    var x = Math.random() * canvas.offsetWidth;
    y = Math.random() * canvas.offsetHeight,
    radius = Math.random() * 1.2,
    hue = colorrange[getRandom(0, colorrange.length - 1)],
    sat = getRandom(50,100);
    context.beginPath();
    context.arc(x, y, radius, 0, 360);
    context.fillStyle = "hsl(" + hue + ", " + sat + "%, 88%)";
    context.fill();
}
