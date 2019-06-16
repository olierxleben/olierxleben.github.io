import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule, MatIconModule } from '@angular/material';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ReadingsPageComponent } from './components/readings-page/readings-page.component';
import { AboutmePageComponent } from './components/aboutme-page/aboutme-page.component';
import { BlogPageComponent } from './components/blog-page/blog-page.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ReadingsPageComponent,
    AboutmePageComponent,
    BlogPageComponent,
    NotFoundPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
