import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {LookupComponent} from "./lookup.component";
import {lookupRoutes} from "./lookup.router";
import {AgGridModule} from "ag-grid-angular";
import {LookupUpdateComponent} from "./lookup.update.component";
import {ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";

@NgModule({
  imports: [RouterModule.forChild(lookupRoutes), AgGridModule.withComponents([]), ReactiveFormsModule, CommonModule],
  declarations: [LookupComponent, LookupUpdateComponent],
})
export class LookupModule {
}
