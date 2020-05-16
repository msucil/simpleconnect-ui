export class GridCommonConfiguration {
  private static gridOptions = {
    pagination: true,
    domLayout: 'autoHeight',
    headerHeight: 50,
    rowHeight: 43,
    paginationPageSize: 5,
    cacheBlockSize: 5,
    rowModelType: 'normal'
  };

  private static defaultColDef = {
    sortable: true,
    resizable: true,
    flex: 1,
    minWidth: 100,
    filter: true,
    floatingFilter: true,
    filterParams: {
      suppressAndOrCondition: true,
      floatingFilter: true
    }
  }

  private static viewLink = {
    headerName: '', field: 'uuid', sortable: false, filter: false, width: 30,
    // cellRendererFramework: ViewLinkRendererComponent,
    cellRendererParams: {
      inRouterLink: '/router-path',
    },
    cellStyle: {textAlign: 'center'}
  };

  public static getGridOptions(): any {
    return this.gridOptions;
  }

  public static defaultColumnOptions(): any {
    return this.defaultColDef;

  }

  public static getViewLink(path: string): any {
    this.viewLink.cellRendererParams.inRouterLink = path;
    return this.viewLink;
  }
}
