const setupDatabase = require("./lib/db");
const setupPost = require("./lib/post");
const setupPostModel = require("./models/post");

module.exports = async function (config) {
  const sequelize = setupDatabase(config);
  const PostModel = setupPostModel(config);

  await sequelize.authenticate();

  if (config.setup) {
    await sequelize.sync({ force: true });
  }

  const Post = setupPost(PostModel);
  
  return {
    Post,
  };
};
