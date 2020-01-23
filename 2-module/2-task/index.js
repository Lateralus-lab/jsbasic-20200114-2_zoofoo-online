/**
 * Проверяем объект obj на пустоту
 * @param {Object} obj
 * @returns {Boolean}
 */
function isEmpty(obj) {
<<<<<<< HEAD
  for (const key in obj) {
    return false;
  }
  return true;
=======
  for (const key in obj) {
    return false;
  }
  return true;
>>>>>>> 54055b731cb82ca642dea8199191587e231a4fea
}

let calculator = {
  read(a, b) {
    this.a = a;
    this.b = b;
  },

  sum() {
    return this.a + this.b;
  },

  mul() {
    return this.a * this.b;
  },
};
