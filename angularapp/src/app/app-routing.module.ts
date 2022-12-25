import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FormassinComponent } from './Forms/formassin/formassin.component';
import { SimpletemplateformComponent } from './Forms/simpletemplateform/simpletemplateform.component';
import { TempAssinComponent } from './Forms/temp-assin/temp-assin.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';


const routes: Routes = [
  
   {path:'login',component:LoginComponent}, 
  //  {path:'', redirectTo:'login',pathMatch:'full'},
   { path:'aboutus' ,component:AboutusComponent} ,// localhost://4200/aboutus
   { path:'contactus' ,component:ContactusComponent},
   { path:'product' ,component:ProductComponent},
   { path:'simpleTemp' ,component:SimpletemplateformComponent},
   { path:'tempAssin' ,component:TempAssinComponent},
   {path:'formAssin', component:FormassinComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

 