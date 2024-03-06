**EasterEggs.js**

EasterEggs.js is a lightweight Node.js package designed to seamlessly integrate Easter eggs into your JavaScript or TypeScript web applications. With just a few lines of code, you can easily add interactive Easter eggs that trigger delightful surprises, such as displaying GIFs or images in a modal window.

### Installation

You can install EasterEggs.js via npm:

```bash
npm install easter-eggs-js
```

### Usage

To integrate Easter eggs into your web application, follow these simple steps:

1. Import the necessary classes from EasterEggs.js:

```javascript
import { ActionHandler, EasterModalActionHandler, EasterBuilder } from 'easter-eggs-js';
```

2. Set up the Easter egg functionality in your application, specifying the GIF or image you want to display:

```javascript
// Define the action handler
const actionHandler = new EasterModalActionHandler("./assets/giphy.gif");

// Create an EasterBuilder instance and add click triggers
const easterBuilder = new EasterBuilder(actionHandler)
  .addClickTrigger("easter-button")
  .addClickTrigger("easter-button2")
  .addClickTrigger("easter-button3")
  .addClickTrigger("easter-button4");
```

3. Ensure that the Easter egg functionality is initialized after the DOM has loaded, for example, in an Angular component's `ngAfterViewInit()` method:

```javascript
import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    window.onload = () => {
      // Easter egg setup code here
    }
  }
}
```

### Features

- **Simple Integration**: Easily add Easter eggs to your web application with minimal code changes.
- **Customizable**: Display GIFs or images of your choice in response to Easter egg triggers.
- **Flexible**: Works with both JavaScript and TypeScript projects.
- **Modular**: Minimize coupling between Easter egg functionality and application code for easier maintenance and scalability.

### License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

### Feedback and Contributions

Feedback, bug reports, and contributions are welcome! Feel free to submit issues or pull requests via the [GitHub repository](https://github.com/M4RIIN/easter-egg.js).

### Credits

EasterEggs.js was developed by [Nicolas MARIN](https://github.com/M4RIIN).

---

Thank you for using EasterEggs.js! We hope it brings some fun and joy to your web applications. If you have any questions or need further assistance, don't hesitate to reach out. Happy coding! 🐣🎉
```
