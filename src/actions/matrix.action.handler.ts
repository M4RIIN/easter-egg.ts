import { ActionHandler } from "./action.handler";
import { MatrixEffect } from "./matrixEffect/matric.effect";

export class MatrixEffectActionHandler implements ActionHandler {
    
    matrixEffect: MatrixEffect;
    
    constructor(){
        this.matrixEffect = new MatrixEffect();
    }
    
    performAction() {
        this.matrixEffect.start();
    }
}