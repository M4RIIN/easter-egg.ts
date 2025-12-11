import { TriggerHandler } from "./trigger.handler";

export class ClickButtonTrigger extends TriggerHandler{
    private observer?: MutationObserver;
    private pendingIds = new Set<string>();
    private attachedIds = new Set<string>();

    constructor() {
        super();
        this.initObserver();
    }

    addClickTrigger(id: string, times: number = 1): ClickButtonTrigger {
        for (let i = 0; i < times; i++) {
            this.expectedTriggers.push(id);
        }
        this.pendingIds.add(id);
        this.tryAttachListener(id);

        return this;
    }

    private initObserver(): void {
        if (this.observer || typeof MutationObserver === "undefined") {
            return;
        }

        this.observer = new MutationObserver(() => {
            this.pendingIds.forEach((id) => this.tryAttachListener(id));
        });

        this.observer.observe(document.body, {
            childList: true,
            subtree: true,
        });
    }

    private tryAttachListener(id: string): void {
        if (this.attachedIds.has(id)) return;

        const button = document.getElementById(id);
        if (!button) return;

        button.addEventListener("click", () => this.handleTrigger(button.id));

        this.attachedIds.add(id);
        this.pendingIds.delete(id);

        if (this.pendingIds.size === 0 && this.observer) {
            this.observer.disconnect();
            this.observer = undefined;
        }
    }

}