/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("result", "./Stage/costumes/result.svg", {
        x: 239.5,
        y: 180
      }),
      new Costume("instrlevel1robot", "./Stage/costumes/instrlevel1robot.svg", {
        x: 240.50000000000009,
        y: 180.5
      }),
      new Costume("level1Maze1", "./Stage/costumes/level1Maze1.jpg", {
        x: 360,
        y: 360
      }),
      new Costume("flowchart", "./Stage/costumes/flowchart.png", {
        x: 130,
        y: 360
      }),
      new Costume("sequence", "./Stage/costumes/sequence.png", {
        x: 480,
        y: 340
      }),
      new Costume("algorithm", "./Stage/costumes/algorithm.png", {
        x: 210,
        y: 339
      }),
      new Costume("result2", "./Stage/costumes/result2.svg", {
        x: 240.5,
        y: 180
      })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "startGame" },
        this.whenIReceiveStartgame
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "result" },
        this.whenIReceiveResult
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "result2" },
        this.whenIReceiveResult2
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "result" },
        this.whenIReceiveResult3
      ),
      new Trigger(Trigger.BROADCAST, { name: "algo" }, this.whenIReceiveAlgo),
      new Trigger(Trigger.BROADCAST, { name: "flow" }, this.whenIReceiveFlow),
      new Trigger(Trigger.BROADCAST, { name: "seq" }, this.whenIReceiveSeq)
    ];

    this.vars.myVariable = 0;
    this.vars.moves = 1;
    this.vars.score = 2;
    this.vars.count = 0;
  }

  *whenGreenFlagClicked() {
    this.costume = "instrlevel1robot";
    this.broadcast("instr");
  }

  *whenIReceiveStartgame() {
    this.costume = "level1Maze1";
  }

  *whenIReceiveResult() {
    this.costume = "result";
  }

  *whenIReceiveResult2() {
    this.costume = "result2";
  }

  *whenIReceiveResult3() {
    this.costume = "result";
  }

  *whenIReceiveAlgo() {
    this.costume = "algorithm";
  }

  *whenIReceiveFlow() {
    this.costume = "flowchart";
  }

  *whenIReceiveSeq() {
    this.costume = "sequence";
  }
}
