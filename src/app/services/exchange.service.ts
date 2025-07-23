import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_KEY = 'RVZG0GHEV2KORLNA';
const BASE_URL = 'https://api-brl-exchange.actionlabs.com.br/api/1.0/open';

@Injectable({
  providedIn: 'root'
})
export class ExchangeService {
  constructor(private http: HttpClient) {}

  getCurrentExchangeRate(from: string, to: string): Observable<any> {
    return this.http.get(`${BASE_URL}/currentExchangeRate?apiKey=${API_KEY}&from_symbol=${from}&to_symbol=${to}`);
  }

  getDailyExchangeRate(from: string, to: string): Observable<any> {
    return this.http.get(`${BASE_URL}/dailyExchangeRate?apiKey=${API_KEY}&from_symbol=${from}&to_symbol=${to}`);
  }
}
