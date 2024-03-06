"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const action_handler_1 = require("./action.handler");
const easter_builder_1 = require("./easter.builder");
const trigger_handler_1 = require("./trigger.handler");
function resetDOM() {
    document.body.innerHTML = '';
}
beforeEach(() => {
    resetDOM();
});
test('perfome action when keyboard input is pressed in right order', () => {
    const easterBuilder = new easter_builder_1.EasterBuilder()
        .setTriggerHandler(new trigger_handler_1.KeyboardInputTrigger()
        .addKeyboardTrigger("KeyA")
        .addKeyboardTrigger("KeyB")
        .addKeyboardTrigger("KeyC"))
        .setActionHandler(new action_handler_1.CustomActionHandler(() => createDivResForTest("Cowabunga")));
    simulateKeyPress("KeyA");
    simulateKeyPress("KeyB");
    simulateKeyPress("KeyC");
    const messageDiv = document.getElementById('resDiv');
    expect(messageDiv === null || messageDiv === void 0 ? void 0 : messageDiv.innerText).toBe("Cowabunga");
});
test('no perfome action when  keyboard input is pressed not in right order', () => {
    const easterBuilder = new easter_builder_1.EasterBuilder()
        .setTriggerHandler(new trigger_handler_1.KeyboardInputTrigger()
        .addKeyboardTrigger("KeyA")
        .addKeyboardTrigger("KeyB")
        .addKeyboardTrigger("KeyC"))
        .setActionHandler(new action_handler_1.CustomActionHandler(() => createDivResForTest("Cowabunga")));
    simulateKeyPress("KeyC");
    simulateKeyPress("KeyB");
    simulateKeyPress("KeyA");
    const messageDiv = document.getElementById('resDiv');
    expect(messageDiv === null || messageDiv === void 0 ? void 0 : messageDiv.innerText).not.toBe("Cowabunga");
});
function createDivResForTest(message) {
    const div = document.createElement('div');
    div.id = 'resDiv';
    div.innerText = message;
    document.body.appendChild(div);
}
function simulateKeyPress(key) {
    const event = new KeyboardEvent('keydown', { key: key });
    window.dispatchEvent(event);
}
//# sourceMappingURL=easter.trigger.userinput.test.js.map