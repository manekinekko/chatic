import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ChatContainerComponent} from './chat-container.component';
import { ChatListComponent } from './chat-list/chat-list.component';
import { ChatInputComponent } from './chat-input/chat-input.component';
import { ChatItemComponent } from './chat-item/chat-item.component';
import { AngularFireDatabaseModule } from "angularfire2/database";

@NgModule({
  imports: [
    CommonModule,
    AngularFireDatabaseModule
  ],
  declarations: [
    ChatContainerComponent,
    ChatListComponent,
    ChatInputComponent,
    ChatItemComponent
  ],
  exports: [
    ChatContainerComponent
  ]
})
export class ChatContainerModule { }
