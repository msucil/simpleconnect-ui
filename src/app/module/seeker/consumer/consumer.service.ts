import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {ConsumerRequest, ConsumerResponse, ConsumerResponsePage, DefaultService} from "../../../openapi";


@Injectable({
  providedIn: 'root'
})
export class ConsumerService {

  constructor(private api: DefaultService) {

  }

  query(): Observable<ConsumerResponsePage> {
    return this.api.consumerGet();
  }

  save(request: ConsumerRequest): Observable<ConsumerResponse> {
    return this.api.consumerPost(request);
  }


}
