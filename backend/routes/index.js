const styleRouter = require('./style');

const setupRoutes = (app) => {
  app.use('/style', styleRouter);
};

module.exports = {
  setupRoutes,
};
