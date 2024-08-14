import * as screenUtils from "./utils/screen.js";
var canvas = screenUtils.getCanvas();
canvas.onclick = function (ev) {
    screenUtils.fullscreen(canvas);
};
import { Player } from "./classes/player.js";
const plr = new Player();
function canvasSizing() {
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const aspectRatioHeight = (viewportWidth / 16) * 9;
    const elementWidth = Math.min(viewportWidth, aspectRatioHeight * 16);
    const elementHeight = Math.min(viewportHeight, aspectRatioHeight);
    if (canvas) {
        canvas.style.width = `${elementWidth}px`;
        canvas.style.height = `${elementHeight}px`;
        canvas.style.aspectRatio = "16 / 9";
    }
}
canvasSizing();
window.addEventListener("resize", canvasSizing);
