import { ActionHandler } from "./action.handler";
import { TriggerHandler } from "./trigger.handler";

export declare class EasterBuilder{
    

    constructor();

    perfomAction(): void;

    setActionHandler(actionHandler:ActionHandler):EasterBuilder;
    
    setTriggerHandler(triggerHandler: TriggerHandler): EasterBuilder;
}