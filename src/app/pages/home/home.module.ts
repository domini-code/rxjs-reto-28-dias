import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { AsyncComponent } from '@shared/components/async/async.component';
import { CachingComponent } from '@shared/components/caching/caching.component';


@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule, AsyncComponent, CachingComponent],
})
export class HomeModule {}
