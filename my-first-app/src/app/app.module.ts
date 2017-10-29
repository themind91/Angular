import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'  

import { AppComponent } from './app.component';
// importing our first module

import {ServerComponent} from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { HelloAngularComponent } from './hello-angular/hello-angular.component';
import { HelloAngularAgainComponent } from './hello-angular-again/hello-angular-again.component';
@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    HelloAngularComponent,
    HelloAngularAgainComponent

  ],
  imports: [
    BrowserModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
