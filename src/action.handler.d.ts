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
