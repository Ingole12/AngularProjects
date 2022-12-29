import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CamerasComponent } from './cameras/cameras.component';
import { ElectronicsComponent } from './electronics.component';
import { GamingComponent } from './gaming/gaming.component';

const routes: Routes = [
  { path:'' ,component:ElectronicsComponent ,children:[

    {path:'camera',component:CamerasComponent},
    {path:'gaming',component:GamingComponent},
   ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ElectronicRoutingModule { 
  constructor(){
    console.log('ElectronicRoutingModule called');
    
  }
}
