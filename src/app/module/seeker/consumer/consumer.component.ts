import {Component, OnInit} from '@angular/core';
import {ConsumerService} from "./consumer.service";
import {GridBaseComponent} from "../../../grid/grid.base.component";

@Component({
  selector: 'app-lookup',
  templateUrl: './consumer.component.html'
})
export class ConsumerComponent extends GridBaseComponent implements OnInit {

  constructor(service: ConsumerService) {
    super(service);
  }

  ngOnInit(): void {

  }

  protected getColumnDef(): any {
    const cols = [
      {headerName: 'Name', field: 'name'},
      {headerName: 'Address', field: 'address'},
      {headerName: 'Reference', field: 'reference'},
      {headerName: 'Consumes', field: 'consumes'}
    ];
    return cols;
  }

}
