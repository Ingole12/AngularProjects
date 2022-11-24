import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { FormsModule } from '@angular/forms';
import { DatabindingComponent } from './databinding/databinding.component';


@NgModule({
  declarations: [//all component in here
    AppComponent,
    ServerComponent,
    OneComponent,
    TwoComponent,
    DatabindingComponent
  ],
  imports: [ // all modules
    BrowserModule,AppRoutingModule,FormsModule
  ],
  providers: [],// all services 
  bootstrap: [DatabindingComponent] // default loading component hearer
})
export class AppModule { }
