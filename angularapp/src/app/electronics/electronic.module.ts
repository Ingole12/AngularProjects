import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CamerasComponent } from './cameras/cameras.component';
import { GamingComponent } from './gaming/gaming.component';
import { ElectronicsComponent } from './electronics.component';
import { UtilityModule } from '../models/utility.module';
import { ElectronicRoutingModule } from './electronic-routing.module';

@NgModule({
  declarations: [
    ElectronicsComponent,
    CamerasComponent,
     GamingComponent],
  imports: [
    CommonModule,
    UtilityModule,       // This is Shared Module for sharing custom directive.
    ElectronicRoutingModule
  ],
})
export class ElectronicModule {
  constructor(){
    console.log('Electronics Module Called');
    
  }
 }
