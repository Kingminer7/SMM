import { getEnumKeyByValue } from "./generic";
var keyDownListeners = [];
var keyUpListeners = [];
var currentKeys = [];
class InputHandlerClass {
    constructor() {
        this.OnKeyDown = function (callback, priority = 0, cancel = false) {
            const il = new InputListener(callback, priority);
            keyDownListeners.push(il);
            return il;
        };
        this.OnKeyUp = function (callback, priority = 0, cancel = false) {
            const il = new InputListener(callback, priority);
            keyUpListeners.push(il);
            return il;
        };
        this.IsKeyDown = function (key) {
            var find = currentKeys.filter((k) => k.valueOf() === key.valueOf())[0];
            if (find)
                return true;
            else
                return false;
        };
    }
}
document.body.onkeydown = function (event) {
    var kc = getEnumKeyByValue(KeyCode, event.keyCode);
    if (!kc)
        return;
    currentKeys.push(kc);
    keyDownListeners.sort(function (a, b) {
        return b.priority - a.priority;
    });
    var cancelled = false;
    keyDownListeners.forEach((listener) => {
        if (cancelled)
            return;
        cancelled = listener.callback(kc, event);
    });
};
document.body.onkeyup = function (event) {
    var kc = getEnumKeyByValue(KeyCode, event.keyCode);
    if (!kc)
        return;
    if (currentKeys.indexOf(kc))
        currentKeys.splice(currentKeys.indexOf(kc), 1);
    keyUpListeners.sort(function (a, b) {
        return b.priority - a.priority;
    });
    var cancelled = false;
    keyUpListeners.forEach((listener) => {
        if (cancelled)
            return;
        cancelled = listener.callback(kc, event);
    });
};
class InputListener {
    constructor(callback, priority) {
        this.callback = callback;
        this.priority = priority;
    }
}
export var KeyCode;
(function (KeyCode) {
    KeyCode[KeyCode["Backspace"] = 8] = "Backspace";
    KeyCode[KeyCode["Tab"] = 9] = "Tab";
    KeyCode[KeyCode["Enter"] = 13] = "Enter";
    KeyCode[KeyCode["Shift"] = 16] = "Shift";
    KeyCode[KeyCode["Ctrl"] = 17] = "Ctrl";
    KeyCode[KeyCode["Alt"] = 18] = "Alt";
    KeyCode[KeyCode["Pause"] = 19] = "Pause";
    KeyCode[KeyCode["CapsLock"] = 20] = "CapsLock";
    KeyCode[KeyCode["Esape"] = 27] = "Esape";
    KeyCode[KeyCode["Space"] = 32] = "Space";
    KeyCode[KeyCode["PageUp"] = 33] = "PageUp";
    KeyCode[KeyCode["PageDown"] = 34] = "PageDown";
    KeyCode[KeyCode["End"] = 35] = "End";
    KeyCode[KeyCode["Home"] = 36] = "Home";
    KeyCode[KeyCode["Left"] = 37] = "Left";
    KeyCode[KeyCode["Up"] = 38] = "Up";
    KeyCode[KeyCode["Right"] = 39] = "Right";
    KeyCode[KeyCode["Down"] = 40] = "Down";
    KeyCode[KeyCode["Insert"] = 45] = "Insert";
    KeyCode[KeyCode["Delete"] = 46] = "Delete";
    KeyCode[KeyCode["Zero"] = 48] = "Zero";
    KeyCode[KeyCode["One"] = 49] = "One";
    KeyCode[KeyCode["Two"] = 50] = "Two";
    KeyCode[KeyCode["Three"] = 51] = "Three";
    KeyCode[KeyCode["Four"] = 52] = "Four";
    KeyCode[KeyCode["Five"] = 53] = "Five";
    KeyCode[KeyCode["Six"] = 54] = "Six";
    KeyCode[KeyCode["Seven"] = 55] = "Seven";
    KeyCode[KeyCode["Eight"] = 56] = "Eight";
    KeyCode[KeyCode["Nine"] = 57] = "Nine";
    KeyCode[KeyCode["A"] = 65] = "A";
    KeyCode[KeyCode["B"] = 66] = "B";
    KeyCode[KeyCode["C"] = 67] = "C";
    KeyCode[KeyCode["D"] = 68] = "D";
    KeyCode[KeyCode["E"] = 69] = "E";
    KeyCode[KeyCode["F"] = 70] = "F";
    KeyCode[KeyCode["G"] = 71] = "G";
    KeyCode[KeyCode["H"] = 72] = "H";
    KeyCode[KeyCode["I"] = 73] = "I";
    KeyCode[KeyCode["J"] = 74] = "J";
    KeyCode[KeyCode["K"] = 75] = "K";
    KeyCode[KeyCode["L"] = 76] = "L";
    KeyCode[KeyCode["M"] = 77] = "M";
    KeyCode[KeyCode["N"] = 78] = "N";
    KeyCode[KeyCode["O"] = 79] = "O";
    KeyCode[KeyCode["P"] = 80] = "P";
    KeyCode[KeyCode["Q"] = 81] = "Q";
    KeyCode[KeyCode["R"] = 82] = "R";
    KeyCode[KeyCode["S"] = 83] = "S";
    KeyCode[KeyCode["T"] = 84] = "T";
    KeyCode[KeyCode["U"] = 85] = "U";
    KeyCode[KeyCode["V"] = 86] = "V";
    KeyCode[KeyCode["W"] = 87] = "W";
    KeyCode[KeyCode["X"] = 88] = "X";
    KeyCode[KeyCode["Y"] = 89] = "Y";
    KeyCode[KeyCode["Z"] = 90] = "Z";
    KeyCode[KeyCode["LeftMeta"] = 91] = "LeftMeta";
    KeyCode[KeyCode["RightMeta"] = 92] = "RightMeta";
    KeyCode[KeyCode["Select"] = 93] = "Select";
    KeyCode[KeyCode["Numpad0"] = 96] = "Numpad0";
    KeyCode[KeyCode["Numpad1"] = 97] = "Numpad1";
    KeyCode[KeyCode["Numpad2"] = 98] = "Numpad2";
    KeyCode[KeyCode["Numpad3"] = 99] = "Numpad3";
    KeyCode[KeyCode["Numpad4"] = 100] = "Numpad4";
    KeyCode[KeyCode["Numpad5"] = 101] = "Numpad5";
    KeyCode[KeyCode["Numpad6"] = 102] = "Numpad6";
    KeyCode[KeyCode["Numpad7"] = 103] = "Numpad7";
    KeyCode[KeyCode["Numpad8"] = 104] = "Numpad8";
    KeyCode[KeyCode["Numpad9"] = 105] = "Numpad9";
    KeyCode[KeyCode["Multiply"] = 106] = "Multiply";
    KeyCode[KeyCode["Add"] = 107] = "Add";
    KeyCode[KeyCode["Subtract"] = 109] = "Subtract";
    KeyCode[KeyCode["Decimal"] = 110] = "Decimal";
    KeyCode[KeyCode["Divide"] = 111] = "Divide";
    KeyCode[KeyCode["F1"] = 112] = "F1";
    KeyCode[KeyCode["F2"] = 113] = "F2";
    KeyCode[KeyCode["F3"] = 114] = "F3";
    KeyCode[KeyCode["F4"] = 115] = "F4";
    KeyCode[KeyCode["F5"] = 116] = "F5";
    KeyCode[KeyCode["F6"] = 117] = "F6";
    KeyCode[KeyCode["F7"] = 118] = "F7";
    KeyCode[KeyCode["F8"] = 119] = "F8";
    KeyCode[KeyCode["F9"] = 120] = "F9";
    KeyCode[KeyCode["F10"] = 121] = "F10";
    KeyCode[KeyCode["F11"] = 122] = "F11";
    KeyCode[KeyCode["F12"] = 123] = "F12";
    KeyCode[KeyCode["NumLock"] = 144] = "NumLock";
    KeyCode[KeyCode["ScrollLock"] = 145] = "ScrollLock";
    KeyCode[KeyCode["Semicolon"] = 186] = "Semicolon";
    KeyCode[KeyCode["Equals"] = 187] = "Equals";
    KeyCode[KeyCode["Comma"] = 188] = "Comma";
    KeyCode[KeyCode["Dash"] = 189] = "Dash";
    KeyCode[KeyCode["Period"] = 190] = "Period";
    KeyCode[KeyCode["Slash"] = 191] = "Slash";
    KeyCode[KeyCode["Grave"] = 192] = "Grave";
    KeyCode[KeyCode["LeftBracket"] = 219] = "LeftBracket";
    KeyCode[KeyCode["Backslash"] = 220] = "Backslash";
    KeyCode[KeyCode["RightBracket"] = 221] = "RightBracket";
    KeyCode[KeyCode["Apostrophe"] = 222] = "Apostrophe";
})(KeyCode || (KeyCode = {}));
export const InputHandler = new InputHandlerClass();
