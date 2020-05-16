import {Component, OnInit} from '@angular/core';
import {GridBaseComponent} from "../../grid/grid.base.component";
import {LookupService} from "./lookup.service";

@Component({
  selector: 'app-lookup',
  templateUrl: './lookup.component.html'
})
export class LookupComponent extends GridBaseComponent implements OnInit {

  constructor(protected service: LookupService) {
    super(service);
  }

  ngOnInit(): void {

  }

  protected getColumnDef(): any {
    const cols = [
      {headerName: 'Category', field: 'category'},
      {headerName: 'Code', field: 'code',},
      {headerName: 'Description', field: 'description'},
      {headerName: 'Additional Info', field: 'additionalInfo'}
    ];
    return cols;
  }

}
