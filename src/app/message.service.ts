import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  messages: string[] = [];
  messagesTitle: string = '';
  add(message: string) {
    this.messages.push(message);
  }
  setTitle(messagesTitle: string) {
    this.messagesTitle = messagesTitle;
  }
  clear() {
    this.messages = [];
    this.messagesTitle = "Message is now Reset";
  }
  constructor() {}
}
