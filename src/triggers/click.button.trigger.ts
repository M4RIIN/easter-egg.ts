import { TriggerHandler } from "./trigger.handler";

export class ClickButtonTrigger extends TriggerHandler{

    addClickTrigger(id: string): ClickButtonTrigger {
        this.expectedTriggers.push(id);
        const button = document.getElementById(id);
        if (button) {
            button.addEventListener('click', () => this.handleTrigger(button.id));
        }
        return this;
    }

}