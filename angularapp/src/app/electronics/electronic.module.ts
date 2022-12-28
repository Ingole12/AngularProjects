import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CamerasComponent } from './cameras/cameras.component';
import { GamingComponent } from './gaming/gaming.component';
import { RouterModule, Routes } from '@angular/router';
import { ElectronicsComponent } from './electronics.component';
import { UtilityModule } from '../models/utility.module';

const prodRoutes : Routes = [
  { path:'electronics' ,component:ElectronicsComponent ,children:[
    // {path:'',component:ProductComponent},
    {path:'camera',component:CamerasComponent},
    {path:'gaming',component:GamingComponent},
   ]}
]

@NgModule({
  declarations: [CamerasComponent, GamingComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(prodRoutes),
    UtilityModule
  ],
  exports:[RouterModule]
})
export class ElectronicModule { }
