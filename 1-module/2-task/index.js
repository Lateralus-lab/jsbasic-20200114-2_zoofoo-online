function isValid(name) {
  if (!name || name.indexOf(' ') !== -1 || name.length < 4) {
    return false;
<<<<<<< HEAD
=======
  }

  return true;
}

function sayHello() {
  const userName = prompt('Введите ваше имя');

  if (isValid(userName)) {
    print(`Welcome back, ${userName}!`);
  } else {
    print('Некорректное имя');
>>>>>>> 59108504a6cb86e8a45995c9fa01dc70e51a0cd5
  }

  return true;
}

function sayHello() {