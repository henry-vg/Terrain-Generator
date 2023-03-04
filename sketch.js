let numCellsX, numCellsY;
const cellSize = 20;
const xInc = 0.2;
const yInc = 0.2;
const minHeight = -50;
const maxHeight = 100;
let terrain = [];

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
    numCellsX = width / cellSize;
    numCellsY = height / cellSize;
    angleMode(DEGREES);
    drawTerrain();
}

function drawTerrain() {
    let xoff = 0;
    for (let i = 0; i < numCellsX; i++) {
        let yoff = 0;
        terrain.push([]);
        for (let j = 0; j < numCellsY; j++) {
            terrain[i].push(map(noise(xoff, yoff), 0, 1, minHeight, maxHeight));
            yoff += yInc;
        }
        xoff += xInc;
    }
    background(0);
    stroke(0);
    fill(255, 150);
    rotateX(60);
    translate(-width / 2, -height / 2 + 50);
    for (let j = 0; j < numCellsY - 1; j++) {
        beginShape(TRIANGLE_STRIP);
        for (let i = 0; i < numCellsX; i++) {
            vertex(i * cellSize, j * cellSize, terrain[i][j]);
            vertex(i * cellSize, (j + 1) * cellSize, terrain[i][j + 1]);
        }
        endShape();
    }
}