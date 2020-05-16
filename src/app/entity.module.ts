import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'lookup',
        loadChildren: () => import('./module/lookup/lookup.module').then(m => m.LookupModule)
      },
      {
        path: 'provider',
        loadChildren: () => import('./module/seeker/provider/provider.module').then(m => m.ProviderModule)
      },
      {
        path: 'consumer',
        loadChildren: () => import('./module/seeker/consumer/consumer.module').then(m => m.ConsumerModule)
      }
    ])
  ],
})
export class EntityModule {
}
