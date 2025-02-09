import { KeyboardInputTrigger } from "./keyboard.input.trigger";


export class KonamiTrigger extends KeyboardInputTrigger{
    constructor(){
        super();
    this.addKeyboardTrigger("ArrowUp")
    .addKeyboardTrigger("ArrowUp")
    .addKeyboardTrigger("ArrowDown")
    .addKeyboardTrigger("ArrowDown")
    .addKeyboardTrigger("ArrowLeft")
    .addKeyboardTrigger("ArrowRight")
    .addKeyboardTrigger("ArrowLeft")
    .addKeyboardTrigger("ArrowRight")
    .addKeyboardTrigger("KeyB")
    .addKeyboardTrigger("KeyA")
    }

}