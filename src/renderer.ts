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
  scale: Vector2 = new Vector2(1, 1);
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
  size: Vector2 = new Vector2(0, 0);
  rectSize: Vector2 = new Vector2(0, 0);
  rectOffset: Vector2 = new Vector2(0, 0);
  constructor(sprite: string) {
    super();
    this.sprite.src = sprite;
    this.size = new Vector2(this.sprite.width, this.sprite.height);
    this.rectSize = this.size;
  }
  render(canvas: HTMLCanvasElement, context: CanvasRenderingContext2D): void {
    context.drawImage(
      this.sprite,
      // this.rectOffset.x / Config.renderGrid.x * canvas.width * this.scale.x,
      // this.rectOffset.y / Config.renderGrid.y * canvas.height * this.scale.y,
      // this.rectSize.x / Config.renderGrid.x * canvas.width * this.scale.x,
      // this.rectSize.y / Config.renderGrid.y * canvas.height * this.scale.y,
      this.rectOffset.x,
      this.rectOffset.y,
      this.rectSize.x,
      this.rectSize.y,
      this.position.x / Config.renderGrid.x * canvas.width,
      this.position.y / Config.renderGrid.y * canvas.height,
      this.size.x / Config.renderGrid.x * canvas.width * this.scale.x,
      this.size.y / Config.renderGrid.y * canvas.height * this.scale.y,
    );
  }
}

export const Renderer = new RendererClass();
