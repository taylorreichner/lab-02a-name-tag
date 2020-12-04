const nameplate = document.getElementById('name-plate');
const box = document.getElementById('box');
const clickMe = document.getElementById('click-me');

clickMe.addEventListener('click', () => {

    nameplate.textContent = box.value;
});
const pinkButton = document.getElementById('pink-button');
const backColor = document.getElementById('the-red');
const greenButton = document.getElementById('green-button');
const blueButton = document.getElementById('blue-button');

pinkButton.addEventListener('click', () => {

    backColor.style.background = "pink"

});

greenButton.addEventListener('click', () => {

    backColor.style.background = "lightGreen"

});

blueButton.addEventListener('click', () => {

    backColor.style.background = "lightBlue"

});