import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.prod'


@Injectable({
  providedIn: 'root'
})
export class MainService {

  baseURL: string = environment.bolsiyo.services.pixabay.url;
  key: string = environment.bolsiyo.services.pixabay.key;

  constructor(private http: HttpClient) { }

  get(): Observable<any> {
    return this.http.get(this.baseURL + '?key=' + this.key)
  }

}
