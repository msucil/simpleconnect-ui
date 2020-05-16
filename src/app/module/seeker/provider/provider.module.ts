import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ProviderComponent} from "./provider.component";
import {providerRoutes} from "./provider.router";
import {AgGridModule} from "ag-grid-angular";
import {ProviderUpdateComponent} from "./provider.update.component";
import {ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";

@NgModule({
  imports: [RouterModule.forChild(providerRoutes), AgGridModule.withComponents([]), ReactiveFormsModule, CommonModule],
  declarations: [ProviderComponent, ProviderUpdateComponent],
})
export class ProviderModule {
}
