import backgrounds from './backgrounds.js';

export default function backgroundFunction() {
  const randIndex = Math.floor(Math.random() * backgrounds.length);
  const bodyThing = document.querySelector('body');
  const bg = backgrounds[randIndex];
  bodyThing.style.backgroundImage = `linear-gradient(360deg, rgba(0, 0, 0, 1),
   rgba(0, 0, 0, .9)), url(${bg})`;
  bodyThing.style.backgroundRepeat = 'no-repeat';
  bodyThing.style.backgroundSize = 'cover';
  bodyThing.style.backgroundPosition = 'center center';
}
