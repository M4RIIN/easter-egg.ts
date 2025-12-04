import { cashMachineSoundDataUri } from "../../assets/cashMachineSound";

export class CashRainEffect {
    private container?: HTMLDivElement;
    private styleElement?: HTMLStyleElement;
    private timeoutId?: number;
    private audioElement?: HTMLAudioElement;

    private readonly dropCount: number;
    private readonly lifespanMs: number;

    constructor(dropCount: number = 30, lifespanMs: number = 8000) {
        this.dropCount = dropCount;
        this.lifespanMs = lifespanMs;
    }

    public start(): void {
        if (this.container) {
            return;
        }

        this.injectStyles();
        this.createContainer();
        this.createDollarDrops();
        this.playCashRegisterSound();

        this.timeoutId = window.setTimeout(() => this.stop(), this.lifespanMs);
    }

    public stop(): void {
        if (this.timeoutId) {
            window.clearTimeout(this.timeoutId);
            this.timeoutId = undefined;
        }

        if (this.container) {
            this.container.remove();
            this.container = undefined;
        }

        if (this.styleElement) {
            this.styleElement.remove();
            this.styleElement = undefined;
        }

        if (this.audioElement) {
            this.audioElement.pause();
            this.audioElement.currentTime = 0;
            this.audioElement.remove();
            this.audioElement = undefined;
        }
    }

    private createContainer(): void {
        const container = document.createElement("div");
        container.style.position = "fixed";
        container.style.pointerEvents = "none";
        container.style.top = "0";
        container.style.left = "0";
        container.style.width = "100%";
        container.style.height = "100%";
        container.style.overflow = "hidden";
        container.style.zIndex = "9999";

        document.body.appendChild(container);
        this.container = container;
    }

    private injectStyles(): void {
        const style = document.createElement("style");
        style.textContent = `
            @keyframes cashRainFall {
                0% { transform: translate3d(0, -10vh, 0) rotate(0deg); opacity: 0; }
                10% { opacity: 1; }
                100% { transform: translate3d(0, 110vh, 0) rotate(360deg); opacity: 0; }
            }
        `;
        document.head.appendChild(style);
        this.styleElement = style;
    }

    private createDollarDrops(): void {
        if (!this.container) {
            return;
        }

        for (let i = 0; i < this.dropCount; i++) {
            const drop = document.createElement("span");
            drop.textContent = "$";
            drop.style.position = "absolute";
            drop.style.left = `${Math.random() * 100}%`;
            drop.style.top = `${-20 - Math.random() * 20}%`;
            drop.style.fontSize = `${32 + Math.random() * 28}px`;
            drop.style.fontWeight = "bold";
            drop.style.color = "#FFD700";
            drop.style.textShadow =
                "0 0 8px rgba(255, 223, 0, 0.85), 0 0 18px rgba(255, 223, 0, 0.65)";
            drop.style.filter = "drop-shadow(0 0 6px rgba(255, 223, 0, 0.6))";
            drop.style.opacity = "0";

            const duration = 4 + Math.random() * 2.5;
            drop.style.animation = `cashRainFall ${duration}s linear forwards`;

            this.container.appendChild(drop);
        }
    }

    private playCashRegisterSound(): void {
        if (this.audioElement) {
            this.audioElement.pause();
            this.audioElement.remove();
            this.audioElement = undefined;
        }

        const audio = new Audio(cashMachineSoundDataUri);
        audio.volume = 0.75;
        audio.play().catch(() => undefined);
        audio.addEventListener("ended", () => {
            audio.remove();
            if (this.audioElement === audio) {
                this.audioElement = undefined;
            }
        });

        this.audioElement = audio;
    }
}
