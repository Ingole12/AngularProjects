import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LptopComponent } from './laptop/lptop.component';
import { MobileComponent } from './mobile/mobile.component';
import { TvComponent } from './tv/tv.component';
import { WashingMachinComponent } from './washing-machin/washing-machin.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product.component';
import { UtilityModule } from '../models/utility.module';

const prodRoutes : Routes = [
  { path:'' ,component:ProductComponent ,children:[
    // {path:'',component:ProductComponent},
    {path:'laptop',component:LptopComponent},
    {path:'mobile',component:MobileComponent},
    {path:'tv',component:TvComponent},
    {path:'wachingMachine',component:WashingMachinComponent},
   ]}
]

@NgModule({
  declarations: [
      ProductComponent   ,
    LptopComponent,
    MobileComponent,
    TvComponent,
    WashingMachinComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(prodRoutes)
    ,UtilityModule
  ],
  exports:[RouterModule]
})
export class ProductsModule {   // splited from app.module into productModule
  constructor(){
    console.log('Product Module called');
    
  }
}
