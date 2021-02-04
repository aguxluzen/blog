const setupDatabase = require("./lib/db");
const setupPost = require("./lib/post");
const setupPostModel = require("./models/post");

module.exports = async function (config) {
  const sequelize = setupDatabase(config);
  const PostModel = setupPostModel(config);

  await sequelize.authenticate();

  //Si setup esta en false no limpia la base de datos ni recrea tablas
  if (config.setup) {
    await sequelize.sync({ force: true });
  }

  const Post = setupPost(PostModel);
  
  return {
    Post,
  };
};
