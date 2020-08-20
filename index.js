
document.getElementById('test').addEventListener("mouseover", mouseOver);

function mouseOver() {
  document.getElementById('test').style.backgroundColor = 'red';
}






const resetBtn =document.querySelector('.resetBtn');
    resetBtn.addEventListener('click', () => {
        document.getElementById('test').style.background = 'cornsilk';
    });