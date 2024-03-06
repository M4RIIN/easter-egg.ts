import { Observer } from "./observer";

export interface Subject{
    addObserver(observer:Observer):void
    notifyObservers():void
}