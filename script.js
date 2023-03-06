const playground = document.querySelector('.playground');
const blockWidth = 150;
const blockHeight = 30;

//Create block
class Block {
    constructor(xAxis, yAxis) {
        this.topLeft = [xAxis, yAxis];
        this.topRight = [xAxis + blockWidth, yAxis]
        this.bottomLeft = [xAxis, yAxis + blockHeight];
        this.bottomRight = [xAxis + blockWidth, yAxis + blockHeight];
    }
}

//All blocks
const blocks = [
    new Block(45,40),
    new Block(205,40),
    new Block(365,40),
    new Block(525,40),
    new Block(685,40),
    new Block(845,40),
    new Block(1005,40),
    new Block(45, 80),
    new Block(205,80),
    new Block(365,80),
    new Block(525,80),
    new Block(685,80),
    new Block(845,80),
    new Block(1005,80),
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
}

addBlocks();