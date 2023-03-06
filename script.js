const playground = document.querySelector('.playground');
const blockWidth = 150;
const blockHeight = 30;

const userStart = [520, 40];
let currentPosition = userStart;

const playerSpeed = 10;

const ballStart = [582, 120];
let ballCurrentPosition = ballStart;

//Create block
class Block {
    constructor(xAxis, yAxis) {
        this.topLeft = [xAxis, yAxis];
        this.topRight = [xAxis + blockWidth, yAxis]
        this.bottomLeft = [xAxis, yAxis + blockHeight];
        this.bottomRight = [xAxis + blockWidth, yAxis + blockHeight];
    }
};

//All blocks
const blocks = [
    new Block(40,40),
    new Block(200,40),
    new Block(360,40),
    new Block(520,40),
    new Block(680,40),
    new Block(840,40),
    new Block(1000,40),
    new Block(40, 80),
    new Block(200,80),
    new Block(360,80),
    new Block(520,80),
    new Block(680,80),
    new Block(840,80),
    new Block(1000,80),
];

//Draw block
function addBlocks() {
    for(let i = 0; i < blocks.length; i++) {
        const block = document.createElement('div');
        block.classList.add('block');
        block.style.left = blocks[i].topLeft[0] + 'px';
        block.style.top = blocks[i].topLeft[1] + 'px';
        playground.appendChild(block);
    }
};

addBlocks();

//Add user
const user = document.createElement('div');
user.classList.add('user');
drawUser();
playground.appendChild(user);

//Draw user
function drawUser() {
    user.style.left = currentPosition[0] + 'px';
    user.style.bottom = currentPosition[1] + 'px';
};

//Move user
function moveUser(event) {
    switch(event.key) {
        case 'ArrowLeft':
            if(currentPosition[0] > 0) {
                currentPosition[0] -= playerSpeed;
                drawUser();
            }
            break;
        case 'ArrowRight':
            if(currentPosition[0] < 1030) {
                currentPosition[0] += playerSpeed;
                drawUser();
            }
            break;
    }
};

document.addEventListener('keydown', moveUser);

//Draw ball
function drawBall() {
    ball.style.left = ballCurrentPosition[0] + 'px';
    ball.style.bottom = ballCurrentPosition[1] + 'px';
}

//Add ball
const ball = document.createElement('div');
ball.classList.add('ball');
drawBall();
playground.appendChild(ball);

//Move ball
function moveBall() {
    ballCurrentPosition[0] +=4;
    ballCurrentPosition[1] +=4;
    drawBall();
}

setInterval(moveBall, 30);