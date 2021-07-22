const styleRouter = require('./style');
const projectsRouter = require('./projects');

const setupRoutes = (app) => {
  app.use('/style', styleRouter);
  app.use('/projects', projectsRouter);
};

module.exports = {
  setupRoutes,
};
