import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { MatSidenavModule } from "@angular/material/sidenav";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { HeaderComponent } from "./header/header.component";
import { from } from "rxjs";
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { ContentsComponent } from './contents/contents.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, HeaderComponent, SidemenuComponent, ContentsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
