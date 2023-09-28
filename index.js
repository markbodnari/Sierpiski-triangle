let container = document.querySelector('.container');
let width = 898;
let randomNum = () =>  Math.floor(Math.random() * 895); // Генерирует случайное число от 0 до 900
let x = randomNum();
let y = randomNum();

let createPoint = () => {
    var newDiv = document.createElement("div");
    newDiv.className = "point"; // Устанавливаем класс для нового div

    let points = [[0, Math.floor(width / 2)], [width, 0], [width, width]];

    newDiv.style.top = x +'px';
    newDiv.style.left = y + 'px';

    let choosePoint = Math.floor(Math.random() * 3);

    x = (x + points[choosePoint][0]) / 2;
    y = (y + points[choosePoint][1]) / 2;

    container.appendChild(newDiv);
}

setInterval(createPoint, 1);