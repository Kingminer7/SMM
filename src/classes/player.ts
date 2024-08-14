import { Time } from "../utils/time.js";
import * as math from "./math.js";

export class Player {
  state: PlayerState = PlayerState.idle;
  position: math.Vector2;
  velocity: math.Vector2 = new math.Vector2(0, 0);
  z: number = 0;
  gravity: number = 5;
  constructor(position: math.Vector2 = new math.Vector2(0, 0)) {
    this.position = position;
  }
  update() {

  }
  private applyGravity() {
    var falling: boolean = this.velocity.y < 0
    var mult: number = falling ? 2 : 1

    this.velocity.y += this.gravity * mult * Time.delta
  }
}

export enum PlayerState {
  idle,
  falling,
  walking,
  running,
  jumping,
  twirling,
}
