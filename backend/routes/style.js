const styleRouter = require('express').Router();
const { db } = require('../config/conf');

styleRouter.get('/colors', async (req, res) => {
  const sql = `SELECT id, color FROM colors`;

  try {
    const [colors] = await db.query(sql);

    if (!colors.length)
      throw new CustomError('no color in the database', 'ER_NO_COLORS');
    res.status(200).json(colors);
  } catch (err) {
    if (err.code === 'ER_NO_USERS') {
      res.status(404).send(err.message);
    } else {
      res.status(500).send('Error retrieving color(s) from database');
      console.log(err);
    }
  }
});

module.exports = styleRouter;
