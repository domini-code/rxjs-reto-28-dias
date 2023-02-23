import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { UnSubscribeComponent } from '@shared/components/un-subscribe/un-subscribe.component';


@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule, UnSubscribeComponent],
})
export class HomeModule {}
