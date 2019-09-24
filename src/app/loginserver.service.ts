import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginserverService {

  private url = 'http://104.248.31.49/api';

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get(this.url);
  }
}
