import * as math from "./math.js";
export class Player {
    ;
    constructor(position = new math.Vector2(0, 0)) {
        this.state = PlayerState.idle;
        this.z = 0;
        this.position = position;
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
