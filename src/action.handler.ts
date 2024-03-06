
export interface ActionHandler {
    performAction() : void
}

export class CustomActionHandler implements ActionHandler {
    private actionFunction = ()=>{};

    constructor(actionFunction: () => void){
        this.actionFunction = actionFunction;
    }
    performAction() {
       this.actionFunction();
    }
}

export class EasterModalActionHandler implements ActionHandler {
    
    private urlGif : string;
    
    constructor(urlGif:string){
        this.urlGif = urlGif;
    }
    
    performAction() {
        document.body.innerHTML += `<div style='display:inline-block;position:absolute;top:50%;left:50%'><img style='width:auto;height:auto;' src='${this.urlGif}' alt='GIF Image'></div>`;
    }
}

