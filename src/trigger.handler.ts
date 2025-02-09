import { Observer } from "./observer";
import { Subject } from "./subject";

export class TriggerHandler implements Subject{ 
    protected observers: Observer[] = [];
    protected expectedTriggers: string[] = [];
    private currentTriggerIndex: number = 0;


    addObserver(observer: Observer): void {
        this.observers.push(observer);
    }

    notifyObservers(): void {
        console.log("obs", this.observers);
        this.observers.forEach(obs=>obs.perfomAction());
    }


    protected handleTrigger(id: any) {
        console.log("handled ( ce qu'on recoit apres le handleTriger ), ", id)
        console.log("expexcted", this.expectedTriggers)
        if (id === this.expectedTriggers[this.currentTriggerIndex]) {
            this.currentTriggerIndex++;
            if (this.currentTriggerIndex === this.expectedTriggers.length) {
                console.log("emit notify observer")
                this.notifyObservers();
                this.reset();
            }
        } else {
            this.reset();
        }
    }

    reset() {
        this.currentTriggerIndex = 0;
    }

}

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
        console.log("l'event : ",event)
        const pressedKey = event.code;
        console.log("pressed key avant le HandleTrigger", pressedKey)
        this.handleTrigger(pressedKey);
    }


}