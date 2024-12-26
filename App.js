function showText(number) {
  const desc = document.querySelector(`#desc${number}`);
  if (desc) {
    desc.classList.remove("hideText");
    desc.classList.add("showText");
  }
}

function hideText(number) {
  const desc = document.querySelector(`#desc${number}`);
  if (desc) {
    desc.classList.remove("showText");
    desc.classList.add("hideText");
  }
}

function changeText() {
  const takePhoto = document.querySelector(".take-photo");
  if (takePhoto) {
    takePhoto.classList.remove("reText");
    takePhoto.classList.add("changeText");
  }
}

function reText() {
  const takePhoto = document.querySelector(".take-photo");
  if (takePhoto) {
    takePhoto.classList.remove("changeText");
    takePhoto.classList.add("reText");
  }
}

function replaceImage(number) {
  const fileInput = document.createElement("input");
  fileInput.type = "file";

  fileInput.addEventListener("change", function(event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = function(e) {
        const previewImage = e.target.result;
        const imageElement = document.getElementById(`image${number}`);
        if (imageElement) {
          imageElement.style.backgroundImage = `url(${previewImage})`;
        }
      };
      reader.readAsDataURL(file);
    }
  });

  fileInput.click();
}

function downloadImg() {
  html2canvas(document.querySelector("#export")).then(canvas => {
    const imgData = canvas.toDataURL();
    const a = document.createElement("a");
    a.href = imgData;
    a.download = "image.png";
    a.click();
  });
}

function changeFrameColor(number) {
  const colors = [
    { background: "black", text: "white" },
    { background: "white", text: "black" },
    { background: "#7FFF00", text: "white" },
    { background: "#871B4D", text: "white" },
    { background: "#0000FF", text: "white" }
  ];

  const colorScheme = colors[number - 1] || colors[0];
  const exportElement = document.querySelector("#export");
  const titleElement = document.querySelector(".f-title");
  const dateElement = document.querySelector(".f-date");

  if (exportElement) exportElement.style.backgroundColor = colorScheme.background;
  if (titleElement) titleElement.style.color = colorScheme.text;
  if (dateElement) dateElement.style.color = colorScheme.text;
}
