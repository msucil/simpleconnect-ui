import {Routes} from "@angular/router";
import {ConsumerComponent} from "./consumer.component";
import {ConsumerUpdateComponent} from "./consumer.update.component";


export const consumerRouter: Routes = [
  {
    path: '',
    component: ConsumerComponent
  },

  {
    path: 'new',
    component: ConsumerUpdateComponent
  }


];
