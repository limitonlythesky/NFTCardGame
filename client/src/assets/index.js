// backgrounds
import saiman from './background/saiman.jpg';
import astral from './background/astral.jpg';
import eoaalien from './background/eoaalien.jpg';
import panight from './background/panight.jpg';
import heroImg from './background/hero-img.jpg';

// cards
import abylai from './Abylai.png';
import alt from './Alt_010123.png';
import bloodymike from './Bloody_Mike.png';
import dbai from './D_Bai.png';
import gearsamurai from './Gear_Samurai.png';
import greatrrargh from './Great_Rrargh.png';
import hoselarice from './Hose_La_Rice.png';
import milkbrother from './Milk_Brothers.png';
import moonkhight from './Moon_Knight.png';
import rhagkbarl from './Rhagk_Barl.png';
import serratty from './Ser_Ratty.png';
import steeloct from './Steel_Oct.png';
import stonegolems from './Stone_Golems.png';
import whitehatter from './White_Hatter.png';
import wobblyface from './Wobbly_Face.png';

// logo
import logo from './logo.svg';

// icon
import attack from './attack.png';
import defense from './defense.png';
import alertIcon from './alertIcon.svg';
import AlertIcon from './AlertIcon.jsx';

// players
import player01 from './player01.png';
import player02 from './player02.png';

// sounds
import attackSound from './sounds/attack.wav';
import defenseSound from './sounds/defense.mp3';
import explosion from './sounds/explosion.mp3';

export const allCards = [
  abylai,
  alt,
  bloodymike,
  dbai,
  gearsamurai,
  greatrrargh,
  hoselarice,
  milkbrother,
  moonkhight,
  rhagkbarl,
  serratty,
  steeloct,
  stonegolems,
  whitehatter,
  wobblyface
];

export {
  saiman,
  astral,
  eoaalien,
  panight,
  heroImg,

  abylai,
  alt,
  bloodymike,
  dbai,
  gearsamurai,
  greatrrargh,
  hoselarice,
  milkbrother,
  moonkhight,
  rhagkbarl,
  serratty,
  steeloct,
  stonegolems,
  whitehatter,
  wobblyface,

  logo,

  attack,
  defense,
  alertIcon,
  AlertIcon,

  player01,
  player02,

  attackSound,
  defenseSound,
  explosion,
};

export const battlegrounds = [
  { id: 'bg-saiman', image: saiman, name: 'Saiman' },
  { id: 'bg-astral', image: astral, name: 'Astral' },
  { id: 'bg-eoaalien', image: eoaalien, name: 'Eoaalien' },
  { id: 'bg-panight', image: panight, name: 'Panight' },
];

export const gameRules = [
  'Card with the same defense and attack point will cancel each other out.',
  'Attack points from the attacking card will deduct the opposing player’s health points.',
  'If P1 does not defend, their health wil be deducted by P2’s attack.',
  'If P1 defends, P2’s attack is equal to P2’s attack - P1’s defense.',
  'If a player defends, they refill 3 Mana',
  'If a player attacks, they spend 3 Mana',
];