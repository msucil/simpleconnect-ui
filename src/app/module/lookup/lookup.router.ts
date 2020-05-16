import {Routes} from "@angular/router";
import {LookupComponent} from "./lookup.component";
import {LookupUpdateComponent} from "./lookup.update.component";


export const lookupRoutes: Routes = [
  {
    path: '',
    component: LookupComponent
  },

  {
    path: 'new',
    component: LookupUpdateComponent
  }


];
