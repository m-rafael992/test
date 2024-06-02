module.exports = (req, res) => {
    const randomNumber = Math.floor(Math.random() * 100); // Генерируем случайное число от 0 до 99
    res.status(200).json({ number: randomNumber });
  };