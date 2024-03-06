import { ActionHandler, EasterModalActionHandler } from "./action.handler";
import { Observer } from "./observer";
import { KeyboardInputTrigger, TriggerHandler } from "./trigger.handler";

export class EasterBuilder implements Observer{

    private actionHandler: ActionHandler;
    private triggerHandler: TriggerHandler;

    private modalDiv: any;


    constructor(){
        this.actionHandler = new EasterModalActionHandler("./tests.asstes/giphy.gif");
        this.triggerHandler = new KeyboardInputTrigger();
    }

    perfomAction(): void {
        this.actionHandler.performAction();
    }


    // addClickTrigger(id: string): EasterBuilder {
    //     this.expectedClicks.push(id);
    //     const button = document.getElementById(id);
    //     if (button) {
    //         button.addEventListener('click', () => this.handleClick(button.id));
    //     }
    //     return this;
    // }

    setActionHandler(actionHandler:ActionHandler){
        this.actionHandler = actionHandler;
        return this;
    }
    
    setTriggerHandler(triggerHandler: TriggerHandler){
        this.triggerHandler = triggerHandler;
        this.triggerHandler.addObserver(this);
        return this;
    }

    // setActionHandler(actionHandler:ActionHandler){
    //     this.actionHandler = actionHandler;
    //     return this;
    // }
}

