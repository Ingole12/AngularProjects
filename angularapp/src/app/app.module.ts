import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { HooksComponent } from './LifeCycleHooks/hooks.component';
// import { HookparentComponent } from './LifeCycleHooks/hookparent/hookparent.component';
import { HookparentComponent } from './LifeCycleHooks/hookparent/hookparent.component';
import { DirectiveAssinComponent } from './directive-assin/directive-assin.component';
import { SimpletemplateformComponent } from './Forms/simpletemplateform/simpletemplateform.component';
import { TempAssinComponent } from './Forms/temp-assin/temp-assin.component';
import { ReFormComponent } from './Reactive/re-form/re-form.component';
import { FormassinComponent } from './Forms/formassin/formassin.component';
import { Servicecomp1Component } from './services/servicecomp1/servicecomp1.component';
import { Servicecomp2Component } from './services/servicecomp2/servicecomp2.component';
import { DemoService } from './services/demo.service';
import{HttpClientModule} from '@angular/common/http';
import { AssinReactFormComponent } from './Reactive/assin-react-form/assin-react-form.component';
import { Comp1Component } from './services/comp1/comp1.component';
import { Comp2Component } from './services/comp2/comp2.component';
import { Comp3Component } from './services/comp3/comp3.component';
import { Comp4Component } from './services/comp4/comp4.component';
import { PipeDemoComponent } from './pipe/pipe-demo/pipe-demo.component';
import { CountPipe } from './pipe/count.pipe';
import { FilterpipeComponent } from './pipe/filterpipe/filterpipe.component';
import { FilterPipe } from './pipe/filter.pipe';
import { PipeAssinComponent } from './pipe/pipe-assin/pipe-assin.component';
import { GenderPipe } from './pipe/gender.pipe';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ProductComponent } from './product/product.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { DemoPostComponent } from './services/demo-post/demo-post.component';
import { PostDetailsComponent } from './services/post-details/post-details.component';
import { ProductsModule } from './product/products.module';
import { UtilityModule } from './models/utility.module';
import { ElectronicsComponent } from './electronics/electronics.component';
import { ElectronicModule } from './electronics/electronic.module';



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
    // CustdirDirective,
    PasswordComponent,
    PassDirective,
    ParentComponent,
    ChildComponent,
    ParentOneComponent,
    ChildOneComponent,
    HooksComponent,
    HookparentComponent,
    DirectiveAssinComponent,
    SimpletemplateformComponent,
    TempAssinComponent,
    ReFormComponent,
    FormassinComponent,
    Servicecomp1Component,
    Servicecomp2Component,
    AssinReactFormComponent,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    Comp4Component,
    PipeDemoComponent,
    CountPipe,
    FilterpipeComponent,
    FilterPipe,
    PipeAssinComponent,
    GenderPipe,
    AboutusComponent,
    ContactusComponent,
    ProductComponent,
    LoginComponent,
    PagenotfoundComponent,
    DemoPostComponent,
    PostDetailsComponent,
    ElectronicsComponent
  ],
  imports: [ // all modules
    BrowserModule,AppRoutingModule,FormsModule,ReactiveFormsModule,
    HttpClientModule,ProductsModule,UtilityModule,ElectronicModule
  ],
  providers: [DemoService],// all services 
  bootstrap: [ AppComponent] // default loading component hearer
})
export class AppModule { }
