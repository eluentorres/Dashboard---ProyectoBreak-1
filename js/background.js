const images = [
  "assets/img/bg1.jpg",
  "assets/img/bg2.jpg",
  "assets/img/bg3.jpg",
  "assets/img/bg4.jpg",
  "assets/img/bg5.jpg",
  "assets/img/bg6.jpg",
  "assets/img/bg7.jpg",
  "assets/img/bg8.jpg",
  "ssets/img/bg9.jpg",
  "assets/img/bg10.jpg"
];

const basePath = window.location.pathname.includes("/pages/") ? "../" : "";

function changeBackground() {
  const randomIndex = Math.floor(Math.random() * images.length);
  const selectedImage = basePath + images[randomIndex];

  document.body.style.backgroundImage = `url('${selectedImage}')`;
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundPosition = "center";
  document.body.style.backgroundRepeat = "no-repeat";
}

changeBackground();
setInterval(changeBackground, 15000);

console.log("background.js funcionando");