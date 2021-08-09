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

export function advImage(model) {
  switch(model) {
    case 'ef1a':
      return 'https://vignette.wikia.nocookie.net/ffxi/images/d/d7/Ef1a.jpg';
    case 'ef2a':
      return 'https://vignette.wikia.nocookie.net/ffxi/images/c/c1/Ef2a.jpg';
    case 'ef3a':
      return 'https://vignette.wikia.nocookie.net/ffxi/images/a/a4/Ef3a.jpg';
    case 'ef4a':
      return 'https://vignette.wikia.nocookie.net/ffxi/images/6/67/Ef4a.jpg';
    case 'ef5a':
      return 'https://vignette.wikia.nocookie.net/ffxi/images/6/62/Ef5a.jpg';
    case 'ef6a':
      return 'https://vignette.wikia.nocookie.net/ffxi/images/f/f9/Ef6a.jpg';
    case 'ef7a':
      return 'https://vignette.wikia.nocookie.net/ffxi/images/c/c6/Ef7a.jpg';
    case 'ef8a':
      return 'https://vignette.wikia.nocookie.net/ffxi/images/6/60/Ef8a.jpg';
    case 'ef1b':
      return 'https://vignette.wikia.nocookie.net/ffxi/images/c/cf/Ef1b.jpg';
    case 'ef2b':
      return 'https://vignette.wikia.nocookie.net/ffxi/images/5/5a/Ef2b.jpg';
    case 'ef3b':
      return 'https://vignette.wikia.nocookie.net/ffxi/images/d/d5/Ef3b.jpg';
    case 'ef4b':
      return 'https://vignette.wikia.nocookie.net/ffxi/images/1/19/Ef4b.jpg';
    case 'ef5b':
      return 'https://vignette.wikia.nocookie.net/ffxi/images/4/45/Ef5b.jpg';
    case 'ef6b':
      return 'https://vignette.wikia.nocookie.net/ffxi/images/a/a2/Ef6b.jpg';
    case 'ef7b':
      return 'https://vignette.wikia.nocookie.net/ffxi/images/2/2d/Ef7b.jpg';
    case 'ef8b':
      return 'https://vignette.wikia.nocookie.net/ffxi/images/9/95/Ef8b.jpg';
    case 'em8b':
      return 'https://vignette.wikia.nocookie.net/ffxi/images/a/a4/Em8b.jpg';
    case 'em7b':
      return 'https://vignette.wikia.nocookie.net/ffxi/images/7/76/Em7b.jpg';
    case 'em6b':
      return 'https://vignette.wikia.nocookie.net/ffxi/images/f/f1/Em6b.jpg';
    case 'em5b':
      return 'https://vignette.wikia.nocookie.net/ffxi/images/3/3f/Em5b.jpg';
    case 'em4b':
      return 'https://vignette.wikia.nocookie.net/ffxi/images/2/2c/Em4b.jpg';
    case 'em3b':
      return 'https://vignette.wikia.nocookie.net/ffxi/images/9/9c/Em3b.jpg';
    case 'em2b':
      return 'https://vignette.wikia.nocookie.net/ffxi/images/4/41/Em2b.jpg';
    case 'em1b':
      return 'https://vignette.wikia.nocookie.net/ffxi/images/a/a7/Em1b.jpg';
    case 'em8a':
      return 'https://vignette.wikia.nocookie.net/ffxi/images/a/a6/Em8a.jpg';
    case 'em7a':
      return 'https://vignette.wikia.nocookie.net/ffxi/images/3/32/Em7a.jpg';
    case 'em6a':
      return 'https://vignette.wikia.nocookie.net/ffxi/images/a/ae/Em6a.jpg';
    case 'em5a':
      return 'https://vignette.wikia.nocookie.net/ffxi/images/1/19/Em5a.jpg';
    case 'em4a':
      return 'https://vignette.wikia.nocookie.net/ffxi/images/a/a4/Em4a.jpg';
    case 'em3a':
      return 'https://vignette.wikia.nocookie.net/ffxi/images/9/90/Em3a.jpg';
    case 'em2a':
      return 'https://vignette.wikia.nocookie.net/ffxi/images/6/63/Em2a.jpg';
    case 'em1a':
      return 'https://vignette.wikia.nocookie.net/ffxi/images/9/98/Em1a.jpg';
    case 'gm1a':
      return 'https://vignette.wikia.nocookie.net/ffxi/images/4/4c/G1a.jpg';
    case 'gm2a':
      return 'https://vignette.wikia.nocookie.net/ffxi/images/6/6a/G2a.jpg';
    case 'gm3a':
      return 'https://vignette.wikia.nocookie.net/ffxi/images/4/4d/G3a.jpg';
    case 'gm4a':
      return 'https://vignette.wikia.nocookie.net/ffxi/images/0/02/G4a.jpg';
    case 'gm5a':
      return 'https://vignette.wikia.nocookie.net/ffxi/images/6/6c/G5a.jpg';
    case 'gm6a':
      return 'https://vignette.wikia.nocookie.net/ffxi/images/d/d7/G6a.jpg';
    case 'gm7a':
      return 'https://vignette.wikia.nocookie.net/ffxi/images/7/71/G7a.jpg';
    case 'gm8a':
      return 'https://vignette.wikia.nocookie.net/ffxi/images/2/22/G8a.jpg';
    case 'gm1b':
      return 'https://vignette.wikia.nocookie.net/ffxi/images/a/af/G1b.jpg';
    case 'gm2b':
      return 'https://vignette.wikia.nocookie.net/ffxi/images/3/30/G2b.jpg';
    case 'gm3b':
      return 'https://vignette.wikia.nocookie.net/ffxi/images/8/8b/G3b.jpg';
    case 'gm4b':
      return 'https://vignette.wikia.nocookie.net/ffxi/images/a/a1/G4b.jpg';
    case 'gm5b':
      return 'https://vignette.wikia.nocookie.net/ffxi/images/2/21/G5b.jpg';
    case 'gm6b':
      return 'https://vignette.wikia.nocookie.net/ffxi/images/b/b6/G6b.jpg';
    case 'gm7b':
      return 'https://vignette.wikia.nocookie.net/ffxi/images/6/6e/G7b.jpg';
    case 'gm8b':
      return 'https://vignette.wikia.nocookie.net/ffxi/images/f/fd/G8b.jpg';
    case 'hf1a':
      return 'https://vignette.wikia.nocookie.net/ffxi/images/1/12/Hf1a.jpg';
    case 'hf2a':
      return 'https://vignette.wikia.nocookie.net/ffxi/images/4/45/Hf2a.jpg';
    case 'hf3a':
      return 'https://vignette.wikia.nocookie.net/ffxi/images/2/25/Hf3a.jpg';
    case 'hf4a':
      return 'https://vignette.wikia.nocookie.net/ffxi/images/1/19/Hf4a.jpg';
    case 'hf5a':
      return 'https://vignette.wikia.nocookie.net/ffxi/images/e/e5/Hf5a.jpg';
    case 'hf6a':
      return 'https://vignette.wikia.nocookie.net/ffxi/images/5/5a/Hf6a.jpg';
    case 'hf7a':
      return 'https://vignette.wikia.nocookie.net/ffxi/images/0/08/Hf7a.jpg';
    case 'hf8a':
      return 'https://vignette.wikia.nocookie.net/ffxi/images/8/89/Hf8a.jpg';
    case 'hf1b':
      return 'https://vignette.wikia.nocookie.net/ffxi/images/3/3c/Hf1b.jpg';
    case 'hf2b':
      return 'https://vignette.wikia.nocookie.net/ffxi/images/3/37/Hf2b.jpg';
    case 'hf3b':
      return 'https://vignette.wikia.nocookie.net/ffxi/images/b/b0/Hf3b.jpg';
    case 'hf4b':
      return 'https://vignette.wikia.nocookie.net/ffxi/images/6/6c/Hf4b.jpg';
    case 'hf5b':
      return 'https://vignette.wikia.nocookie.net/ffxi/images/5/5d/Hf5b.jpg';
    case 'hf6b':
      return 'https://vignette.wikia.nocookie.net/ffxi/images/a/aa/Hf6b.jpg';
    case 'hf7b':
      return 'https://vignette.wikia.nocookie.net/ffxi/images/2/28/Hf7b.jpg';
    case 'hf8b':
      return 'https://vignette.wikia.nocookie.net/ffxi/images/b/bf/Hf8b.jpg';
    case 'hm8b':
      return 'https://vignette.wikia.nocookie.net/ffxi/images/8/84/Hm8b.jpg';
    case 'hm7b':
      return 'https://vignette.wikia.nocookie.net/ffxi/images/4/43/Hm7b.jpg';
    case 'hm6b':
      return 'https://vignette.wikia.nocookie.net/ffxi/images/2/28/Hm6b.jpg';
    case 'hm5b':
      return 'https://vignette.wikia.nocookie.net/ffxi/images/8/86/Hm5b.jpg';
    case 'hm4b':
      return 'https://vignette.wikia.nocookie.net/ffxi/images/4/45/Hm4b.jpg';
    case 'hm3b':
      return 'https://vignette.wikia.nocookie.net/ffxi/images/d/df/Hm3b.jpg';
    case 'hm2b':
      return 'https://vignette.wikia.nocookie.net/ffxi/images/3/33/Hm2b.jpg';
    case 'hm1b':
      return 'https://vignette.wikia.nocookie.net/ffxi/images/f/f5/Hm1b.jpg';
    case 'hm8a':
      return 'https://vignette.wikia.nocookie.net/ffxi/images/d/d0/Hm8a.jpg';
    case 'hm7a':
      return 'https://vignette.wikia.nocookie.net/ffxi/images/0/04/Hm7a.jpg';
    case 'hm6a':
      return 'https://vignette.wikia.nocookie.net/ffxi/images/a/a4/Hm6a.jpg';
    case 'hm5a':
      return 'https://vignette.wikia.nocookie.net/ffxi/images/c/c7/Hm5a.jpg';
    case 'hm4a':
      return 'https://vignette.wikia.nocookie.net/ffxi/images/9/9d/Hm4a.jpg';
    case 'hm3a':
      return 'https://vignette.wikia.nocookie.net/ffxi/images/4/49/Hm3a.jpg';
    case 'hm2a':
      return 'https://vignette.wikia.nocookie.net/ffxi/images/6/61/Hm2a.jpg';
    case 'hm1a':
      return 'https://vignette.wikia.nocookie.net/ffxi/images/b/b3/Hm1a.jpg';
    case 'mf1a':
      return 'https://vignette.wikia.nocookie.net/ffxi/images/d/d1/M1a.jpg';
    case 'mf2a':
      return 'https://vignette.wikia.nocookie.net/ffxi/images/1/19/M2a.jpg';
    case 'mf3a':
      return 'https://vignette.wikia.nocookie.net/ffxi/images/3/37/M3a.jpg';
    case 'mf4a':
      return 'https://vignette.wikia.nocookie.net/ffxi/images/e/e3/M4a.jpg';
    case 'mf5a':
      return 'https://vignette.wikia.nocookie.net/ffxi/images/0/03/M5a.jpg';
    case 'mf6a':
      return 'https://vignette.wikia.nocookie.net/ffxi/images/7/7f/M6a.jpg';
    case 'mf7a':
      return 'https://vignette.wikia.nocookie.net/ffxi/images/c/cc/M7a.jpg';
    case 'mf8a':
      return 'https://vignette.wikia.nocookie.net/ffxi/images/8/82/M8a.jpg';
    case 'mf1b':
      return 'https://vignette.wikia.nocookie.net/ffxi/images/2/24/M1b.jpg';
    case 'mf2b':
      return 'https://vignette.wikia.nocookie.net/ffxi/images/d/d2/M2b.jpg';
    case 'mf3b':
      return 'https://vignette.wikia.nocookie.net/ffxi/images/6/63/M3b.jpg';
    case 'mf4b':
      return 'https://vignette.wikia.nocookie.net/ffxi/images/e/ee/M4b.jpg';
    case 'mf5b':
      return 'https://vignette.wikia.nocookie.net/ffxi/images/c/c9/M5b.jpg';
    case 'mf6b':
      return 'https://vignette.wikia.nocookie.net/ffxi/images/f/ff/M6b.jpg';
    case 'mf7b':
      return 'https://vignette.wikia.nocookie.net/ffxi/images/9/90/M7b.jpg';
    case 'mf8b':
      return 'https://vignette.wikia.nocookie.net/ffxi/images/9/9f/M8b.jpg';
    case 'tf1a':
      return 'https://vignette.wikia.nocookie.net/ffxi/images/a/ab/Tf1a.jpg';
    case 'tf2a':
      return 'https://vignette.wikia.nocookie.net/ffxi/images/b/bf/Tf2a.jpg';
    case 'tf3a':
      return 'https://vignette.wikia.nocookie.net/ffxi/images/6/66/Tf3a.jpg';
    case 'tf4a':
      return 'https://vignette.wikia.nocookie.net/ffxi/images/0/09/Tf4a.jpg';
    case 'tf5a':
      return 'https://vignette.wikia.nocookie.net/ffxi/images/5/5c/Tf5a.jpg';
    case 'tf6a':
      return 'https://vignette.wikia.nocookie.net/ffxi/images/1/1c/Tf6a.jpg';
    case 'tf7a':
      return 'https://vignette.wikia.nocookie.net/ffxi/images/2/2a/Tf7a.jpg';
    case 'tf8a':
      return 'https://vignette.wikia.nocookie.net/ffxi/images/6/69/Tf8a.jpg';
    case 'tf1b':
      return 'https://vignette.wikia.nocookie.net/ffxi/images/a/a0/Tf1b.jpg';
    case 'tf2b':
      return 'https://vignette.wikia.nocookie.net/ffxi/images/d/d0/Tf2b.jpg';
    case 'tf3b':
      return 'https://vignette.wikia.nocookie.net/ffxi/images/f/fe/Tf3b.jpg';
    case 'tf4b':
      return 'https://vignette.wikia.nocookie.net/ffxi/images/1/18/Tf4b.jpg';
    case 'tf5b':
      return 'https://vignette.wikia.nocookie.net/ffxi/images/d/da/Tf5b.jpg';
    case 'tf6b':
      return 'https://vignette.wikia.nocookie.net/ffxi/images/3/38/Tf6b.jpg';
    case 'tf7b':
      return 'https://vignette.wikia.nocookie.net/ffxi/images/5/5f/Tf7b.jpg';
    case 'tf8b':
      return 'https://vignette.wikia.nocookie.net/ffxi/images/3/37/Tf8b.jpg';
    case 'tm8b':
      return 'https://vignette.wikia.nocookie.net/ffxi/images/2/27/Tm8b.jpg';
    case 'tm7b':
      return 'https://vignette.wikia.nocookie.net/ffxi/images/5/55/Tm7b.jpg';
    case 'tm6b':
      return 'https://vignette.wikia.nocookie.net/ffxi/images/7/7d/Tm6b.jpg';
    case 'tm5b':
      return 'https://vignette.wikia.nocookie.net/ffxi/images/4/4b/Tm5b.jpg';
    case 'tm4b':
      return 'https://vignette.wikia.nocookie.net/ffxi/images/5/59/Tm4b.jpg';
    case 'tm3b':
      return 'https://vignette.wikia.nocookie.net/ffxi/images/2/21/Tm3b.jpg';
    case 'tm2b':
      return 'https://vignette.wikia.nocookie.net/ffxi/images/4/48/Tm2b.jpg';
    case 'tm1b':
      return 'https://vignette.wikia.nocookie.net/ffxi/images/f/f5/Tm1b.jpg';
    case 'tm8a':
      return 'https://vignette.wikia.nocookie.net/ffxi/images/b/bb/Tm8a.jpg';
    case 'tm7a':
      return 'https://vignette.wikia.nocookie.net/ffxi/images/3/34/Tm7a.jpg';
    case 'tm6a':
      return 'https://vignette.wikia.nocookie.net/ffxi/images/3/33/Tm6a.jpg';
    case 'tm5a':
      return 'https://vignette.wikia.nocookie.net/ffxi/images/9/97/Tm5a.jpg';
    case 'tm4a':
      return 'https://vignette.wikia.nocookie.net/ffxi/images/c/c6/Tm4a.jpg';
    case 'tm3a':
      return 'https://vignette.wikia.nocookie.net/ffxi/images/d/d9/Tm3a.jpg';
    case 'tm2a':
      return 'https://vignette.wikia.nocookie.net/ffxi/images/f/f0/Tm2a.jpg';
    case 'tm1a':
      return 'https://vignette.wikia.nocookie.net/ffxi/images/d/d8/Tm1a.jpg';
    default:
      return '';
  }
}
