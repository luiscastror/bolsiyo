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

  get(q: string, cat: any): Observable<any> {
    const base = this.baseURL + '?key=' + this.key;
    const query = q ? '&lang=es&q=' + q : '';
    const category = cat ? '&category=' + cat : '';

    const endpoint = base + query + category;
    return this.http.get(endpoint)
  }

}
