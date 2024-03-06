"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EasterModalActionHandler = exports.CustomActionHandler = void 0;
class CustomActionHandler {
    constructor(actionFunction) {
        this.actionFunction = () => { };
        this.actionFunction = actionFunction;
    }
    performAction() {
        this.actionFunction();
    }
}
exports.CustomActionHandler = CustomActionHandler;
class EasterModalActionHandler {
    constructor(urlGif) {
        this.urlGif = urlGif;
    }
    performAction() {
        document.body.innerHTML += `<div style='display:inline-block;position:absolute;top:50%;left:50%'><img style='width:auto;height:auto;' src='${this.urlGif}' alt='GIF Image'></div>`;
    }
}
exports.EasterModalActionHandler = EasterModalActionHandler;
//# sourceMappingURL=action.handler.js.map