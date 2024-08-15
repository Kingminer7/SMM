import { Vector2 } from "./classes/math";
class ConfigClass {
    constructor() {
        this.ticksPerSecond = 240;
        this.framesPerSecond = 60;
        this.renderGrid = new Vector2(640, 360);
    }
}
export const Config = new ConfigClass();
