import { ActionHandler } from "./action.handler";



export class CustomActionHandler implements ActionHandler {
    private actionFunction = ()=>{};

    constructor(actionFunction: () => void){
        this.actionFunction = actionFunction;
    }
    performAction() {
       this.actionFunction();
    }
}
