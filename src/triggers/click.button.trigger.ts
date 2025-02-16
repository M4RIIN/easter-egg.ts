import { TriggerHandler } from "./trigger.handler";

export class ClickButtonTrigger extends TriggerHandler{

    addClickTrigger(id: string, times: number = 1): ClickButtonTrigger {
        for(let i:number =0; i < times ; i++){
            this.expectedTriggers.push(id);
        }
        const button = document.getElementById(id);
        if (button) {
            button.addEventListener('click', () => this.handleTrigger(button.id));
        }
        return this;
    }

}