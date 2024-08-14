// i love browser differences (not), thank you for making me stop comments about "invalid" syntax
export function fullscreen(element) {
    if (element.requestFullscreen) {
        element.requestFullscreen();
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
    }
    else if (element.mozRequestFullScreen) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        element.mozRequestFullScreen();
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
    }
    else if (element.webkitRequestFullscreen) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        element.webkitRequestFullscreen();
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
    }
    else if (element.msRequestFullscreen) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        element.msRequestFullscreen();
    }
}
export function getCanvas() {
    var c = document.getElementById("GameCanvas");
    if (c instanceof HTMLCanvasElement)
        return c;
    c = document.createElement("canvas");
    c.id = "GameCanvas";
    var d = document.createElement("div");
    d.id = "CanvasContainer";
    d.appendChild(c);
    document.body.appendChild(d);
    return c;
}
