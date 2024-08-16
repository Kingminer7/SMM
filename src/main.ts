import * as math from "./classes/math.js";

import { InputHandler, KeyCode } from "./utils/input.js";
import * as screenUtils from "./utils/screen.js";
import { Player } from "./classes/player.js";
import { Time } from "./utils/time.js";
import { RenderedObject, RenderedSprite, Renderer } from "./renderer.js";

var canvas: HTMLCanvasElement = screenUtils.getCanvas();

// canvas.onclick = function (ev) {
//   // eslint-disable-next-line @typescript-eslint/ban-ts-comment
//   // @ts-ignore
//   screenUtils.fullscreen(canvas.parentElement);
// };

const plr: Player = new Player();

const maro = new RenderedSprite("./res/super%20maro.jpg")
maro.position = new math.Vector2(50, 50)
maro.size = new math.Vector2(61, 78.2)
Renderer.register(maro);