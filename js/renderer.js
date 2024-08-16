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
        this.scale = new Vector2(1, 1);
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
        this.size = new Vector2(0, 0);
        this.rectSize = new Vector2(0, 0);
        this.rectOffset = new Vector2(0, 0);
        this.sprite.src = sprite;
        this.size = new Vector2(this.sprite.width, this.sprite.height);
        this.rectSize = this.size;
    }
    render(canvas, context) {
        context.drawImage(this.sprite, 
        // this.rectOffset.x / Config.renderGrid.x * canvas.width * this.scale.x,
        // this.rectOffset.y / Config.renderGrid.y * canvas.height * this.scale.y,
        // this.rectSize.x / Config.renderGrid.x * canvas.width * this.scale.x,
        // this.rectSize.y / Config.renderGrid.y * canvas.height * this.scale.y,
        this.rectOffset.x, this.rectOffset.y, this.rectSize.x, this.rectSize.y, this.position.x / Config.renderGrid.x * canvas.width, this.position.y / Config.renderGrid.y * canvas.height, this.size.x / Config.renderGrid.x * canvas.width * this.scale.x, this.size.y / Config.renderGrid.y * canvas.height * this.scale.y);
    }
}
export const Renderer = new RendererClass();
