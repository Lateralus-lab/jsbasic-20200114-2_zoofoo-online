function isValid(name) {
  if (!name || name.indexOf(' ') !== -1 || name.length < 4) {
    return false;
  }

  return true;
}

function sayHello() {