import {Component} from '@angular/core';
import {ConsumerService} from "./consumer.service";
import {FormBuilder, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {ConsumerRequest, ConsumerResponse, LookupResponse, ProviderResponsePage} from "../../../openapi";
import {GridOptions} from "ag-grid-community";
import {LookupService} from "../../lookup/lookup.service";
import {GridCommonConfiguration} from "../../../grid/grid.common.configuration";

@Component({
  selector: 'app-lookup-update',
  templateUrl: './consumer.update.component.html'
})
export class ConsumerUpdateComponent {
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
    address: [null, [Validators.required]],
    reference: [null]
  });

  constructor(protected service: ConsumerService, protected lookupService: LookupService, private fb: FormBuilder, private router: Router) {
    this.gridOptions = GridCommonConfiguration.getGridOptions();
    this.defaultColDef = GridCommonConfiguration.defaultColumnOptions();
    this.columnDefs = this.getColumnDef();
  }

  previousState(): void {
    this.router.navigate(['consumer']);
  }

  save(): void {
    this.isSaving = true;
    const consumer = this.createFromForm();
    let codes = [];
    for (const lookup of this.gridApi.getSelectedRows()) {
      codes.push({code: lookup.code});
    }
    consumer.consumes = codes;
    this.subscribeToSaveResponse(this.service.save(consumer));
  }

  private createFromForm(): ConsumerRequest {
    return {
      name: this.editForm.get(['name'])!.value,
      address: this.editForm.get(['address'])!.value,
      reference: this.editForm.get(['reference'])!.value,
      consumes: []
    }
  }

  protected subscribeToSaveResponse(result: Observable<ConsumerResponse>): void {
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
