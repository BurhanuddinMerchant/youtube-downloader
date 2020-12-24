const ytdl = require("ytdl-core");
const ejs = require("ejs");
console.log(ytdl);
const fs = require("fs");

ytdl("https://www.youtube.com/watch?v=d09-P9R5BRE&ab_channel=K-391").pipe(
  fs.createWriteStream("video.mp4")
);
