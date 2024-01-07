const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]
let btn = document.querySelector('.btn');
let colorName = document.querySelector('.colorName');
let body = document.querySelector('body');


btn.addEventListener('click', function () {
    let rnd = "";
    let hexColor = "";
    for (let i = 0; i < 6; i++) {
        rnd += hex[getRandom()].toString();
    }

    hexColor = "#" + rnd;

    body.style.backgroundColor = hexColor;
    colorName.innerText = hexColor;
    colorName.style.color = hexColor;
    btn.style.color = hexColor;


})

function getRandom(){
    return Math.floor(Math.random() * hex.length);
}