import * as screenUtils from "./utils/screen.js";
var canvas = screenUtils.getCanvas();
canvas.onclick = function (ev) {
    screenUtils.fullscreen(canvas);
};
import { Player } from "./classes/player.js";
import { Time } from "./utils/time.js";
const plr = new Player();
Time.OnTick(function (delta) {
    console.log(delta);
});
