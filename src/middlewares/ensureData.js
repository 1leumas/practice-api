const ensureData = (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: 'Missing data' });
  }
  next();
};

module.exports = ensureData;
