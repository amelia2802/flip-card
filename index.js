import mythCreature from './data.js';

console.log(mythCreature);

const card = document.querySelector('.card');
const cardBack = document.querySelector('.card-back');

// Function to get a random index from the mythCreature array
const getRandomIndex = () => Math.floor(Math.random() * mythCreature.length);
console.log(getRandomIndex());  // Corrected to call the function

// Function to set the background image of card-back with a random creature URL
const setRandomCreatureBackground = () => {
  try {
    const randomIndex = getRandomIndex();
    const randomCreatureURL = mythCreature[randomIndex].url;
    cardBack.style.backgroundImage = `url('${randomCreatureURL}')`;
    console.log('Background set successfully:', randomCreatureURL);
  } catch (error) {
    console.error('Error setting background:', error);
  }
};

// Event listener to trigger the setRandomCreatureBackground function on card hover
card.addEventListener('mouseenter', setRandomCreatureBackground);

// Reset background image when the mouse leaves the card
card.addEventListener('mouseleave', () => {
  cardBack.style.backgroundImage = '';
});
