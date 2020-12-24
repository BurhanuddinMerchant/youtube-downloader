const fileName = document.getElementById("output-file-name");
const youtubeUrl = document.getElementById("youtube-url-input");
const downloadContent = () => {
  const fileNameValue = fileName.value;
  const youtubeUrlValue = youtubeUrl.value;
  if (fileNameValue && youtubeUrlValue) {
    fetch(
      "http://localhost:3000/download?url=" +
        youtubeUrlValue +
        "&file=" +
        fileNameValue
    )
      .then((res) => res.json())
      .then((json) => console.log(json))
      .catch((e) => console.log(e));
  }
};
