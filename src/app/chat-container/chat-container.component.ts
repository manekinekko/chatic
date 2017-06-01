import { Component, OnInit, ViewChild } from '@angular/core';
import { FirebaseListObservable, AngularFireDatabase } from "angularfire2/database";

@Component({
  selector: 'app-chat-container',
  templateUrl: './chat-container.component.html',
  styleUrls: ['./chat-container.component.css']
})
export class ChatContainerComponent implements OnInit {
  
  @ViewChild('section') sectionRef;

  thread: FirebaseListObservable<any[]>;

  constructor(private db: AngularFireDatabase) {
    this.thread = this.db.list('/thread', {
      query: {
        orderBy: 'date',
        limitToLast: 100
      }
    });
  }

  ngOnInit() {
  }

  sendMessage(message) {
    this.thread.push({
      avatar: 'https://www.wanimo.com/veterinaire/images/articles/chat/chaton-diarrhee.jpg',
      user: 'you',
      message,
      date: +new Date()
    });
  }

}
