/**
 * Генерация HTML списка друзей
 * @param {Object[]} friends
 * @return {HTMLUListElement}
 */
function makeFriendsList(friends) {
<<<<<<< HEAD
    const ul = document.createElement('ul');

    ul.innerHTML = friends.map(item => `
        <li>${item.firstName} ${item.lastName}</li>
    `).join('');

    return ul;
=======
  const ul = document.createElement('ul');

  ul.innerHTML = friends.map(item => `
      <li>${item.firstName} ${item.lastName}</li>
  `).join('');

  return ul;
>>>>>>> fa3ad7884331f6fa43f3f025a1ba8efe084752bc
}
