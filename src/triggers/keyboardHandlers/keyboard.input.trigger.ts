import { TriggerHandler } from "../trigger.handler";

export class KeyboardInputTrigger extends TriggerHandler{

    constructor(){
        super();
        window.addEventListener('keydown', (event) => this.handleKeyboardInput(event));
    }

    addKeyboardTrigger(key: string): KeyboardInputTrigger {
        this.expectedTriggers.push(key);
        console.log(this.expectedTriggers)
        return this;
    }

    private handleKeyboardInput = (event: KeyboardEvent) => {
        const pressedKey = event.code;
        this.handleTrigger(pressedKey);
    }


}