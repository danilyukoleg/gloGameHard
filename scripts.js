"use strict";

let quessTheNumber;

function botNumber() {
  let num = 22;
  function botQuess() {
    quessTheNumber = prompt("Угадай число от 1 до 100");

    if (isNaN(quessTheNumber)) {
      alert("Введите число!");
      botQuess();
    }

    if (quessTheNumber === null) {
      alert("Игра окончена");
    }

    if (parseInt(quessTheNumber) === num) {
      alert("Поздравляю, Вы угадали!!!");
    } else if (parseInt(quessTheNumber) > num) {
      alert("Загаданное число меньше");
      botQuess();
    } else if (parseInt(quessTheNumber) < num) {
      alert("Загаданное число больше");
      botQuess();
    }
  }

  botQuess();
}

botNumber();
