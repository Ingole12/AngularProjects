import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { FormsModule } from '@angular/forms';
import { DatabindingComponent } from './databinding/databinding.component';
import { DemodirectivesComponent } from './demodirectives/demodirectives.component';
import { NgswitchComponent } from './ngswitch/ngswitch.component';
import { StructuraldirectivesassinComponent } from './structuraldirectivesassin/structuraldirectivesassin.component';
import { AttriComponent } from './attri/attri.component';
import { CustdirDirective } from './custdir.directive';
import { PasswordComponent } from './password/password.component';
import { PassDirective } from './pass.directive';
import { ParentComponent } from './@Input/parent/parent.component';
import { ChildComponent } from './@Input/child/child.component';
import { ParentOneComponent } from './@Output/parent-one/parent-one.component';
import { ChildOneComponent } from './@Output/child-one/child-one.component';


@NgModule({
  declarations: [//all component,directive-custome, coustome-pipe in here
    AppComponent,
    ServerComponent,
    OneComponent,
    TwoComponent,
    DatabindingComponent,
    DemodirectivesComponent,
    NgswitchComponent,
    StructuraldirectivesassinComponent,
    AttriComponent,
    CustdirDirective,
    PasswordComponent,
    PassDirective,
    ParentComponent,
    ChildComponent,
    ParentOneComponent,
    ChildOneComponent
  ],
  imports: [ // all modules
    BrowserModule,AppRoutingModule,FormsModule
  ],
  providers: [],// all services 
  bootstrap: [ParentOneComponent] // default loading component hearer
})
export class AppModule { }
