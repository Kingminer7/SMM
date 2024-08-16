import { Time } from "../utils/time.js";
import * as math from "./math.js";
export class Player {
    constructor(position = new math.Vector2(0, 0)) {
        this.state = PlayerState.idle;
        this.velocity = new math.Vector2(0, 0);
        this.z = 0;
        this.gravity = 5;
        this.position = position;
    }
    update() {
    }
    applyGravity() {
        var falling = this.velocity.y < 0;
        var mult = falling ? 2 : 1;
        this.velocity.y += this.gravity * mult * Time.tickDelta;
    }
}
export var PlayerState;
(function (PlayerState) {
    PlayerState[PlayerState["idle"] = 0] = "idle";
    PlayerState[PlayerState["falling"] = 1] = "falling";
    PlayerState[PlayerState["walking"] = 2] = "walking";
    PlayerState[PlayerState["running"] = 3] = "running";
    PlayerState[PlayerState["jumping"] = 4] = "jumping";
    PlayerState[PlayerState["twirling"] = 5] = "twirling";
})(PlayerState || (PlayerState = {}));
