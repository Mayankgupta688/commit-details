  import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './container/appComponent/app.component';
import { RepoContainerComponent } from './container/repoContainerComponent/repo-container.component';
import HeaderComponent from "./components/headerComponent/header.component";
import RepoDetailsComponent  from "./components/repoDetailsComponent/repo-details.container";

@NgModule({
  declarations: [
    AppComponent,
    RepoContainerComponent,
    HeaderComponent,
    RepoDetailsComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
