function readTextFile(file, callback) {
  var rawFile = new XMLHttpRequest();
  rawFile.overrideMimeType("application/json");
  rawFile.open("GET", file, true);
  rawFile.onreadystatechange = function() {
    if (rawFile.readyState === 4 && rawFile.status == "200") {
      callback(rawFile.responseText);
    }
  };
  rawFile.send(null);
}

readTextFile("data.json", function(text) {
  const json = JSON.parse(text);
  const { data } = json;

  const myCanvas = document.getElementById("myCanvas");
  myCanvas.width = 500;
  myCanvas.height = 400;

  const ctx = myCanvas.getContext("2d");

  const { width, height } = myCanvas;

  const maxSize = Math.max.apply(null, data);
  const resNum = height / maxSize;

  const elWidth = (width - data.length) / data.length;

  data.forEach((el, i) => {
    ctx.fillStyle = `#00${(data.length - 1) - i}bff`;
    ctx.fillRect(i * elWidth + i, height, elWidth, -(el * resNum));
    ctx.font = "25px Arial";
    ctx.textAlign = "center";
    ctx.fillStyle = "#000";
    ctx.fillText(el, i * elWidth + i + elWidth / 2, height - 8);
  });
});
