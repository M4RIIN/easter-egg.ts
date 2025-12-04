import { ActionHandler, EasterModalActionHandler } from "./actions";
import { TriggerHandler, KeyboardInputTrigger } from "./triggers";
import { Observer } from "./utils";


export class EasterBuilder implements Observer{

    private actionHandler: ActionHandler;
    private triggerHandler: TriggerHandler;

    static INSTANCE: EasterBuilder;

    private modalDiv: any;


    constructor(){
        this.actionHandler = new EasterModalActionHandler("./tests.asstes/giphy.gif");
        this.triggerHandler = new KeyboardInputTrigger();
    }

    static getInstance(): EasterBuilder {
        if (!EasterBuilder.INSTANCE) {
            EasterBuilder.INSTANCE = new EasterBuilder();
        }
        return EasterBuilder.INSTANCE;
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

