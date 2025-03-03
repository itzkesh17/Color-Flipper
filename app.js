let textColor = document.getElementById('textColor');
let changeColor = document.querySelector('.changeColor');
let colors = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

function flipColor() {
    let colorFlip = Math.floor(Math.random()*16);
    return colors[colorFlip];
}

function btnChange() {
    let text = "#";
    for(let i=0; i<=5;i++){
        text += flipColor();
    }
    textColor.innerHTML = text;
    changeColor.style.backgroundColor = text;   
}