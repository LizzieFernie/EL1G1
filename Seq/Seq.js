/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Seq extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("seq", "./Seq/costumes/seq.svg", { x: 160, y: 55 })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.BROADCAST, { name: "algo" }, this.whenIReceiveAlgo),
      new Trigger(Trigger.BROADCAST, { name: "seq" }, this.whenIReceiveSeq),
      new Trigger(Trigger.BROADCAST, { name: "flow" }, this.whenIReceiveFlow),
      new Trigger(
        Trigger.BROADCAST,
        { name: "result2" },
        this.whenIReceiveResult2
      ),
      new Trigger(Trigger.BROADCAST, { name: "win" }, this.whenIReceiveWin),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "result" },
        this.whenIReceiveResult
      )
    ];
  }

  *whenIReceiveAlgo() {
    this.visible = false;
  }

  *whenIReceiveSeq() {
    this.visible = false;
  }

  *whenIReceiveFlow() {
    this.visible = false;
  }

  *whenIReceiveResult2() {
    this.visible = true;
  }

  *whenbackdropswitchesto() {
    this.visible = false;
  }

  *whenIReceiveWin() {
    this.visible = true;
  }

  *whenthisspriteclicked() {
    this.broadcast("switch");
    this.broadcast("seq");
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveResult() {
    this.visible = true;
  }
}
