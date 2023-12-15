import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface ChuckInformation {
  icon_url: string;
  id: string;
  url: string;
  value: string;
}

@Injectable({
  providedIn: 'root'
})
export class APIService {
  private url: string = 'https://api.chucknorris.io/jokes/random';

  constructor(private http: HttpClient) { }

  getJoke(): Observable<any> {
    return this.http.get(this.url);
  }
}
