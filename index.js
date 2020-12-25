const ytdl = require("ytdl-core");
const cors = require("cors");
// console.log(ytdl);
console.log(__dirname);
const fs = require("fs");
const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3000;
const app = new express();
app.use(cors());
app.use(express.json());

app.use("/downloads", express.static(path.join(__dirname, "downloads")));
app.get("/download", async (req, res) => {
  //   console.log(req);
  const url = req.query.url;
  const filename = req.query.file;
  await ytdl(url).pipe(
    fs.createWriteStream("./downloads/" + filename + ".mp4")
  );
  // res.sendFile("./downloads/123.mp4");
  // res.redirect("downloads/" + filename + ".mp4");
  res.send({ message: "hello" });
});

app.listen(PORT, () => {
  console.log("Server up on port ", PORT);
});
