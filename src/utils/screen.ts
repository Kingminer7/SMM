// i love browser differences (not), thank you for making me stop comments about "invalid" syntax

export function fullscreen(element: HTMLElement) {
  if (element.requestFullscreen) {
    element.requestFullscreen();
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
  } else if (element.mozRequestFullScreen) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    element.mozRequestFullScreen();
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
  } else if (element.webkitRequestFullscreen) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    element.webkitRequestFullscreen();
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
  } else if (element.msRequestFullscreen) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    element.msRequestFullscreen();
  }
}

export function getCanvas(): HTMLCanvasElement {
  var c: any = document.getElementById("GameCanvas");
  if (c instanceof HTMLCanvasElement) return c;
  c = document.createElement("canvas");
  c.id = "GameCanvas";
  var d: HTMLDivElement = document.createElement("div");
  d.id = "CanvasContainer";
  d.appendChild(c);
  document.body.appendChild(d);
  return c;
}

setInterval(() => {
    getCanvas()
}, 1000/60)