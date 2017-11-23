import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class GeoJsonconsumerService {

  constructor(private http: HttpClient) { }

  private url = 'ftp://ftp.drivehq.com/mingonn/HeadsUp/';

  // Utility function
  private getHeaders() {
    // I included these headers because otherwise FireFox
    // will request text/html
    let headers = new HttpHeaders();
    headers.append('Accept', 'application/json');
    return headers;
  }

  getJSON(path:string): Observable<any[]> {
    return this.http.get(`${this.url}${path}`, { headers: this.getHeaders() })
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
}
