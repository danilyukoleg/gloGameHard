"use strict";

let quessTheNumber;

function botNumber() {
  let num = 22;
  let res = 10;
  function botQuess() {
    quessTheNumber = prompt("Угадай число от 1 до 100");

    if (isNaN(quessTheNumber) || quessTheNumber == "") {
      alert("Введите число!");
      botQuess();
    }

    if (quessTheNumber === null) {
      alert("Игра окончена");
    }

    if (parseInt(quessTheNumber) === num) {
      confirm("Поздравляю, Вы угадали!!! Хотели бы сыграть еще?");
      res = 10;
    } else if (parseInt(quessTheNumber) > num) {
      res--;
      alert(`Загаданное число меньше ,осталось попыток ${res}`);
      botQuess();
    } else if (parseInt(quessTheNumber) < num) {
      res--;
      alert(`Загаданное число больше, осталось попыток ${res}`);
      botQuess();
    }

    if (res >= 0) {
      confirm("Попытки закончились, хотите сыграть еще?");
      res = 10;
    }
  }

  botQuess();
}

botNumber();
