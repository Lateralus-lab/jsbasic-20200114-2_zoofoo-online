/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
<<<<<<< HEAD
    let segments = str.match(/(-|\+)?[\d]+(\.[\d]+)?/ig) || [];

    segments = segments.map(seg => parseFloat(seg));

    return {
        min: Math.min(...segments),
        max: Math.max(...segments),
    };
=======
  let segments = str.match(/(-|\+)?[\d]+(\.[\d]+)?/ig) || [];

  segments = segments.map(seg => parseFloat(seg));

  return {
    min: Math.min(...segments),
    max: Math.max(...segments),
  };
>>>>>>> 72d03dd85a347dc54631ca11540aaf9df21555b3
}
