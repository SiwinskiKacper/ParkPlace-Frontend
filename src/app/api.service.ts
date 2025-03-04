import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' // Dzięki temu nie musisz go dodawać do `providers`
})
export class ApiService {
  private apiUrl = 'http://localhost:4200/api'; // Zmień na adres swojego backendu

  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    return this.http.get(`${this.apiUrl}/dane`);
  }
}
