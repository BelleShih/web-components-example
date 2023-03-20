export default class MyButton extends HTMLElement {
  constructor() {
    super();

    const button = document.createElement('button');
    button.innerHTML = 'My button';

    this.append(button);
  }
}
