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
        this.observers.forEach(obs=>obs.perfomAction());
    }


    protected handleTrigger(id: any) {
        if (id === this.expectedTriggers[this.currentTriggerIndex]) {
            this.currentTriggerIndex++;
            if (this.currentTriggerIndex === this.expectedTriggers.length) {
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

    
    addKeyboardTrigger(key: string): KeyboardInputTrigger {
        this.expectedTriggers.push(key);
        window.addEventListener('keydown', this.handleKeyboardInput);
        return this;
    }

    private handleKeyboardInput = (event: KeyboardEvent) => {
        const pressedKey = event.key;
        this.handleTrigger(pressedKey);
    }


}