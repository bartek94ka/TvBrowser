import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SerialDetailsComponent } from "../feature-serials/components/serial-details/serial-details.component";
import { MainLayoutContentComponent } from "./components/main-layout-content/main-layout-content.component";

const routes: Routes = [
    {
        path: '',
        component: MainLayoutContentComponent,
    },
    {
        path: 'details/:id',
        component: SerialDetailsComponent,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MainLayoutRoutingModule { }