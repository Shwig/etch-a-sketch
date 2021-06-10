window.addEventListener("load", appInit, true); function appInit() {
    drawGrid();
    changePixelColor();

    document.getElementById('reset-btn').addEventListener('click', () => {
        clearGrid();
    });

    document.getElementById('resize-btn').addEventListener('click', () => {
        resizeGrid();
    });
};

function changePixelColor() {
    const pixels = document.querySelectorAll('.sketch-pixel');
    pixels.forEach(pixel => {
        pixel.addEventListener('mouseover', (e) => {
            e.target.style.backgroundColor = "orange";
        });
    });
}

function drawGrid(size = 16) {
    for (let i = 1; i <= size; i++) {
        for (let j = 1; j <= size; j++) {
            let d = document.createElement('div');
            d.classList.add('sketch-pixel');
            document.getElementById('sketch-container').appendChild(d);
        }
    }
}

function clearGrid() {
    const pixels = document.querySelectorAll('.sketch-pixel');
    pixels.forEach(pixel => pixel.style.backgroundColor = "white");
}

function resizeGrid() {
    
    let size = prompt("Choose new gride size 16-100:");
    drawGrid(size);
}
