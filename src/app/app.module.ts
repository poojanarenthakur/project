import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainpageComponent } from './main/mainpage/mainpage.component';
import { SecondpageComponent } from './main/secondpage/secondpage.component';
import { ThirdpageComponent } from './main/thirdpage/thirdpage.component';
import { JobsComponent } from './main/jobs/jobs.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    SecondpageComponent,
    ThirdpageComponent,
    JobsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
