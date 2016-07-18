import { bootstrap }    from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent } from './app.component';
import { appRouterProviders } from './app.routes';
import { Location, LocationStrategy, HashLocationStrategy} from '@angular/common';

enableProdMode();
bootstrap(AppComponent, [
  appRouterProviders,
    {provide: LocationStrategy, useClass: HashLocationStrategy}
]);