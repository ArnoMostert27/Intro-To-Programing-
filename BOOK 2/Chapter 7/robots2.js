// Eyes color
document.getElementById("lefteye").style.backgroundColor = "WHITE";
document.getElementById("head").style.transform = "rotate(15deg)";
document.getElementById("body").style.border = "2px solid black";
document.getElementById("mouth").style.borderRadius = "4px";
document.getElementById("righteye").style.border = "4px yellow dotted";
document.getElementById("leftarm").style.backgroundColor = "#000dff";
document.getElementById("body").style.color = "#FF0000";
document.getElementById("head").style.borderTop = "10px black solid";

// Eye animation
var rightEye = document.getElementById("righteye");
rightEye.addEventListener("click", moveUpDown);
function moveUpDown(e) {
    var robotPart = e.target;
    var top = 0;
    var id = setInterval(frame, 10);
    function frame() {
        robotPart.style.top = top + '%';
        top++;
        if (top === 20) clearInterval(id);
    }
}

// Left arm animation
var leftArm = document.getElementById("leftarm");
leftArm.addEventListener("click", moveRightLeft);
function moveRightLeft(e) {
    var robotPart = e.target;
    var left = 0;
    var id = setInterval(frame, 10);
    function frame() {
        robotPart.style.left = left + '%';
        left++;
        if (left === 73) clearInterval(id);
    }
}

// Hands wiggle on click
document.getElementById("lefthand").addEventListener("click", wiggle);
document.getElementById("righthand").addEventListener("click", wiggle);
function wiggle(e) {
    var part = e.target;
    var deg = 0;
    var id = setInterval(frame, 20);
    function frame() {
        part.style.transform = `rotate(${deg}deg)`;
        deg += 5;
        if (deg > 20) {
            clearInterval(id);
            part.style.transform = "rotate(0deg)";
        }
    }
}


// Walking legs animation

var leftLeg = document.getElementById("leftleg");
var rightLeg = document.getElementById("rightleg");
var leftFoot = document.getElementById("leftfoot");
var rightFoot = document.getElementById("rightfoot");

var step = 0;
setInterval(() => {
    // Move legs back and forth
    var angle = Math.sin(step) * 15; // swing +-15deg
    leftLeg.style.transform = `rotate(${angle}deg)`;
    rightLeg.style.transform = `rotate(${-angle}deg)`;
    leftFoot.style.transform = `rotate(${angle}deg)`;
    rightFoot.style.transform = `rotate(${-angle}deg)`;
    step += 0.1;
}, 50);

// --------------------------
// Arms swing on click
// --------------------------
var rightArm = document.getElementById("rightarm");
var leftArm = document.getElementById("leftarm");

function swingArm(part) {
    var deg = 0;
    var direction = 1;
    var id = setInterval(() => {
        part.style.transform = `rotate(${deg}deg)`;
        deg += 5 * direction;
        if (deg >= 20 || deg <= -20) direction *= -1;
    }, 50);

    // Stop swinging after 2 seconds
    setTimeout(() => {
        clearInterval(id);
        part.style.transform = "rotate(0deg)";
    }, 2000);
}

rightArm.addEventListener("click", () => swingArm(rightArm));
leftArm.addEventListener("click", () => swingArm(leftArm));
