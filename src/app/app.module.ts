import { NgModule,APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from '../components/home/home.component';
import { MfeService } from 'src/mef/services/mfe.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {
    provide: APP_INITIALIZER,
    useFactory: (mfeService: MfeService) => () =>
    mfeService.init(),
    deps: [MfeService],
    multi: true,
  },
],
  bootstrap: [AppComponent]
})
export class AppModule { }
