import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { CardComponent } from './card/card.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { ContainerComponent } from './container/container.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    CardComponent,
    ContainerComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MatCardModule,
    MatButtonModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
