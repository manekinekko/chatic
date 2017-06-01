import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-input',
  templateUrl: './chat-input.component.html',
  styleUrls: ['./chat-input.component.css']
})
export class ChatInputComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  send(text) {
    console.log(text);
    
  }

}
