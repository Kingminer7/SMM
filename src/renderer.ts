import { Vector2 } from "./classes/math";
import { getCanvas } from "./utils/screen";

const canvas: HTMLCanvasElement = getCanvas();
var context: WebGL2RenderingContext;
() => {
    var ctx = canvas.getContext("webgl2");
    if (ctx instanceof WebGL2RenderingContext) context = ctx
}

class RendererClass {
    private renderedObjects: RenderedObject[] = [];
    private render() {
      context.clearColor(0.9,0.9,0.8,1);
      context.clear(context.COLOR_BUFFER_BIT);
    }
}

export abstract class RenderedObject {
    /** Runs every frame after object is registered in renderer */
    abstract render(canvas: HTMLCanvasElement, context: WebGL2RenderingContext): void;
}

export class RenderedSprite extends RenderedObject{
    size: Vector2 = new Vector2(0, 0);
    position: Vector2 = new Vector2(0, 0);
    rotation: number = 0;
    render(canvas: HTMLCanvasElement, context: WebGL2RenderingContext): void {
        
    }
}

export const Renderer = new RendererClass();