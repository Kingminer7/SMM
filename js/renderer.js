import { Vector2 } from "./classes/math";
import { getCanvas } from "./utils/screen";
const canvas = getCanvas();
var context;
() => {
    var ctx = canvas.getContext("webgl2");
    if (ctx instanceof WebGL2RenderingContext)
        context = ctx;
};
class RendererClass {
    constructor() {
        this.renderedObjects = [];
    }
    render() {
        context.clearColor(0.9, 0.9, 0.8, 1);
        context.clear(context.COLOR_BUFFER_BIT);
    }
}
export class RenderedObject {
}
export class RenderedSprite extends RenderedObject {
    constructor() {
        super(...arguments);
        this.size = new Vector2(0, 0);
        this.position = new Vector2(0, 0);
        this.rotation = 0;
    }
    render(canvas, context) {
    }
}
export const Renderer = new RendererClass();
