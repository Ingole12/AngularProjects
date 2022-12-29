import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FormassinComponent } from './Forms/formassin/formassin.component';
import { SimpletemplateformComponent } from './Forms/simpletemplateform/simpletemplateform.component';
import { TempAssinComponent } from './Forms/temp-assin/temp-assin.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LptopComponent } from './product/laptop/lptop.component';
import { MobileComponent } from './product/mobile/mobile.component';
import { ProductComponent } from './product/product.component';
import { ProductsModule } from './product/products.module';
import { TvComponent } from './product/tv/tv.component';
import { WashingMachinComponent } from './product/washing-machin/washing-machin.component';
import { DemoPostComponent } from './services/demo-post/demo-post.component';
import { PostDetailsComponent } from './services/post-details/post-details.component';


const routes: Routes = [
  
  {path:'', redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent}, 
   { path:'aboutus' ,component:AboutusComponent} ,// localhost://4200/aboutus
   { path:'contactus' ,component:ContactusComponent},
  //  { path:'product' ,component:ProductComponent ,children:[
  //   // {path:'',component:ProductComponent},
  //   {path:'laptop',component:LptopComponent},
  //   {path:'mobile',component:MobileComponent},
  //   {path:'tv',component:TvComponent},
  //   {path:'wachingMachine',component:WashingMachinComponent},
  //  ]},
   { path:'simpleTemp' ,component:SimpletemplateformComponent},
   { path:'tempAssin' ,component:TempAssinComponent},
   {path:'formAssin', component:FormassinComponent},
   {path:'post',component:DemoPostComponent},
   
   {path:'postdetails/:id',component:PostDetailsComponent},  //Router parameter

   {path:'product', loadChildren:'./product/products.module#ProductsModule'},
   {path:'electronic', loadChildren:'./electronics/electronic.module#ElectronicModule'},  //syntax of lazy loading approach

   {path:'**', component:PagenotfoundComponent},
];



@NgModule({
  imports: [RouterModule.forRoot(routes,
    // {preloadingStrategy:PreloadAllModules}
    ),    //PreLoading syntax 
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(){
    console.log('Routing Module called');
    
  }
 }

  