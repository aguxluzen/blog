"use strict";

const db = require("./");

async function setup() {
  await db({
    database: process.env.DATABASE || "blogDB",
    username: process.env.USERNAME || "postgres",
    password: "datalake",
    host: "127.0.0.1",
    port: "5432",
    dialect: "postgres",
    setup: true,
  }).catch((err) => {
    console.error(err);
    process.exit(1);
  });

  console.log("YUJUUUU");
  process.exit(0);
}

setup();
