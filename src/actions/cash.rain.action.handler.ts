import { ActionHandler } from "./action.handler";
import { CashRainEffect } from "./cashRainEffect";

export class CashRainEffectActionHandler implements ActionHandler {
    private readonly effect: CashRainEffect;

    constructor() {
        this.effect = new CashRainEffect();
    }

    performAction(): void {
        this.effect.start();
    }
}

