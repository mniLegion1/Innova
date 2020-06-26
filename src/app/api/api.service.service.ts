import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http: HttpClient) { }

  Tiempo(lat:any, long:any){
    return this.http.get<any>("http://api.weatherapi.com/v1/current.json?key=986cfdf8980c430abd852331202506&q=" + lat + "," + long);
  }
}
