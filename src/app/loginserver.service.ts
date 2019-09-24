import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginserverService {

  constructor(private http: HttpClient) { }

  private url = 'http://104.248.31.49/api';

  getData() {
    return this.http.get(this.url);
  }
}
