export declare class Vector2 {
    /** The X value of the vector. */
    x: number;
    /** The Y value of the vector. */
    y: number;
    /**
     * Creates a new Vector2 with the given values.
     * @param x The X value of the vector.
     * @param y The Y value of the vector.
     */
    constructor(x: number, y: number);
    get magnitude(): number;
    get normal(): Vector2;
}
declare const _default: {
    Vector2: typeof Vector2;
};
export default _default;
