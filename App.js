


function showText(number) {
  if (number === 1) {
    document.querySelector("#desc1").classList.remove("hideText");
    document.querySelector("#desc1").classList.add("showText");
  } else if (number === 2) {
    document.querySelector("#desc2").classList.remove("hideText");
    document.querySelector("#desc2").classList.add("showText");
  } else if (number === 3) {
    document.querySelector("#desc3").classList.remove("hideText");
    document.querySelector("#desc3").classList.add("showText");
  }else {
    document.querySelector("#desc4").classList.remove("hideText");
    document.querySelector("#desc4").classList.add("showText");
  }
}

function hideText(number) {
  if (number === 1) {
    document.querySelector("#desc1").classList.remove("showText");
    document.querySelector("#desc1").classList.add("hideText");
  } else if (number === 2) {
    document.querySelector("#desc2").classList.remove("showText");
    document.querySelector("#desc2").classList.add("hideText");
  } else if (number === 3) {
    document.querySelector("#desc3").classList.remove("showText");
    document.querySelector("#desc3").classList.add("hideText");
  }else {
    document.querySelector("#desc4").classList.remove("showText");
    document.querySelector("#desc4").classList.add("hideText");
  }
}

function changeText(){
  document.querySelector(".take-photo").classList.remove("reText");
  document.querySelector(".take-photo").classList.add("changeText");
  
}
function reText(number){
  document.querySelector(".take-photo").classList.remove("changeText");
  document.querySelector(".take-photo").classList.add("reText");
}

function replace_image(number) {
  const fileInput = document.createElement("input");
  fileInput.type = "file";
  
  fileInput.addEventListener("change", function(event) {
      const file = event.target.files[0];
      const reader = new FileReader();

      reader.onload = function(e) {
        previewImage = e.target.result;
        if(number === 1){
         document.getElementById('image1').style.backgroundImage=`url(${previewImage})`
        } else if (number === 2){
          document.getElementById('image2').style.backgroundImage=`url(${previewImage})`
        } else if (number === 3){
          document.getElementById('image3').style.backgroundImage=`url(${previewImage})`
        } else if (number === 4){
          document.getElementById('image4').style.backgroundImage=`url(${previewImage})`
        }
      }
      reader.readAsDataURL(file);
  });

  fileInput.click();
}

function downloadImg (){
  html2canvas(document.querySelector("#export")).then(canvas => {
    let imgData = canvas.toDataURL();
    let a = document.createElement('a');
    a.href = imgData;
    a.download = 'image.png';
    a.click();
  });
}


function chageFrameColor(number) {
  var color;
  switch(number){
      case 1: 
          color = 'black'; 
          text = 'white';
          break;
      case 2:
          color = 'white'; 
          text = 'black';
          break;
      case 3: 
          color = '#7FFF00'; 
          text = 'white';
          break;
      case 4: 
          color = '#871B4D'; 
          text = 'white';
          break;
      case 5: 
          color = '#0000FF'; 
          text = 'white';
          break;
      default: 
          color = 'black';
          text = 'white';
  }
  document.querySelector("#export").style.backgroundColor = color;
  document.querySelector(".f-title").style.color = text;
  document.querySelector(".f-date").style.color = text;
}

  
  
