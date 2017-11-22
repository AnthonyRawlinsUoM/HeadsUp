import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ApiconsumerService {

  constructor(private http: Http) { }

  private apiUrl = 'http://localhost:1880/api';

  // Utility function
  private getHeaders() {
    // I included these headers because otherwise FireFox
    // will request text/html
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }

  // Get Capabilities
  getAPI(): Observable<any[]> {
    return this.http.get(`${this.apiUrl}`)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  // RESTful API
  callAPI(path:string): Observable<any[]> {
    return this.http.get(`${this.apiUrl}${path}`)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

}
