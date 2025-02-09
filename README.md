
# Easter-Eggs.js 🎉🍬

Welcome to **Easter-Eggs.js**, a fun and quirky library to trigger actions based on specific sequences of events, just like Easter eggs in your favorite games or movies. Ready to trigger some chaos with your keyboard or mouse? Let’s dive in!

---

## 📦 Installation

Install it globally via npm (because why not?):

```bash
npm install -g easter-eggs.js
```

Or, for a local installation:

```bash
npm install easter-eggs.js
```

---

## 🚀 Usage

### 🕹️ Triggering Easter Eggs in Pop Culture Style

**The Matrix** 🌱: What happens if you try to use the Konami Code while Neo is on his way to realizing he’s *The One*?

```ts
import { EasterBuilder } from 'easter-eggs.js';
import { KonamiTrigger } from 'easter-eggs.js';
import { MatrixEffectActionHandler } from './actions';

new EasterBuilder()
  .setTriggerHandler(new KonamiTrigger()) // Classic Konami
  .setActionHandler(new MatrixEffectActionHandler()); // Effects like 'The Matrix' 🖥️
```

When you enter the code, you’ll trigger an effect where characters rain down on the screen just like the iconic Matrix code. This is a metaphorical "Neo" moment. You know what they say: "There is no spoon." 🍜

### 🧙‍♂️ The Lord of the Rings – The Ring Quest 🕵️‍♀️

Remember that feeling when Frodo throws the ring into Mount Doom? Now, imagine you have to press buttons in the right order to destroy the One Ring in your app!

```ts
import { EasterBuilder } from 'easter-eggs.js';
import { ClickButtonTrigger } from 'easter-eggs.js';
import { CustomActionHandler } from './actions';

document.body.innerHTML = '<button id="frodo">Frodo</button><button id="mountDoom">Mount Doom</button>';

new EasterBuilder()
  .setTriggerHandler(new ClickButtonTrigger()
    .addClickTrigger("frodo")
    .addClickTrigger("mountDoom"))
  .setActionHandler(new CustomActionHandler(() => alert("Frodo has destroyed the ring! 🏆")));
```

Press **Frodo** and **Mount Doom** in the right order, and you’ll destroy the ring. *One does not simply click buttons out of order!* ⚔️

### 🚀 Star Wars – The Force Awakens ✨

Why not trigger a surprise "Force" action using the keyboard sequence? This could be your version of Obi-Wan's *"These aren't the droids you're looking for."*

```ts
import { EasterBuilder } from 'easter-eggs.js';
import { KeyboardInputTrigger } from 'easter-eggs.js';
import { ForceActionHandler } from './actions';

new EasterBuilder()
  .setTriggerHandler(new KeyboardInputTrigger()
    .addKeyboardTrigger("KeyL") // Luke Skywalker, obviously
    .addKeyboardTrigger("KeyV") // Vader, the one who really needs to control this situation
    .addKeyboardTrigger("KeyE")) // Everyone knows the force is with you if you press 'E'
  .setActionHandler(new ForceActionHandler(() => alert("The Force is strong with you!")));
```

Press the right keys, and may the Force be with you... unless you're Kylo Ren, in which case... we still haven't figured out how to redeem you. 🔥🌀

---

## 💡 Features

- **Multiple Trigger Handlers**: Handle mouse clicks, keyboard inputs, or even a custom combination of triggers.
- **Custom Actions**: Create any action you want, from popping up a secret message to triggering crazy visual effects.
- **Dynamic Event Handling**: Adjust what happens based on user input in real-time. 

---

## 📋 Testing

Want to test the magic? Run a few tests like a pro with Jest to make sure your Easter eggs always work perfectly.

### Example Test Case

Here’s a fun example for testing the right button sequence:

```ts
import { EasterBuilder } from 'easter-eggs.js';
import { ClickButtonTrigger } from 'easter-eggs.js';
import { CustomActionHandler } from './actions';

test('correct button click sequence triggers action', () => {
  document.body.innerHTML = '<button id="batman">I’m Batman</button><button id="joker">Why So Serious?</button>';

  const easterEgg = new EasterBuilder()
    .setTriggerHandler(new ClickButtonTrigger()
      .addClickTrigger("batman")
      .addClickTrigger("joker"))
    .setActionHandler(new CustomActionHandler(() => alert("Joker defeated! 🎭")));

  const batmanButton = document.getElementById("batman");
  const jokerButton = document.getElementById("joker");

  batmanButton?.click();
  jokerButton?.click();

  expect(window.alert).toHaveBeenCalledWith("Joker defeated! 🎭");
});
```

### Custom Easter Egg Testing 🎁

Make your own test cases for other scenarios, like unlocking the secret level of "Pac-Man" after pressing the right sequence of keys. Just don't get too addicted to the "Easter Egg" hunts! 🕹️

---

## 💻 Development

If you want to contribute and add more Easter Eggs to this library, fork the project, run tests, and feel free to submit a pull request. We’re always looking for new surprises! 🤫

---

## 🤝 Contributors

- **John Doe** – Creator of all this nonsense 💥
- **Jane Smith** – Maintains the project and fixes bugs 🔧

---

## 🌟 License

This project is licensed under the MIT License – see the [LICENSE](LICENSE) file for details.

---

### 🌍 Enjoy your coding adventure, and remember, there’s always a hidden Easter egg waiting for you! 🎉

