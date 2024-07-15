const ensureUserData = (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: 'Missing data' });
  }
  next();
};

function ensureExerciseData(req, res, next) {
  const { name, category } = req.body;
  if (!name || !category) {
    return res.status(400).json({ error: 'Name and category are required' });
  }
  next();
}

module.exports = { ensureUserData, ensureExerciseData };
