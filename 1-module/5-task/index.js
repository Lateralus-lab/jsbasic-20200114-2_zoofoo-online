function truncate(str, maxlength) {
<<<<<<< HEAD
    let strLength = str.length;
    let isExceedMaxlength = strLength > maxlength;

    if (isExceedMaxlength) {
        let shortenStr = str.slice(0, maxlength - 1);

        return `${shortenStr}…`;
    }

    return str;
}
=======
  let strLength = str.length;
  let isExceedMaxlength = strLength > maxlength;

  if (isExceedMaxlength) {
    let shortenStr = str.slice(0, maxlength - 1);

    return `${shortenStr}…`;
  }

  return str;
}
>>>>>>> 46e79d19ec886f6b4a2c6edc5f3f2efbfd12ce66
