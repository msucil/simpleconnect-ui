import {Component} from '@angular/core';
import {ProviderService} from "./provider.service";
import {FormBuilder, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {LookupResponse, ProviderRequest, ProviderResponse, ProviderResponsePage} from "../../../openapi";
import {LookupService} from "../../lookup/lookup.service";
import {GridOptions} from "ag-grid-community";
import {GridCommonConfiguration} from "../../../grid/grid.common.configuration";

@Component({
  selector: 'app-lookup-update',
  templateUrl: './provider.update.component.html'
})
export class ProviderUpdateComponent {

  isSaving = false;
  gridOptions: Partial<GridOptions>;
  defaultColDef: any;
  gridApi?: any;
  gridColumnApi?: any;
  columnDefs?: any;
  rowSelection = 'multiple';
  rowData: Array<LookupResponse>;


  editForm = this.fb.group({
    name: [null, [Validators.required]],
    currentAddress: [null, [Validators.required]],
    reference: [null]
  });

  constructor(protected service: ProviderService, protected lookupService: LookupService, private fb: FormBuilder, private router: Router) {
    this.gridOptions = GridCommonConfiguration.getGridOptions();
    this.defaultColDef = GridCommonConfiguration.defaultColumnOptions();
    this.columnDefs = this.getColumnDef();
  }

  previousState(): void {
    this.router.navigate(['provider']);
  }

  save(): void {
    this.isSaving = true;
    const provider = this.createFromForm();
    let codes = [];
    for (const lookup of this.gridApi.getSelectedRows()) {
      codes.push({code: lookup.code});
    }
    provider.provides = codes;
    this.subscribeToSaveResponse(this.service.save(provider));
  }

  private createFromForm(): ProviderRequest {
    return {
      name: this.editForm.get(['name'])!.value,
      currentAddress: this.editForm.get(['currentAddress'])!.value,
      reference: this.editForm.get(['reference'])!.value,
      provides: []
    }
  }

  protected subscribeToSaveResponse(result: Observable<ProviderResponse>): void {
    result.subscribe(
      () => this.onSaveSuccess(),
      () => this.onSaveError()
    );
  }

  protected onSaveSuccess(): void {
    this.isSaving = false;
    this.previousState();
  }

  protected onSaveError(): void {
    this.isSaving = false;
    alert('got some error response')
  }


  public onGridReady($event: any): void {
    this.gridApi = $event.api;
    this.gridColumnApi = $event.gridColumnApi;
    this.lookupService.query().subscribe((response) => this.onSuccess(response), (response) => this.onFail(response));
  }


  private onSuccess(response: ProviderResponsePage): void {
    this.rowData = response.content;
    this.gridApi.refreshCells();
  }

  private onFail(response: any): void {

  }

  protected getColumnDef(): any {
    const cols = [
      {headerName: 'Category', field: 'category'},
      {headerName: 'Code', field: 'code', checkboxSelection: true},
      {headerName: 'Description', field: 'description'},
      {headerName: 'Additional Info', field: 'additionalInfo'}
    ];
    return cols;
  }


}
