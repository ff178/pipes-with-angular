import { BrowserModule } from '@angular/platform-browser';
import { /*LOCALE_ID,*/ NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CapitalPipe } from './Pipes/capital.pipe';
import { DomsafePipe } from './Pipes/domsafe.pipe';
import { HidepasswordPipe } from './Pipes/hidepassword.pipe';

//Put the date in spanish
//import localeEs from '@angular/common/locales/es';
//import { registerLocaleData } from '@angular/common';
//registerLocaleData(localeEs);

@NgModule({
  declarations: [
    AppComponent,
    CapitalPipe,
    DomsafePipe,
    HidepasswordPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [ /*{ provide: LOCALE_ID, useValue: 'es' } */],
  bootstrap: [AppComponent]
})
export class AppModule { }
