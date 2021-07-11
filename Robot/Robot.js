/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Robot extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("5x35n5", "./Robot/costumes/5x35n5.svg", { x: 680, y: 315 })
    ];

    this.sounds = [
      new Sound("robotBuzz", "./Robot/sounds/robotBuzz.wav"),
      new Sound("winSound", "./Robot/sounds/winSound.wav"),
      new Sound("Drum Bass3", "./Robot/sounds/Drum Bass3.wav")
    ];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "startGame" },
        this.whenIReceiveStartgame
      ),
      new Trigger(Trigger.BROADCAST, { name: "move1" }, this.whenIReceiveMove1),
      new Trigger(Trigger.BROADCAST, { name: "move2" }, this.whenIReceiveMove2),
      new Trigger(Trigger.BROADCAST, { name: "move3" }, this.whenIReceiveMove3),
      new Trigger(
        Trigger.BROADCAST,
        { name: "result" },
        this.whenIReceiveResult
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2)
    ];
  }

  *whenIReceiveStartgame() {
    this.visible = true;
    this.goto(80, 75);
  }

  *whenIReceiveMove1() {
    for (let i = 0; i < 4; i++) {
      this.x += 43;
      yield;
    }
  }

  *whenIReceiveMove2() {
    for (let i = 0; i < 2; i++) {
      this.y += -43;
      yield;
    }
  }

  *whenIReceiveMove3() {
    this.x += 43;
  }

  *whenIReceiveResult() {
    this.visible = false;
  }

  *whenGreenFlagClicked() {
    while (!this.touching(this.sprites["Redflag"].andClones())) {
      yield;
    }
    yield* this.wait(1);
    this.broadcast("result");
  }

  *whenGreenFlagClicked2() {
    this.stage.vars.score = 1;
    this.visible = false;
  }
}
