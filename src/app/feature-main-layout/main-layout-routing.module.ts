import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SerialDetailsComponent } from "../feature-serials/serial-details/serial-details.component";
import { MainLayoutContentComponent } from "./main-layout-content/main-layout-content.component";

const routes: Routes = [
    {
        path: '',
        component: MainLayoutContentComponent,
    },
    {
        path: 'details/:username',
        component: SerialDetailsComponent,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MainLayoutRoutingModule { }