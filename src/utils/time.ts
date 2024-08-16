import { Config } from "../config.js";

var tickListeners: Function[] = [];
var lastUpdate: number = Date.now();

class TimeClass {
  constructor() {
    setInterval(this.tick, 1000 / Config.ticksPerSecond); // 240 tps, should be consistent even with lag
  }
  get tickDelta() {
    return this.dt;
  }
  private dt = 0;
  OnTick(callback: (delta: number) => any) {
    tickListeners.push(callback);
  }
  private tick() {
    var now = Date.now();
    this.dt = (now - lastUpdate) / Config.ticksPerSecond;
    lastUpdate = now;
    tickListeners.forEach((listener) => {
      listener(this.dt);
    });
  }
}

export const Time = new TimeClass();
