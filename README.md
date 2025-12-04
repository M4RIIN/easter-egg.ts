# easter-eggs.ts 🥚✨

`easter-eggs.ts` est un petit module TypeScript pensé pour ajouter des séquences secrètes à une application web. Vous définissez **quelles interactions doivent être réalisées** (clavier, boutons, etc.) et **quelle action doit être exécutée** une fois la combinaison réussie.

---

## Installation

```bash
npm install easter-eggs.ts
```

Le package expose des types TypeScript et peut aussi être utilisé en JavaScript classique (ESM).

---

## Principes clés

- **EasterBuilder** (`src/easter.builder.ts`) orchestre la relation entre un `TriggerHandler` (ce qui doit se passer) et un `ActionHandler` (ce qui est déclenché).
- Les triggers héritent de `TriggerHandler` (`src/triggers/trigger.handler.ts`) et utilisent un pattern observateur : ils notifient le builder quand la séquence attendue est réalisée.
- Les actions implémentent `ActionHandler` (`src/actions/action.handler.ts`) et contiennent la logique à exécuter (DOM, animations, etc.).

Tant que vous appelez `setTriggerHandler(...)` **et** `setActionHandler(...)`, le builder se charge d’attacher les événements et de déclencher l’action lorsque la séquence est correctement reproduite.

---

## Démarrage rapide

```ts
import {
  EasterBuilder,
  KonamiTrigger,
  MatrixEffectActionHandler,
} from "easter-eggs.ts";

new EasterBuilder()
  .setTriggerHandler(new KonamiTrigger()) // up, up, down, down...
  .setActionHandler(new MatrixEffectActionHandler()); // pluie de caractères façon Matrix
```

⚠️ `KeyboardInputTrigger` et `KonamiTrigger` utilisent la propriété `KeyboardEvent.code` (ex. `KeyA`, `ArrowUp`). Vérifiez que vous utilisez les bons identifiants.

---

## Triggers disponibles

- **KeyboardInputTrigger** (`src/triggers/keyboardHandlers/keyboard.input.trigger.ts`)  
  Empilez la séquence souhaitée via `addKeyboardTrigger("KeyA")`. Chaque touche ajoutée doit être pressée dans l’ordre. Toute erreur réinitialise la séquence.

- **KonamiTrigger** (`src/triggers/keyboardHandlers/konami.trigger.ts`)  
  Pré-configuration du fameux code Konami. S’instancie et fonctionne comme n’importe quel trigger clavier.

- **ClickButtonTrigger** (`src/triggers/click.button.trigger.ts`)  
  Idéal pour exiger une suite de clics sur des boutons identifiés (`id` DOM). Utilisez `addClickTrigger("myButton", 3)` pour exiger plusieurs clics consécutifs sur le même élément.

Vous pouvez aussi créer vos propres triggers en héritant de `TriggerHandler` et en utilisant `this.handleTrigger(...)` pour avancer dans la séquence.

---

## Actions prêtes à l’emploi

- **CustomActionHandler** (`src/actions/custom.action.handler.ts`)  
  Accepte une fonction personnalisée : parfait pour déclencher votre propre logique applicative.

- **EasterModalActionHandler** (`src/actions/easter.modal.action.handler.ts`)  
  Injecte un `<div>` contenant un GIF dans le `document.body`. Passez simplement l’URL lors de l’instanciation.

- **MatrixEffectActionHandler** (`src/actions/matrix.action.handler.ts` + `src/actions/matrixEffect`)  
  Ajoute un `<canvas>` plein écran et lance une animation Matrix (pluie de caractères verts) jusqu’à appel de `stop()`.

Comme pour les triggers, vous pouvez créer vos actions en implémentant `ActionHandler`.

---

## Exemple complet

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
    new CustomActionHandler(() => alert("Séquence validée 🎯"))
  );
```

---

## Tests

Le projet utilise Jest + jsdom (voir `tests/*.test.ts`) pour simuler le DOM et vérifier les séquences.

```bash
npm test
```

Les tests fournis couvrent les combinaisons clavier et bouton et montrent comment simuler des événements (`button.click()`, `window.dispatchEvent(new KeyboardEvent(...))`).

---

## Contribution

1. Forkez le dépôt, installez les dépendances et lancez `npm test`.
2. Ajoutez vos triggers/actions.
3. Soumettez une Pull Request.

Toute suggestion d’effets visuels ou de nouvelles combinaisons est la bienvenue !

---

## Licence

MIT – voir [LICENSE](LICENSE).

---

Bonnes chasses aux Easter eggs ! 🐇

