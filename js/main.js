import * as math from "./classes/math.js";
import * as screenUtils from "./utils/screen.js";
import { Player } from "./classes/player.js";
import { RenderedSprite, Renderer } from "./renderer.js";
var canvas = screenUtils.getCanvas();
// canvas.onclick = function (ev) {
//   // eslint-disable-next-line @typescript-eslint/ban-ts-comment
//   // @ts-ignore
//   screenUtils.fullscreen(canvas.parentElement);
// };
const plr = new Player();
const maro = new RenderedSprite("./res/super%20maro.jpg");
maro.position = new math.Vector2(50, 50);
maro.scale = new math.Vector2(0.15, 0.15);
Renderer.register(maro);
