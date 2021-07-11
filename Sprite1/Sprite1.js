/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite1 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite1/costumes/costume1.svg", {
        x: 167.83745339489394,
        y: 61.62930251099499
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite1/sounds/pop.wav")];

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
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveStartgame() {
    this.goto(68, -165);
    this.visible = true;
  }

  *whenIReceiveResult() {
    this.visible = false;
  }

  *whenthisspriteclicked() {
    if (this.stage.vars.score == 1) {
      this.broadcast("move1");
      this.stage.vars.score += 1;
    }
  }
}
