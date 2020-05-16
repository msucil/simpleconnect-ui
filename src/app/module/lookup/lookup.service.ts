import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {DefaultService, LookupRequest, LookupResponse, LookupResponsePage} from "../../openapi";


@Injectable({
  providedIn: 'root'
})
export class LookupService {

  constructor(private api: DefaultService) {

  }

  query(): Observable<LookupResponsePage> {
    return this.api.lookupGet();
  }

  save(request: LookupRequest): Observable<LookupResponse> {
    return this.api.lookupPost(request);
  }



}
