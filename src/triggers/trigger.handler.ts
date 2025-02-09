import { Observer } from "../utils/observer";
import { Subject } from "../utils/subject";

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

