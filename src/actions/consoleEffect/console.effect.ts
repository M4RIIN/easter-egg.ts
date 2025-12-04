import {Observer, Subject} from "../../utils";

export class ConsoleEffect implements Subject{
    private readonly targetText: string;
    private userInput: string = "";
    private container?: HTMLDivElement;
    private observers?: Observer[] = [];

    constructor(targetText: string) {
        this.targetText = targetText;
    }

    addObserver(observer: Observer): void {
        this.observers?.push(observer);
    }

    notifyObservers(): void {
        this.observers?.forEach(obs=>obs.perfomAction());
    }


    start(){
        const container = document.createElement("div");
        this.container = container;
        container.style.position = "fixed";
        container.style.bottom = "0";
        container.style.left = "0";
        container.style.width = "100%";
        container.style.height = "60px";
        container.style.backgroundColor = "rgba(50, 50, 50, 0.85)";
        container.style.display = "flex";
        container.style.alignItems = "center";
        container.style.padding = "8px 16px";
        container.style.boxSizing = "border-box";
        container.style.zIndex = "9999";
        const input = document.createElement("textarea");
        input.placeholder = "Enter text...";
        input.style.width = "100%";
        input.style.height = "100%";
        input.style.background = "transparent";
        input.style.color = "#00ff7f";
        input.style.border = "none";
        input.style.outline = "none";
        input.style.resize = "none";
        input.style.fontFamily = `'Courier New', 'Lucida Console', monospace`;
        input.style.fontSize = "16px";
        input.addEventListener("keydown", (event: KeyboardEvent) => {
            console.log(event.key)
            if (event.key !== "Enter") {
                return;
            }
            if(this.targetText === input.value){
                this.notifyObservers();
            }
            event.preventDefault();
            this.userInput = input.value;
            this.closeConsole();
        });

        container.appendChild(input);
        document.body.appendChild(container);
        input.focus();
    }

    public getUserInput(): string {
        return this.userInput;
    }

    private closeConsole(){
        if (!this.container) {
            return;
        }

        this.container.remove();
        this.container = undefined;
    }
}
