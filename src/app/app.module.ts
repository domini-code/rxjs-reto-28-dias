import { NotFoundComponent } from './pages/not-found/not-found.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactModule } from './pages/contact/contact.module';
import { StartStopComponent } from '@shared/components/start-stop/start-stop.component';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NotFoundComponent,
    ContactModule,
    StartStopComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
