"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EasterBuilder = void 0;
const action_handler_1 = require("./action.handler");
const trigger_handler_1 = require("./trigger.handler");
class EasterBuilder {
    constructor() {
        this.actionHandler = new action_handler_1.EasterModalActionHandler("./tests.asstes/giphy.gif");
        this.triggerHandler = new trigger_handler_1.KeyboardInputTrigger();
    }
    perfomAction() {
        this.actionHandler.performAction();
    }
    setActionHandler(actionHandler) {
        this.actionHandler = actionHandler;
        return this;
    }
    setTriggerHandler(triggerHandler) {
        this.triggerHandler = triggerHandler;
        this.triggerHandler.addObserver(this);
        return this;
    }
}
exports.EasterBuilder = EasterBuilder;
//# sourceMappingURL=easter.builder.js.map