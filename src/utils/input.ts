var keyDownListeners: InputListener[] = [];
var keyUpListeners: InputListener[] = [];
var currentKeys: KeyCode[] = [];

class InputHandlerClass {
  OnKeyDown = function (
    callback: (event: KeyboardEvent) => any,
    priority: number = 0,
    cancel: boolean = false
  ): InputListener {
    const il = new InputListener(callback, priority);
    keyDownListeners.push(il);
    return il;
  };
  OnKeyUp = function (
    callback: (event: KeyboardEvent) => boolean,
    priority: number = 0,
    cancel: boolean = false
  ): InputListener {
    const il = new InputListener(callback, priority);
    keyUpListeners.push(il);
    return il;
  };
  IsKeyDown = function (key: KeyCode): boolean {
    var find = currentKeys.filter((k) => k.valueOf() === key.valueOf())[0];
    if (find) return true;
    else return false;
  };
}

document.body.onkeydown = function (event: KeyboardEvent) {
  keyDownListeners.sort(function (a, b) {
    return b.priority - a.priority;
  });
  var cancelled = false;
  keyDownListeners.forEach((listener) => {
    if (cancelled) return;
    cancelled = listener.callback(event);
  });
};

class InputListener {
  callback: (event: KeyboardEvent) => boolean;
  priority: number;
  constructor(callback: (event: KeyboardEvent) => boolean, priority: number) {
    this.callback = callback;
    this.priority = priority;
  }
}

export enum KeyCode {
  Backspace = 8,
  Tab = 9,
  Enter = 13,
  Shift = 16,
  Ctrl = 17,
  Alt = 18,
  Pause = 19,
  CapsLock = 20,
  Esape = 27,
  Space = 32,
  PageUp = 33,
  PageDown = 34,
  End = 35,
  Home = 36,
  Left = 37,
  Up = 38,
  Right = 39,
  Down = 40,
  Insert = 45,
  Delete = 46,
  Zero = 48,
  One = 49,
  Two = 50,
  Three = 51,
  Four = 52,
  Five = 53,
  Six = 54,
  Seven = 55,
  Eight = 56,
  Nine = 57,
  A = 65,
  B = 66,
  C = 67,
  D = 68,
  E = 69,
  F = 70,
  G = 71,
  H = 72,
  I = 73,
  J = 74,
  K = 75,
  L = 76,
  M = 77,
  N = 78,
  O = 79,
  P = 80,
  Q = 81,
  R = 82,
  S = 83,
  T = 84,
  U = 85,
  V = 86,
  W = 87,
  X = 88,
  Y = 89,
  Z = 90,
  LeftMeta = 91,
  RightMeta = 92,
  Select = 93,
  Numpad0 = 96,
  Numpad1 = 97,
  Numpad2 = 98,
  Numpad3 = 99,
  Numpad4 = 100,
  Numpad5 = 101,
  Numpad6 = 102,
  Numpad7 = 103,
  Numpad8 = 104,
  Numpad9 = 105,
  Multiply = 106,
  Add = 107,
  Subtract = 109,
  Decimal = 110,
  Divide = 111,
  F1 = 112,
  F2 = 113,
  F3 = 114,
  F4 = 115,
  F5 = 116,
  F6 = 117,
  F7 = 118,
  F8 = 119,
  F9 = 120,
  F10 = 121,
  F11 = 122,
  F12 = 123,
  NumLock = 144,
  ScrollLock = 145,
  Semicolon = 186,
  Equals = 187,
  Comma = 188,
  Dash = 189,
  Period = 190,
  Slash = 191,
  Grave = 192,
  LeftBracket = 219,
  Backslash = 220,
  RightBracket = 221,
  Apostrophe = 222,
}

export const InputHandler = new InputHandlerClass();
