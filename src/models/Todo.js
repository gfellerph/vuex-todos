import cuid from 'cuid';

export default class Todo {
  constructor (text) {
    this.id = cuid();
    this.text = text || '';
    this.toggled = false;
  }
}