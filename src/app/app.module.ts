import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentLayoutComponent } from './layout/content-layout/content-layout.component';
import { NavLayoutComponent } from './layout/nav-layout/nav-layout.component';
import { FooterLayoutComponent } from './layout/footer-layout/footer-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentLayoutComponent,
    NavLayoutComponent,
    FooterLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
