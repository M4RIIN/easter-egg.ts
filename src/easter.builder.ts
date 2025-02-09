import { ActionHandler, EasterModalActionHandler } from "./actions";
import { TriggerHandler, KeyboardInputTrigger } from "./triggers";
import { Observer } from "./utils";


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


    setActionHandler(actionHandler:ActionHandler):EasterBuilder{
        this.actionHandler = actionHandler;
        return this;
    }
    
    setTriggerHandler(triggerHandler: TriggerHandler):EasterBuilder{
        this.triggerHandler = triggerHandler;
        this.triggerHandler.addObserver(this);
        return this;
    }
}

