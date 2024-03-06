"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KeyboardInputTrigger = exports.ClickButtonTrigger = exports.TriggerHandler = void 0;
class TriggerHandler {
    constructor() {
        this.observers = [];
        this.expectedTriggers = [];
        this.currentTriggerIndex = 0;
    }
    addObserver(observer) {
        this.observers.push(observer);
    }
    notifyObservers() {
        this.observers.forEach(obs => obs.perfomAction());
    }
    handleTrigger(id) {
        if (id === this.expectedTriggers[this.currentTriggerIndex]) {
            this.currentTriggerIndex++;
            if (this.currentTriggerIndex === this.expectedTriggers.length) {
                this.notifyObservers();
                this.reset();
            }
        }
        else {
            this.reset();
        }
    }
    reset() {
        this.currentTriggerIndex = 0;
    }
}
exports.TriggerHandler = TriggerHandler;
class ClickButtonTrigger extends TriggerHandler {
    addClickTrigger(id) {
        this.expectedTriggers.push(id);
        const button = document.getElementById(id);
        if (button) {
            button.addEventListener('click', () => this.handleTrigger(button.id));
        }
        return this;
    }
}
exports.ClickButtonTrigger = ClickButtonTrigger;
class KeyboardInputTrigger extends TriggerHandler {
    constructor() {
        super(...arguments);
        this.handleKeyboardInput = (event) => {
            const pressedKey = event.key;
            this.handleTrigger(pressedKey);
        };
    }
    addKeyboardTrigger(key) {
        this.expectedTriggers.push(key);
        window.addEventListener('keydown', this.handleKeyboardInput);
        return this;
    }
}
exports.KeyboardInputTrigger = KeyboardInputTrigger;
//# sourceMappingURL=trigger.handler.js.map