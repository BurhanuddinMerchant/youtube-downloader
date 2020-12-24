const ytdl = require("ytdl-core");
const ejs = require("ejs");
const cors = require("cors");
console.log(ytdl);
const fs = require("fs");
const express = require("express");
const { request } = require("https");
const PORT = process.env.PORT || 3000;
const app = new express();
app.use(cors());
app.use(express.json());
app.get("/download", (req, res) => {
  console.log(req);
  const url = req.query.url;
  const filename = req.query.file;
  ytdl(url).pipe(fs.createWriteStream("./downloads/" + filename + ".mp4"));
  res.send({ message: "hello there " });
});
app.listen(PORT, () => {
  console.log("Server up on port ", PORT);
});
// ytdl("https://www.youtube.com/watch?v=d09-P9R5BRE&ab_channel=K-391").pipe(
//   fs.createWriteStream("video.mp4")
// );
