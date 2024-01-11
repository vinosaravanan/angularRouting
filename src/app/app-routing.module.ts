import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HiiComponent } from './hii/hii.component';
import { HolloComponent } from './hollo/hollo.component';
import { TestComponent } from './test/test.component';
import { UserGuard,Childguard, UserCanDeactive, DetailsResolver } from './user.guard';
import { AppComponent } from './app.component';

const routes: Routes = [

  // {path:'Hi', component: HiiComponent,children:[
  //   {path:'hichilren', component:HolloComponent}
  // ] },

  // {path:'', component:TestComponent},

    // {path:'', redirectTo:'Hi', pathMatch:'full'},

     {path:"test/:id", component:TestComponent, resolve:{resolvedData:DetailsResolver}},

  { path: "user", loadChildren: () => import('./modulea/modulea.module').then(m => m.ModuleaModule) }

 
    // Routing Guard and athentication, atherisetion 
   
    // {path:'user', component:HolloComponent,
    // children:[
    //      {path:'hii', component:HiiComponent, }
    // ],canActivate:[UserGuard],canActivateChild:[Childguard]},

    // {path:'', component:AppComponent, canDeactivate:[UserCanDeactive]}
     

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
