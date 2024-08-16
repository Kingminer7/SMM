import { Config } from "../config.js";
var tickListeners = [];
var lastUpdate = Date.now();
class TimeClass {
    constructor() {
        this.dt = 0;
        setInterval(this.tick, 1000 / Config.ticksPerSecond); // 240 tps, should be consistent even with lag
    }
    get tickDelta() {
        return this.dt;
    }
    OnTick(callback) {
        tickListeners.push(callback);
    }
    tick() {
        var now = Date.now();
        this.dt = (now - lastUpdate) / Config.ticksPerSecond;
        lastUpdate = now;
        tickListeners.forEach((listener) => {
            listener(this.dt);
        });
    }
}
export const Time = new TimeClass();
