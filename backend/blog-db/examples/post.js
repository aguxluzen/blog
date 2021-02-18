"use strict";

const db = require("../");

async function run() {
  const { Post } = await db({
    database: process.env.DATABASE || "blogDB",
    username: process.env.USERNAME || "postgres",
    password: "datalake",
    host: "127.0.0.1",
    port: "5432",
    dialect: "postgres",
    setup: false,
  }).catch((err) => {
    console.error(err);
    process.exit(1);
  });

  const newPost = await Post.createOrUpdate({
    body: "MI BODY",
    title: "MI TITULO",
  });
  console.log(newPost);
}

run()