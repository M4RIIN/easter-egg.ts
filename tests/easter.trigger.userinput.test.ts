import { ActionHandler, CustomActionHandler } from '../src/action.handler';
import { EasterBuilder } from '../src/easter.builder';
import { KeyboardInputTrigger } from '../src/trigger.handler';

function resetDOM() {
    document.body.innerHTML = '';
}

beforeEach(() => {
    resetDOM(); // Réinitialiser le DOM avant chaque test
});

test('perfome action when keyboard input is pressed in right order', () => {
    const easterBuilder : EasterBuilder = new EasterBuilder()
    .setTriggerHandler(new KeyboardInputTrigger()
        .addKeyboardTrigger("KeyA")
        .addKeyboardTrigger("KeyB")
        .addKeyboardTrigger("KeyC"))
    .setActionHandler(new CustomActionHandler(() => createDivResForTest("Cowabunga")));

    simulateKeyPress("KeyA");
    simulateKeyPress("KeyB");
    simulateKeyPress("KeyC");

    const messageDiv : HTMLElement | null= document.getElementById('resDiv');
    expect(messageDiv?.innerText).toBe("Cowabunga");
});

test('no perfome action when  keyboard input is pressed not in right order', () => {
    const easterBuilder : EasterBuilder = new EasterBuilder()
    .setTriggerHandler(new KeyboardInputTrigger()
        .addKeyboardTrigger("KeyA")
        .addKeyboardTrigger("KeyB")
        .addKeyboardTrigger("KeyC"))
    .setActionHandler(new CustomActionHandler(() => createDivResForTest("Cowabunga")));
 
    simulateKeyPress("KeyC");
    simulateKeyPress("KeyB");
    simulateKeyPress("KeyA");
 
     const messageDiv : HTMLElement | null= document.getElementById('resDiv');
     expect(messageDiv?.innerText).not.toBe("Cowabunga");
 });

function createDivResForTest(message: string):void{
    const div = document.createElement('div');
    div.id = 'resDiv';
    div.innerText = message;
    document.body.appendChild(div);
}

function simulateKeyPress(key: string) {
    const event = new KeyboardEvent('keydown', { code: key });
    window.dispatchEvent(event);
}