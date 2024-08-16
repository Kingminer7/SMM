import { Vector2 } from "./classes/math.js";
import { Config } from "./config.js";
import { getCanvas } from "./utils/screen.js";
const canvas = getCanvas();
var context;
(() => {
    var ctx = canvas.getContext("2d");
    if (ctx instanceof CanvasRenderingContext2D)
        context = ctx;
})();
var lastUpdate = Date.now();
var renderedObjects = [];
class RendererClass {
    constructor() {
        this.dt = 0;
        setInterval(this.render, 1000 / Config.framesPerSecond);
    }
    get renderDelta() {
        return this.dt;
    }
    render() {
        var now = Date.now();
        this.dt = (now - lastUpdate) / Config.framesPerSecond;
        lastUpdate = now;
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.fillStyle = "rgba(230, 230, 204, 1)";
        context.fillRect(0, 0, canvas.width, canvas.height);
        renderedObjects.sort((a, b) => {
            return b.zIndex - a.zIndex;
        });
        renderedObjects.forEach((element) => {
            element.render(canvas, context);
        });
    }
    register(object) {
        renderedObjects.push(object);
    }
    onRender(callback) {
        throw new Error("onRender isn't implemented yet...");
    }
}
export class RenderedObject {
    constructor() {
        /** Runs every frame after object is registered in renderer */
        this.size = new Vector2(1, 1);
        this.position = new Vector2(0, 0);
        this.zIndex = 0;
        this.rotation = 0;
        this.visible = false;
    }
}
export class RenderedSprite extends RenderedObject {
    constructor(sprite) {
        super();
        this.sprite = new Image();
        this.sprite.src = sprite;
    }
    render(canvas, context) {
        context.drawImage(this.sprite, this.position.x, this.position.y, this.size.x, this.size.y);
    }
}
export const Renderer = new RendererClass();
