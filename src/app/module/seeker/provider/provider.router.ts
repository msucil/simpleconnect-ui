import {Routes} from "@angular/router";
import {ProviderComponent} from "./provider.component";
import {ProviderUpdateComponent} from "./provider.update.component";


export const providerRoutes: Routes = [
  {
    path: '',
    component: ProviderComponent
  },

  {
    path: 'new',
    component: ProviderUpdateComponent
  }


];
