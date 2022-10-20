import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { TranslateComponent } from './translate/translate.component';
import { RouterModule, Routes } from "@angular/router";

const appRoutes: Routes = [
  { path: "translate", component: TranslateComponent },
  { path: "", component: TranslateComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    TranslateComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
