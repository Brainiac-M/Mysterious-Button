const changeColor = document.querySelector('.black-spot');

changeColor.addEventListener('mousemove', movement);

function movement(e) {
    document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 150)`;
}