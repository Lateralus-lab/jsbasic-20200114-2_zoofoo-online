/**
 * @param {string} str
 * @returns {string}
 */
function camelize(str) {
<<<<<<< HEAD
    if (!str) {
        return str;
    }

    return str
        .split('-')
        .map((part, index) => {

            if (index === 0) {
                return part;
            }

            let firstLetter = part.slice(0, 1);
            let rest = part.slice(1);

            return `${firstLetter.toUpperCase()}${rest}`;
        })
        .join('');
=======
  if (!str) {
    return str;
  }

  return str
    .split('-') // разбивает 'my-long-word' на массив ['my', 'long', 'word']
    .map((part, index) => {
      // Переводит в верхний регистр первые буквы всех элементом массива за исключением первого
      // превращает ['my', 'long', 'word'] в ['my', 'Long', 'Word']
      if (index === 0) { // Это нужно делать, чтобы не делать заглавной первую часть
        return part;
      }

      let firstLetter = part.slice(0, 1);
      let rest = part.slice(1);

      return `${firstLetter.toUpperCase()}${rest}`;
    })
    .join('');
>>>>>>> 72d03dd85a347dc54631ca11540aaf9df21555b3
}
