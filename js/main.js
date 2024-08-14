import * as screenUtils from "./utils/screen.js";
var canvas = screenUtils.getCanvas();
canvas.onclick = function (ev) {
    screenUtils.fullscreen(canvas);
};
import { Player } from "./classes/player.js";
const plr = new Player();
function canvasSizing() {
    var width = window.innerWidth - 5;
    var height = window.innerHeight - 5;
    var usingWidth = true;
    if (width / 16 < height / 9) {
        height = width / 16 * 9;
    }
    else {
        width = height / 9 * 16;
    }
    if (canvas) {
        container.style.width = `${width}px`;
        container.style.height = `${height}px`;
    }
}
canvasSizing();
window.addEventListener("resize", canvasSizing);
