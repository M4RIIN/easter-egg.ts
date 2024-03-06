import { ActionHandler } from "./action.handler";

export class EasterBuilder {
    private expectedClicks: string[] = [];
    private currentClickIndex: number = 0;
    private actionHandler: ActionHandler;

    private modalDiv: any;


    constructor(actionHandler: ActionHandler){
        this.actionHandler = actionHandler;
    }

    addClickTrigger(id: string): EasterBuilder {
        this.expectedClicks.push(id);
        const button = document.getElementById(id);
        if (button) {
            button.addEventListener('click', () => this.handleClick(button.id));
        }
        return this;
    }

    // setActionHandler(actionHandler:ActionHandler){
    //     this.actionHandler = actionHandler;
    //     return this;
    // }
    private handleClick(id: string) {
        if (id === this.expectedClicks[this.currentClickIndex]) {
            this.currentClickIndex++;
            if (this.currentClickIndex === this.expectedClicks.length) {
                this.actionHandler.performAction();
                this.reset();
            }
        } else {
            this.reset();
        }
    }

    private reset() {
        this.currentClickIndex = 0;
    }
}