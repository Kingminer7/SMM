import { Vector2 } from "./classes/math.js";
import { Config } from "./config.js";
import { getCanvas } from "./utils/screen.js";

const canvas: HTMLCanvasElement = getCanvas();
var context: CanvasRenderingContext2D;
(() => {
  var ctx = canvas.getContext("2d");
  if (ctx instanceof CanvasRenderingContext2D) context = ctx;
})();

var lastUpdate: number = Date.now();
var renderedObjects: RenderedObject[] = [];

class RendererClass {
  private dt = 0;
  constructor() {
    setInterval(this.render, 1000 / Config.framesPerSecond);
  }
  get renderDelta() {
    return this.dt;
  }
  private render() {
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
  public register(object: RenderedObject) {
    renderedObjects.push(object);
  }
  public onRender(callback: (delta: number) => {}) {
    throw new Error("onRender isn't implemented yet...");
  }
}

export abstract class RenderedObject {
  /** Runs every frame after object is registered in renderer */
  size: Vector2 = new Vector2(1, 1);
  position: Vector2 = new Vector2(0, 0);
  zIndex: number = 0;
  rotation: number = 0;
  visible: boolean = false;
  abstract render(
    canvas: HTMLCanvasElement,
    context: CanvasRenderingContext2D
  ): void;
}

export class RenderedSprite extends RenderedObject {
  sprite: HTMLImageElement = new Image();
  constructor(sprite: string) {
    super();
    this.sprite.src = sprite;
  }
  render(canvas: HTMLCanvasElement, context: CanvasRenderingContext2D): void {
    context.drawImage(this.sprite,
      this.position.x,
      this.position.y,
      this.size.x, this.size.y);
  }
}

export const Renderer = new RendererClass();
