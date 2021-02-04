"use strict";

const setupDatabase = require("./db");

module.exports = function setupPost(PostModel) {
  async function createOrUpdate(post) {
    console.log(post)
    if (!post.postId) {
      return PostModel.create(post);
    }

    const cond = {
      where: {
        postId: post.postId,
      },
    };
    const existingPost = await PostModel.findOne(cond);

    if (existingPost) {
      const updatedPost = await PostModel.update(post, cond);

      return updatedPost;
    }
  }

  function findAll() {
    return PostModel.findAll()
  }

  return {
    createOrUpdate,
  };
};
