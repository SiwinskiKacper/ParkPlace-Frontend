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

  protected parkingSpots: ParkingSpot[] = [
    {id: 0, zone: 'A', floor: 1, number: 1, available: false},
    {id: 1, zone: 'A', floor: 1, number: 2, available: false},
    {id: 2, zone: 'A', floor: 2, number: 1, available: false},
    {id: 3, zone: 'B', floor: 1, number: 1, available: true},
    {id: 4, zone: 'B', floor: 1, number: 2, available: true},
  ];

  getAllParkingSpots(): Observable<ParkingSpot[]> {
    return this.http.get<ParkingSpot[]>(`${this.base_url}/api/Parking/available-spots`);
  }
}