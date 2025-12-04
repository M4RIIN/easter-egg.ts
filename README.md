# easter-eggs.ts 🥚✨

`easter-eggs.ts` is a small TypeScript module designed to add secret sequences to a web app. You define **which interactions must be performed** (keyboard, buttons, etc.) and **which action should run** once the combo succeeds.

---

## Installation

```bash
npm install easter-eggs.ts
```

The package ships TypeScript types and also works from plain JavaScript (ESM).

---

## Key Concepts

- **EasterBuilder** (`src/easter.builder.ts`) orchestrates the relationship between a `TriggerHandler` (what has to happen) and an `ActionHandler` (what gets fired).
- Triggers inherit from `TriggerHandler` (`src/triggers/trigger.handler.ts`) and follow an observer pattern: they notify the builder when the expected sequence is achieved.
- Actions implement `ActionHandler` (`src/actions/action.handler.ts`) and contain the logic to run (DOM updates, animations, etc.).

As long as you call both `setTriggerHandler(...)` **and** `setActionHandler(...)`, the builder attaches the events and triggers the action once the sequence is completed correctly.

---

## Quick Start

```ts
import {
  EasterBuilder,
  KonamiTrigger,
  MatrixEffectActionHandler,
} from "easter-eggs.ts";

new EasterBuilder()
  .setTriggerHandler(new KonamiTrigger()) // up, up, down, down...
  .setActionHandler(new MatrixEffectActionHandler()); // Matrix-like rain of characters
```

⚠️ `KeyboardInputTrigger` and `KonamiTrigger` rely on the `KeyboardEvent.code` property (e.g. `KeyA`, `ArrowUp`). Make sure you use the right identifiers.

---

## Available Triggers

- **KeyboardInputTrigger** (`src/triggers/keyboardHandlers/keyboard.input.trigger.ts`)  
  Stack the desired sequence with `addKeyboardTrigger("KeyA")`. Every key you add must be pressed in order; any mistake resets the sequence.

- **KonamiTrigger** (`src/triggers/keyboardHandlers/konami.trigger.ts`)  
  Preconfigures the famous Konami code. Instantiate it like any other keyboard trigger.

- **ClickButtonTrigger** (`src/triggers/click.button.trigger.ts`)  
  Ideal when you need a series of clicks on DOM buttons (`id` required). Use `addClickTrigger("myButton", 3)` to demand consecutive clicks on the same element.

You can also build custom triggers by extending `TriggerHandler` and calling `this.handleTrigger(...)` to progress through the sequence.

---

## Ready-Made Actions

- **CustomActionHandler** (`src/actions/custom.action.handler.ts`)  
  Accepts a custom function—perfect for running your own application logic.

- **EasterModalActionHandler** (`src/actions/easter.modal.action.handler.ts`)  
  Injects a `<div>` containing a GIF into `document.body`. Just pass the URL when instantiating.

- **MatrixEffectActionHandler** (`src/actions/matrix.action.handler.ts` + `src/actions/matrixEffect`)  
  Adds a full-screen `<canvas>` and launches a Matrix-style animation (green character rain) until you call `stop()`.

- **CashRainEffectActionHandler** (`src/actions/cash.rain.action.handler.ts` + `src/actions/cashRainEffect`)  
  Drops around thirty golden `$` symbols for ~8s (transparent background) and plays the embedded base64 `cash_machine.mp3` sound—no extra Webpack/Vite loader required.

As with triggers, you can create your own actions by implementing `ActionHandler`.

---

## Full Example

```ts
import {
  ClickButtonTrigger,
  CustomActionHandler,
  EasterBuilder,
} from "easter-eggs.ts";

document.body.innerHTML = `
  <button id="alpha">Alpha</button>
  <button id="beta">Beta</button>
  <button id="gamma">Gamma</button>
`;

new EasterBuilder()
  .setTriggerHandler(
    new ClickButtonTrigger()
      .addClickTrigger("alpha")
      .addClickTrigger("beta")
      .addClickTrigger("gamma")
  )
  .setActionHandler(
    new CustomActionHandler(() => alert("Sequence validated 🎯"))
  );
```

---

## Tests

The project uses Jest + jsdom (see `tests/*.test.ts`) to simulate the DOM and validate the sequences.

```bash
npm test
```

The provided tests cover keyboard/button combos and show how to simulate events (`button.click()`, `window.dispatchEvent(new KeyboardEvent(...))`).

---

## Contributing

1. Fork the repo, install dependencies, and run `npm test`.
2. Add your triggers/actions.
3. Open a Pull Request.

Suggestions for visual effects or new combos are always welcome!

---

## License

MIT – see [LICENSE](LICENSE).

---

Happy hunting for Easter eggs! 🐇

