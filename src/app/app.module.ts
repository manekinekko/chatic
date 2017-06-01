import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChatContainerModule } from './chat-container/chat-contaier.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ChatContainerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
