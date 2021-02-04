const { searchPosts } = require("../providers/posts.provider");

async function getPostsController(req, res, next) {
  //anda pegale a sql y busca datos
  //ordena los datos
  try {
    const posts = await searchPosts();
    res.status(200).json(posts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "lakjdlasjdlkasd" });
  }
}

module.exports = {
  getPostsController,
};
