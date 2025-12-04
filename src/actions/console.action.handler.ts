import { ActionHandler } from "./action.handler";
import { MatrixEffect } from "./matrixEffect/matric.effect";
import {ConsoleEffect} from "./consoleEffect/console.effect";
import {Observer} from "../utils";
import {TriggerHandler} from "../triggers";

export class ConsoleEffectActionHandler implements ActionHandler, Observer {

    consoleEffect: ConsoleEffect;
    private actionHandler?: ActionHandler;

    constructor(value:string){
        this.consoleEffect = new ConsoleEffect(value);
        this.consoleEffect.addObserver(this);
    }

    performAction() {
        this.consoleEffect.start();
    }

    perfomAction(): void {
        console.log("notiied")
        this.actionHandler?.performAction();
    }

    setActionHandler(actionHandler:ActionHandler):ConsoleEffectActionHandler{
        this.actionHandler = actionHandler;
        return this;
    }

}