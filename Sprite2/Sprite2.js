/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite2/costumes/costume1.svg", {
        x: 136.5546875,
        y: 67.44999694824219
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite2/sounds/pop.wav")];

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
    this.goto(39, -202);
    this.visible = true;
  }

  *whenIReceiveResult() {
    this.visible = false;
  }

  *whenthisspriteclicked() {
    if (this.stage.vars.score == 2) {
      this.broadcast("move2");
      this.stage.vars.score += 1;
    }
  }
}
