import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(private _http: HttpClient) { }

  getEvents() {
    return this._http.get('http://localhost:3000/proxy?targetUrl=https://gateway.tkt.ge/Events/Top/')
  }
}
