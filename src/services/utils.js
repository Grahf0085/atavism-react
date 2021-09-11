import backgrounds from './backgrounds.js';

export function backgroundFunction() {

  const randIndex = Math.floor(Math.random() * backgrounds.length);
  const bodyThing = document.querySelector('body');
  const bg = backgrounds[randIndex];
  bodyThing.style.backgroundImage = `linear-gradient(360deg, rgba(0, 0, 0, 1),
   rgba(0, 0, 0, .9)), url(${bg})`;
  bodyThing.style.backgroundRepeat = 'no-repeat';
  bodyThing.style.backgroundSize = 'cover';
  bodyThing.style.backgroundPosition = 'center center';

}

export function jobConverter(jobNumber) {

  const textRace = ['', 'WAR', 'MNK', 'WHM', 'BLM', 'RDM', 'THF', 'PLD', 'DRK', 'BST', 'BRD', 'RNG', 'SAM', 'NIN', 'DRG', 'SMN'][jobNumber];

  return textRace;
  
}

export function formatAdventurer(race, face) {

  const textRace = ['', 'hm', 'hf', 'em', 'ef', 'tm', 'tf', 'mf', 'gm'][race];
  const textFace = Math.floor((face + 2) / 2);
  const textHair = ['a', 'b'][face % 2];
  return `${textRace}${textFace}${textHair}`;

}


