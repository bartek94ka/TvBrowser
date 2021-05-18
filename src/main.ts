import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

const bootstrapPromise = platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

bootstrapPromise.then(success => console.log(`Bootstrap success`))
  .catch(err => console.error(err));
