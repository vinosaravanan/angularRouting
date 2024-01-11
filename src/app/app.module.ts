import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HolloComponent } from './hollo/hollo.component';
import { HiiComponent } from './hii/hii.component';
import { TestComponent } from './test/test.component';
import { ModuleaModule } from './modulea/modulea.module';

@NgModule({
  declarations: [
    AppComponent,
    HolloComponent,
    HiiComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModuleaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
