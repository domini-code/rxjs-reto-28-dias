import { CombineLatestAllComponent } from './shared/components/combine-latest-all/combine-latest-all.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactModule } from './pages/contact/contact.module';
import { StartStopComponent } from '@shared/components/start-stop/start-stop.component';
import { SingleComponent } from '@shared/components/single/single.component';
import { StartWithComponent } from '@shared/components/start-with/start-with.component';
import { FromEventComponent } from '@shared/components/from-event/from-event.component';
import { WithLatestFromComponent } from '@shared/components/with-latest-from/with-latest-from.component';
import { HttpClientModule } from '@angular/common/http';
import { ConcatWithComponent } from '@shared/components/concat-with/concat-with.component';


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
    FromEventComponent,
    CombineLatestAllComponent,
    WithLatestFromComponent,
    HttpClientModule,
    ConcatWithComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
