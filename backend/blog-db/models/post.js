"use strict";
const Sequelize = require("sequelize");
const setupDatabase = require("../lib/db");

module.exports = function setupPostModel(config) {
  const sequelize = setupDatabase(config);

  return sequelize.define("post", {
    postId: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    body: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  });
};
