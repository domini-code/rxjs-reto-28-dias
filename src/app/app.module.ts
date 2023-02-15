import { NotFoundComponent } from './pages/not-found/not-found.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactModule } from './pages/contact/contact.module';
import { StartStopComponent } from '@shared/components/start-stop/start-stop.component';
import { SingleComponent } from '@shared/components/single/single.component';
import { StartWithComponent } from '@shared/components/start-with/start-with.component';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NotFoundComponent,
    ContactModule,
    StartStopComponent,
    SingleComponent,
    StartWithComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
