import { InputHandler } from "./utils/input.js";
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
    if (width / 16 < height / 9) {
        height = (width / 16) * 9;
    }
    else {
        width = (height / 9) * 16;
    }
    if (canvas) {
        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;
    }
}
InputHandler.OnKeyDown(function (event) {
    console.log("Key Prio 1");
}, 1, true);
InputHandler.OnKeyDown(function (event) {
    console.log("Key Prio 2");
}, 0, false);
InputHandler.OnKeyDown(function (event) {
    console.log("Key Prio 3");
}, 2, false);
canvasSizing();
window.addEventListener("resize", canvasSizing);
