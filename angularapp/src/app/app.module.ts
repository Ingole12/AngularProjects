import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';

@NgModule({
  declarations: [//all component in here
    AppComponent,
    ServerComponent,
    OneComponent,
    TwoComponent
  ],
  imports: [ // all modules
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],// all services 
  bootstrap: [OneComponent] // default loading component hearer
})
export class AppModule { }
