import { Observer } from "./observer";


export interface Subject {
    addObserver(observer: Observer): void;
    notifyObservers(): void;
}

export class TriggerHandler implements Subject {
    protected observers: Observer[];
    protected expectedTriggers: string[];
    private currentTriggerIndex: number;

    addObserver(observer: Observer): void;
    notifyObservers(): void;
    protected handleTrigger(id: any): void;
    reset(): void;
}

export class ClickButtonTrigger extends TriggerHandler {
    addClickTrigger(id: string): ClickButtonTrigger;
}

export class KeyboardInputTrigger extends TriggerHandler {
    addKeyboardTrigger(key: string): KeyboardInputTrigger;
    private handleKeyboardInput(event: KeyboardEvent): void;
}
