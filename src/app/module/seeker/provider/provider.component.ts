import {Component, OnInit} from '@angular/core';
import {ProviderService} from "./provider.service";
import {GridBaseComponent} from "../../../grid/grid.base.component";

@Component({
  selector: 'app-lookup',
  templateUrl: './provider.component.html'
})
export class ProviderComponent extends GridBaseComponent implements OnInit {

  constructor(service: ProviderService) {
    super(service);
  }

  ngOnInit(): void {

  }

  protected getColumnDef(): any {
    const cols = [
      {headerName: 'Name', field: 'name'},
      {headerName: 'Address', field: 'currentAddress'},
      {headerName: 'reference', field: 'reference'},
      {headerName: 'provides', field: 'provides'}
    ];
    return cols;
  }

}
