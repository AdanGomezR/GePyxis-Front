import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse } from '../models/apiResponse.model';

@Injectable({
  providedIn: 'root'
})
export class SolucionesServiceService {

  constructor(private http: HttpClient) { }

  postData() : Observable<ApiResponse>{
    const httpOptions = {
      headers: new HttpHeaders({
        /*'Accept-Encoding': 'gzip, deflate, br',
        'Access-Control-Allow-Origin': '*',*/
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        /*'Connection': 'keep-alive',
        'DNT': '1',/** 
        'Origin': 'http://gepyxis1',*/
        'X-API-Key': 'qwert12345ZAQ?karen',
      })
    };

    const body = {
      "query": "{getProductosListing{ edges{ node{ idProducto, name, description, picture, cost } } }}"
    };
  

    return this.http.post<ApiResponse>('/api', body, httpOptions);
  }
}
