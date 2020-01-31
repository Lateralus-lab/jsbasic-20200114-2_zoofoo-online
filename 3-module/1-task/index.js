function showSalary(data, age) {
<<<<<<< HEAD
    return data
        .filter(item => item.age <= age)
        .map(item => `${item.name}, ${item.balance}`)
        .join('\n');
=======
  return data
    .filter(item => item.age <= age)
    .map(item => `${item.name}, ${item.balance}`)
    .join('\n');
>>>>>>> 72d03dd85a347dc54631ca11540aaf9df21555b3
}
