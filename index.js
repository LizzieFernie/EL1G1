import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Robot from "./Robot/Robot.js";
import Redflag from "./Redflag/Redflag.js";
import Sprite1 from "./Sprite1/Sprite1.js";
import Sprite2 from "./Sprite2/Sprite2.js";
import Sprite3 from "./Sprite3/Sprite3.js";
import Birds from "./Birds/Birds.js";
import Start from "./Start/Start.js";
import Back from "./Back/Back.js";
import Flowchart from "./Flowchart/Flowchart.js";
import Seq from "./Seq/Seq.js";
import Algo from "./Algo/Algo.js";
import Next from "./Next/Next.js";

const stage = new Stage({ costumeNumber: 7 });

const sprites = {
  Robot: new Robot({
    x: 240,
    y: 75,
    direction: 90,
    costumeNumber: 1,
    size: 31,
    visible: false,
    layerOrder: 3
  }),
  Redflag: new Redflag({
    x: 109,
    y: 63,
    direction: 90,
    costumeNumber: 1,
    size: 11,
    visible: false,
    layerOrder: 2
  }),
  Sprite1: new Sprite1({
    x: 68,
    y: -165,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 8
  }),
  Sprite2: new Sprite2({
    x: 39,
    y: -202,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 10
  }),
  Sprite3: new Sprite3({
    x: 57,
    y: -170,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 9
  }),
  Birds: new Birds({
    x: -68,
    y: 42,
    direction: 90,
    costumeNumber: 1,
    size: 50,
    visible: true,
    layerOrder: 11
  }),
  Start: new Start({
    x: 130,
    y: -144,
    direction: 90,
    costumeNumber: 1,
    size: 50,
    visible: false,
    layerOrder: 1
  }),
  Back: new Back({
    x: 170,
    y: -152,
    direction: 90,
    costumeNumber: 1,
    size: 30,
    visible: false,
    layerOrder: 4
  }),
  Flowchart: new Flowchart({
    x: -3.555319677483702,
    y: -108.76117764457251,
    direction: 90,
    costumeNumber: 1,
    size: 30,
    visible: true,
    layerOrder: 5
  }),
  Seq: new Seq({
    x: -4,
    y: -66.53194583402257,
    direction: 90,
    costumeNumber: 1,
    size: 30,
    visible: true,
    layerOrder: 6
  }),
  Algo: new Algo({
    x: -4,
    y: -26,
    direction: 90,
    costumeNumber: 1,
    size: 30,
    visible: true,
    layerOrder: 7
  }),
  Next: new Next({
    x: 157,
    y: 145,
    direction: 90,
    costumeNumber: 1,
    size: 30,
    visible: true,
    layerOrder: 12
  })
};

const project = new Project(stage, sprites, {
  frameRate: 30 // Set to 60 to make your project run faster
});
export default project;
