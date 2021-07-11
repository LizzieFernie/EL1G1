/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Birds extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("birds", "./Birds/costumes/birds.svg", {
        x: 79.07358063800285,
        y: 40.7930761746357
      })
    ];

    this.sounds = [new Sound("Coin", "./Birds/sounds/Coin.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "result2" },
        this.whenIReceiveResult2
      ),
      new Trigger(Trigger.BROADCAST, { name: "algo" }, this.whenIReceiveAlgo),
      new Trigger(Trigger.BROADCAST, { name: "flow" }, this.whenIReceiveFlow),
      new Trigger(Trigger.BROADCAST, { name: "seq" }, this.whenIReceiveSeq),
      new Trigger(
        Trigger.BROADCAST,
        { name: "result" },
        this.whenIReceiveResult
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveResult2() {
    this.goto(-68, 42);
    this.visible = true;
  }

  *whenIReceiveAlgo() {
    this.visible = false;
  }

  *whenIReceiveFlow() {
    this.visible = false;
  }

  *whenIReceiveSeq() {
    this.visible = false;
  }

  *whenIReceiveResult() {
    this.broadcast("switch");
    this.goto(-105, 30);
    yield* this.playSoundUntilDone("Coin");
    this.visible = true;
    yield* this.sayAndWait("You Win", 2);
  }
}
