import { Vector2 } from "./classes/math";

class ConfigClass {
    ticksPerSecond: number = 240;
    framesPerSecond: number = 60;
    renderGrid: Vector2 = new Vector2(640, 360)
}

export const Config = new ConfigClass();