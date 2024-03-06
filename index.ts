export function addEventToShowMessage(buttonId: string, message: string): void {
    const button = document.getElementById(buttonId);

    if (button) {
        button.addEventListener('click', () => {
            const centerDiv = document.createElement('div');
            centerDiv.style.position = 'absolute';
            centerDiv.style.top = '50%';
            centerDiv.style.left = '50%';
            centerDiv.style.transform = 'translate(-50%, -50%)';
            centerDiv.style.backgroundColor = 'white';
            centerDiv.style.padding = '20px';
            centerDiv.style.border = '1px solid black';
            centerDiv.style.borderRadius = '5px';
            centerDiv.innerText = message;

            document.body.appendChild(centerDiv);
        });
    } else {
        console.error(`Button with ID "${buttonId}" not found.`);
    }
}
