window.addEventListener("load", appInit, true); function appInit() {

    drawGrid();
    changePixelColor();

};

function changePixelColor() {
    const pixels = document.querySelectorAll('.sketch-pixel');

    pixels.forEach(pixel => {
        pixel.addEventListener('mouseover', (e) => {
            e.target.style.backgroundColor = "orange";
        });
    });
}

function drawGrid() {
    let i = 0;
    let j = 0;

    for (i = 1; i <= 16; i++) {
        for (j = 1; j <= 16; j++) {
            let d = document.createElement('div');
            d.classList.add('sketch-pixel');
            document.getElementById('sketch-container').appendChild(d);
        }
    }
}

