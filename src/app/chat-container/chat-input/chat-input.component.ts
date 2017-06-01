import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-chat-input',
  templateUrl: './chat-input.component.html',
  styleUrls: ['./chat-input.component.css']
})
export class ChatInputComponent implements OnInit {

  @ViewChild('text') textRef: ElementRef;

  @Output() message: EventEmitter<string>;

  constructor() {
    this.message = new EventEmitter<string>();
  }

  ngOnInit() {
  }

  send(text) {
    this.message.emit(text);
    this.textRef.nativeElement.value = '';
  }

}
