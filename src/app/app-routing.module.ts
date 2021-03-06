import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { MainLayoutComponent } from './modules/feature-main-layout/components/main-layout/main-layout.component';

const routes: Routes = [
  { path: '', component: MainLayoutComponent, loadChildren: () => import('./modules/feature-main-layout/feature-main-layout.module').then(m => m.FeatureMainLayoutModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules,
    relativeLinkResolution: 'legacy'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
