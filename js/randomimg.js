// Get a list of all the files in the folder
const fileNames = [
  'img/pirate-logo-color.png',
  'img/pirate-logo-color-new.png',
  'img/missingno.png',
  'img/thevoid.jpg',
  'img/floppysl.png',
];

// Get a random index from the list of file names
const randomIndex = Math.floor(Math.random() * fileNames.length);

// Get the file name at the random index
const randomFileName = fileNames[randomIndex];

// Get the image element
const imageElement = document.getElementById('random-image');

// Set the src attribute of the image element to the random file name
imageElement.src = randomFileName;
