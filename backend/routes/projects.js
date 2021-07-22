const projectsRouter = require('express').Router();
const { db } = require('../config/conf');
const { CustomError } = require('../utilities');

projectsRouter.get('/', async (req, res) => {
  const sql = `SELECT id, name, img FROM projects`;

  try {
    const [projects] = await db.query(sql);

    if (!projects.length)
      throw new CustomError('no project in the database', 'ER_NO_PROJECTS');
    res.status(200).json(projects);
  } catch (err) {
    if (err.code === 'ER_NO_PROJECTS') {
      res.status(404).send(err.message);
    } else {
      res.status(500).send('Error retrieving project(s) from database');
    }
  }
});

module.exports = projectsRouter;
