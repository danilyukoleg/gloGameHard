"use strict";

let getStart = () => {
  let num = Math.floor(Math.random() * (100 - 1)) + 1;
  let lock = 10;

  return function botQuess() {
    let start = prompt("Угадай число от 1 до 100");

    if (parseInt(start) == num) {
      let conf = confirm(`Поздравляю, Вы угадали!!! Хотели бы сыграть еще?`);
      if (conf === true) {
        getStart()();
      } else {
        alert("Игра окончена");
      }
    } else if (parseInt(start) > num) {
      lock--;
      alert(`Загаданное число меньше, осталось попыток ${lock}`);
      botQuess();
    } else if (parseInt(start) < num) {
      lock--;
      alert(`Загаданное число больше, осталось попыток ${lock}`);
      botQuess();
    }
    console.log(start);

    if ((isNaN(start) && !isFinite(start)) || start.trim() === "") {
      confirm("Введи число!");
      botQuess();
    }

    if (start === null) {
      alert("Игра окончена");
    }

    if (lock == 0) {
      confirm("Попытки закончились, хотите сыграть еще?");
      getStart()();
    }
  };
};

getStart()();
