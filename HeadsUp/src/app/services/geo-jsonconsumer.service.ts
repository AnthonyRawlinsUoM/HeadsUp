import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class GeoJsonconsumerService {

  constructor(private http: Http) { }

  private ftpUrl = 'ftp://ftp.drivehq.com/mingonn/HeadsUp/';

  // Utility function
  private getHeaders() {
    // I included these headers because otherwise FireFox
    // will request text/html
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }

  getIndex(): Observable<any[]> {
    return this.http.get(`${this.ftpUrl}`, { headers: this.getHeaders() })
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  getJSON(path:string): Observable<any[]> {
    return this.http.get(`${this.ftpUrl}${path}`, { headers: this.getHeaders() })
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
}
