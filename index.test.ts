// utils.test.ts
import { addEventToShowMessage } from './index';

// Mocking document and button for testing
document.body.innerHTML = '<button id="testButton">Click Me</button>';
const buttonId = 'testButton';
const message = 'Test Message';

test('addEventToShowMessage adds message div on button click', () => {
    addEventToShowMessage(buttonId, message);
    const button = document.getElementById(buttonId);
    button?.click();

    const messageDiv = document.querySelector('div');
    expect(messageDiv?.innerText).toBe(message);
});
