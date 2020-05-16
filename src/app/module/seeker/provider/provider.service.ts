import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {DefaultService, ProviderRequest, ProviderResponse, ProviderResponsePage} from "../../../openapi";


@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  constructor(private api: DefaultService) {

  }

  query(): Observable<ProviderResponsePage> {
    return this.api.providerGet();
  }

  save(request: ProviderRequest): Observable<ProviderResponse> {
    return this.api.providerPost(request);
  }


}
