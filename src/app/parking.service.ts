import { Injectable } from '@angular/core';
import { ParkingSpot } from './models/parking-spot';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParkingService {
  base_url = 'https://localhost:7083';

  constructor(private http: HttpClient) {}

  getAllParkingSpots(): Observable<ParkingSpot[]> {
    return this.http.get<ParkingSpot[]>(`${this.base_url}/api/Parking/available-spots`);
  }
}