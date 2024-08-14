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
function canvasSizing() {
    var width = window.innerWidth - 5;
    var height = window.innerHeight - 5;
    if (width / 16 < height / 9) {
        height = (width / 16) * 9;
    }
    else {
        width = (height / 9) * 16;
    }
    var canvas = getCanvas();
    if (canvas) {
        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;
    }
}
canvasSizing();
window.addEventListener("resize", canvasSizing);
