module.exports = (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    
    if (req.method === 'OPTIONS') {
      res.status(204).end();
      return;
    }
    
    const randomNumber = Math.floor(Math.random() * 100); // Генерируем случайное число от 0 до 99
    res.status(200).json({ number: randomNumber });
  };