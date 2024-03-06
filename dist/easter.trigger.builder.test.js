"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const action_handler_1 = require("./action.handler");
const easter_builder_1 = require("./easter.builder");
const trigger_handler_1 = require("./trigger.handler");
function setupButtons() {
    document.body.innerHTML = '<button id="testButtonOne">Click Me</button>';
    document.body.innerHTML += '<button id="testButtonTwo">Click Me</button>';
    document.body.innerHTML += '<button id="testButtonThree">Click Me</button>';
}
beforeEach(() => {
    setupButtons();
});
test('perfome action when button clicked in right order', () => {
    const easterBuilder = new easter_builder_1.EasterBuilder()
        .setTriggerHandler(new trigger_handler_1.ClickButtonTrigger()
        .addClickTrigger("testButtonThree")
        .addClickTrigger("testButtonOne")
        .addClickTrigger("testButtonTwo"))
        .setActionHandler(new action_handler_1.CustomActionHandler(() => createDivResForTest("Cowabunga")));
    const button3 = document.getElementById("testButtonThree");
    button3 === null || button3 === void 0 ? void 0 : button3.click();
    const button1 = document.getElementById("testButtonOne");
    button1 === null || button1 === void 0 ? void 0 : button1.click();
    const button2 = document.getElementById("testButtonTwo");
    button2 === null || button2 === void 0 ? void 0 : button2.click();
    const messageDiv = document.getElementById('resDiv');
    expect(messageDiv === null || messageDiv === void 0 ? void 0 : messageDiv.innerText).toBe("Cowabunga");
});
test('no perfome action when button clicked not in right order', () => {
    const easterBuilder = new easter_builder_1.EasterBuilder()
        .setTriggerHandler(new trigger_handler_1.ClickButtonTrigger()
        .addClickTrigger("testButtonThree")
        .addClickTrigger("testButtonOne")
        .addClickTrigger("testButtonTwo"))
        .setActionHandler(new action_handler_1.CustomActionHandler(() => createDivResForTest("Cowabunga")));
    const button1 = document.getElementById("testButtonOne");
    button1 === null || button1 === void 0 ? void 0 : button1.click();
    const button3 = document.getElementById("testButtonThree");
    button3 === null || button3 === void 0 ? void 0 : button3.click();
    const button2 = document.getElementById("testButtonTwo");
    button2 === null || button2 === void 0 ? void 0 : button2.click();
    const messageDiv = document.getElementById('resDiv');
    expect(messageDiv === null || messageDiv === void 0 ? void 0 : messageDiv.innerText).not.toBe("Cowabunga");
});
function createDivResForTest(message) {
    const div = document.createElement('div');
    div.id = 'resDiv';
    div.innerText = message;
    document.body.appendChild(div);
}
//# sourceMappingURL=easter.trigger.builder.test.js.map