// utils.test.ts
import { ActionHandler, CustomActionHandler } from './action.handler';
import { EasterBuilder } from './easter.trigger.builder';
import { addEventToShowMessage } from './index';

function setupButtons() {
    document.body.innerHTML = '<button id="testButtonOne">Click Me</button>';
    document.body.innerHTML += '<button id="testButtonTwo">Click Me</button>';
    document.body.innerHTML += '<button id="testButtonThree">Click Me</button>';
}

beforeEach(() => {
    setupButtons(); // Réinitialiser le DOM avant chaque test
});

test('perfome action when button clicked in right order', () => {
   const actionHandler : ActionHandler  = new CustomActionHandler(() => createDivResForTest("Cowabunga"));
   const easterBuilder : EasterBuilder = new EasterBuilder(actionHandler)
    .addClickTrigger("testButtonThree")
    .addClickTrigger("testButtonOne")
    .addClickTrigger("testButtonTwo");

    // addEventToShowMessage(buttonId, message);
    const button3 = document.getElementById("testButtonThree");
    button3?.click();

    const button1 = document.getElementById("testButtonOne");
    button1?.click();

    const button2 = document.getElementById("testButtonTwo");
    button2?.click();

    const messageDiv : HTMLElement | null= document.getElementById('resDiv');
    expect(messageDiv?.innerText).toBe("Cowabunga");
});

test('no perfome action when button clicked not in right order', () => {
    const actionHandler : ActionHandler  = new CustomActionHandler(() => createDivResForTest("Cowabunga"));
    const easterBuilder : EasterBuilder = new EasterBuilder(actionHandler)
     .addClickTrigger("testButtonThree")
     .addClickTrigger("testButtonOne")
     .addClickTrigger("testButtonTwo");
 
     const button1 = document.getElementById("testButtonOne");
     button1?.click();

     const button3 = document.getElementById("testButtonThree");
     button3?.click();
 
     const button2 = document.getElementById("testButtonTwo");
     button2?.click();
 
     const messageDiv : HTMLElement | null= document.getElementById('resDiv');
     expect(messageDiv?.innerText).not.toBe("Cowabunga");
 });

function createDivResForTest(message: string):void{
    const div = document.createElement('div');
    div.id = 'resDiv';
    div.innerText = message;
    document.body.appendChild(div);
}
