"use strict";

let getStart = () => {
  let num = Math.floor(Math.random() * (100 - 1 + 1)) + 1;

  function botQuess() {
    let start = prompt("Угадай число от 1 до 100");

    if ((isNaN(start) && !isFinite(start)) || start === "") {
      confirm("Введи число!");
      botQuess();
    }

    if (start === null) {
      alert("Игра окончена");
    }
    if (parseInt(start) == num) {
      alert("Поздравляю, Вы угадали!!!");
    } else if (parseInt(start) > num) {
      alert("Загаданное число меньше");
      botQuess();
    } else if (parseInt(start) < num) {
      alert("Загаданное число больше");
      botQuess();
    }
  }
  botQuess();

  console.log(num);
};

console.log(getStart());
