import * as math from "./classes/math.js";
import { InputHandler, KeyCode } from "./utils/input.js";
import * as screenUtils from "./utils/screen.js";

var canvas: HTMLCanvasElement = screenUtils.getCanvas();

canvas.onclick = function (ev) {
  screenUtils.fullscreen(canvas);
};

import { Player } from "./classes/player.js";
import { Time } from "./utils/time.js";

const plr: Player = new Player();

Time.OnTick(function(delta) {
  console.log(delta);
})