import Game1 from "../../assets/Game_1.jpeg";
import Game2 from "../../assets/Game_2.jpeg";
import Game3 from "../../assets/Game_3.jpeg";
import Game4 from "../../assets/Game_4.jpeg";
import Game5 from "../../assets/Game_5.jpeg";
import Game6 from "../../assets/Game_6.jpeg";
import Waldo from "../../assets/Waldo.png";
import Odlaw from "../../assets/Odlaw.png";
import Wenda from "../../assets/Wenda.png";
import Wizard from "../../assets/Wizard.png";
import Woof from "../../assets/Woof.png";

export const characterList = [
  { name: "Waldo", image: Waldo },
  { name: "Odlaw", image: Odlaw },
  { name: "Wenda", image: Wenda },
  { name: "Wizard", image: Wizard },
  { name: "Woof", image: Woof },
];

export const LevelData = [
  {
    level: 1,
    name: "The Unfriendly Giants",
    board: Game1,
    characters: [
      {
        name: "Waldo",
        image: Waldo,
        location: [18, 66],
      },
      { name: "Odlaw", image: Odlaw, location: [59, 90] },
      { name: "Wenda", image: Wenda, location: [69, 80] },
      {
        name: "Wizard",
        image: Wizard,
        location: [95, 77],
      },
      { name: "Woof", image: Woof, location: [2, 74] },
    ],
  },
  {
    level: 2,
    name: "Department Store",
    board: Game2,
    characters: [
      {
        name: "Waldo",
        image: Waldo,
        location: [42, 18],
      },
      { name: "Odlaw", image: Odlaw, location: [20, 73] },
      { name: "Wenda", image: Wenda, location: [30, 73] },
      {
        name: "Wizard",
        image: Wizard,
        location: [69, 5],
      },
      { name: "Woof", image: Woof, location: [62, 50] },
    ],
  },
  {
    level: 3,
    name: "The Deep-Sea Divers",
    board: Game3,
    characters: [
      {
        name: "Waldo",
        image: Waldo,
        location: [66, 16],
      },
      { name: "Odlaw", image: Odlaw, location: [30, 20] },
      { name: "Wenda", image: Wenda, location: [52, 24] },
      {
        name: "Wizard",
        image: Wizard,
        location: [79, 13],
      },
      { name: "Woof", image: Woof, location: [94, 29] },
    ],
  },
  {
    level: 4,
    name: "Horseplay at Trojan",
    board: Game4,
    characters: [
      {
        name: "Waldo",
        image: Waldo,
        location: [17, 85],
      },
      { name: "Odlaw", image: Odlaw, location: [86, 82] },
      { name: "Wenda", image: Wenda, location: [76, 76] },
      {
        name: "Wizard",
        image: Wizard,
        location: [29, 13],
      },
      { name: "Woof", image: Woof, location: [61, 70] },
    ],
  },
  {
    level: 5,
    name: "The Underground Hunters",
    board: Game5,
    characters: [
      {
        name: "Waldo",
        image: Waldo,
        location: [86, 40],
      },
      { name: "Odlaw", image: Odlaw, location: [16, 5] },
      { name: "Wenda", image: Wenda, location: [70, 6] },
      {
        name: "Wizard",
        image: Wizard,
        location: [63, 35],
      },
      { name: "Woof", image: Woof, location: [88, 9] },
    ],
  },
  {
    level: 6,
    name: "The Musical",
    board: Game6,
    characters: [
      {
        name: "Waldo",
        image: Waldo,
        location: [59, 34],
      },
      { name: "Odlaw", image: Odlaw, location: [46, 49] },
      { name: "Wenda", image: Wenda, location: [69, 50] },
      {
        name: "Wizard",
        image: Wizard,
        location: [62, 76],
      },
      { name: "Woof", image: Woof, location: [76, 61] },
    ],
  },
];
