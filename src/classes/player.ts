import * as math from "./math.js"

export class Player {
    state: PlayerState = PlayerState.idle;;
    position: math.Vector2;
    z: number = 0;
    constructor(position: math.Vector2 = new math.Vector2(0, 0)) {
        this.position = position;
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