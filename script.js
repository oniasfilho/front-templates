const rightArea = document.getElementById("page-wrapper")

const changeBackgroundImage = () => {
  let randomNumber = Math.floor(Math.random() * (4 - 1) + 1)

  // rightArea.style.backgroundImage = `linear-gradient(to right bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.186)), url("/static/bg${randomNumber}.jpg,  background-repeat: no-repeat")`;
  rightArea.style.backgroundImage = `linear-gradient(to right bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.186)), url("/static/bg2-square.jpg" )`;
  rightArea.style.backgroundSize = "cover"
  // rightArea.style.backgroundPosition = "left"
  // rightArea.style = "background-size: cover"
}

changeBackgroundImage();