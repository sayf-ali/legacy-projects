
const Ghost = [];

function setToRandom(scale) {
    return {
        x: Math.random() * scale,
        y: Math.random() * scale
    }
}

// Factory to make a PacMan 
function makeGhost() {

    // returns an object with values scaled {x: 33, y: 21}
    let velocity = setToRandom(10);
    let position = setToRandom(200);

    // Add image to div id = game
    let game = document.getElementById('game');
    let ghostimg = document.createElement('img');
    ghostimg.style.position = 'absolute';
    ghostimg.src = 'redghost.jpg';
    ghostimg.width = 150;
    ghostimg.style.left = position.x;
    ghostimg.style.top = position.y;
    game.appendChild(ghostimg); 

    // new style of creating an object
    return {
        position,
        velocity,
        ghostimg
    }
}

function update() {
    //loop over pacmen array and move each one and move image in DOM
    Ghost.forEach((item) => {
        checkCollisions(item)
        item.position.x += item.velocity.x;
        item.position.y += item.velocity.y;
        item.ghostimg.style.left = item.position.x;
        item.ghostimg.style.top = item.position.y;
    })
    setTimeout(update, 20);
}

function checkCollisions(item) {
    if (item.position.x + item.velocity.x + item.ghostimg.width > window.innerWidth ||
        item.position.x + item.velocity.x < 0) item.velocity.x = -item.velocity.x;
    if (item.position.y + item.velocity.y + item.ghostimg.height > window.innerHeight ||
        item.position.y + item.velocity.y < 0) item.velocity.y = -item.velocity.y;
}

function makeOne() {
    Ghost.push(makeGhost()); // add a new Ghost
}




var pos = 0;
const pacArray = [
    ['PacMan1.png', 'PacMan2.png'],
    ['PacMan3.png', 'PacMan4.png']
];
var direction = 0;
var focus = 0;

function Run() {
    let img = document.getElementById("PacMan");
    let imgWidth = img.width
    focus = (focus + 1) % 2;
    direction = checkPageBounds(direction, imgWidth);
    img.src = pacArray[direction][focus];
    if (direction) {
        pos -= 20;
        img.style.left = pos + "px";
    } else {
        pos += 20;
        img.style.left = pos + 'px';
    }

    setTimeout(Run, 100);
}

function checkPageBounds(direction, imgWidth) {
    let pageWidth = window.innerWidth;
    if (direction == 0 && pos + imgWidth > pageWidth) direction = 1;
    if (direction == 1 && pos < 0) direction = 0;

    return direction;
}
