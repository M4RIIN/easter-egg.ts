declare module 'easter-eggs.ts' {
    export interface ActionHandler {
        performAction(): void;
    }
    
    export class CustomActionHandler implements ActionHandler {
        private actionFunction: () => void;
    
        constructor(actionFunction: () => void);
        performAction(): void;
    }
    
    export class EasterModalActionHandler implements ActionHandler {
        private urlGif: string;
    
        constructor(urlGif: string);
        performAction(): void;
    }
    
    export class EasterBuilder{
    

        constructor();
    
        perfomAction(): void;
    
        setActionHandler(actionHandler:ActionHandler):EasterBuilder;
        
        setTriggerHandler(triggerHandler: TriggerHandler): EasterBuilder;
    }

    export interface Subject {
        addObserver(observer: Observer): void;
        notifyObservers(): void;
    }

    export interface Observer{
        perfomAction():void
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
    
}