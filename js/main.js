import * as screenUtils from "./utils/screen.js";
import { Player } from "./classes/player.js";
import { Time } from "./utils/time.js";
var canvas = screenUtils.getCanvas();
canvas.onclick = function (ev) {
    screenUtils.fullscreen(canvas);
};
const plr = new Player();
Time.OnTick(function (delta) {
    console.log(delta);
});
