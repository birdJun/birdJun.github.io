const images=["0.png","1.png","2.png","3.png"];

const chosenImage=images[Math.floor(Math.random()*images.length)];

document.body.style.backgroundImage=`url(img/${chosenImage})`;

