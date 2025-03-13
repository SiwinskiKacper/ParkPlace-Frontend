import { Injectable } from '@angular/core';
import { ParkingSpot } from './models/parking-spot';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reservation } from './models/reservation';

@Injectable({
  providedIn: 'root'
})
export class ParkingService {
  base_url = 'https://localhost:7083';

  constructor(private http: HttpClient) {}

  getAllParkingSpots(): Observable<ParkingSpot[]> {
    return this.http.get<ParkingSpot[]>(`${this.base_url}/api/Parking/available-spots`);
  }

  getUsersReservedSpots(): Observable<ParkingSpot[]> {
    return this.http.get<ParkingSpot[]>(`${this.base_url}/api/Parking/reserved-spots`);
  }


  reservation_history: Array<Reservation> = [
    {
      startTime : Date.UTC(2025, 3, 11, 10, 58, 57, 608),
      endTime : Date.UTC(2025, 3, 11, 10, 58, 57, 608),
      parkingSpot : {
        id : 0,
        floor : 0,
        zone : "string",
        number : 0,
        available: true}
    },
    {
      startTime : Date.UTC(2025, 3, 11, 10, 58, 57, 608),
      endTime : Date.UTC(2025, 3, 11, 10, 58, 57, 608),
      parkingSpot : {
        id : 0,
        floor : 0,
        zone : "string",
        number : 0,
        available: true}
    },
  ];

  // getUsersReservationHistory() : Array<ParkingSpot> {
  //   return this.reservation_history;
  // }

  // getUsersReservationHistory(): Observable<ParkingSpot[]> {
  //   return this.http.get<ParkingSpot[]>(`${this.base_url}/api/Parking/reservation-history`);
  // }

  reserveSpot(id : string) {
    const data = {
      "id": 0,
      "userId": 0,
      "parkingSpotId": 0,
      "startTime": "2025-03-11T10:58:57.608Z",
      "endTime": "2025-03-11T10:58:57.608Z",
      "day": 0,
      "status": 0,
      "parkingSpot": {
        "id": 0,
        "floor": 0,
        "zone": "string",
        "number": 0,
        "reservations": [
          "string"
        ]
      }
    };
    console.log(data);
    this.http.post(`${this.base_url}/api/Parking/reserve`, data)
  }

  // {
  //   "id": 0,
  //   "userId": 0,
  //   "parkingSpotId": 0,
  //   "startTime": "2025-03-11T10:58:57.608Z",
  //   "endTime": "2025-03-11T10:58:57.608Z",
  //   "day": 0,
  //   "status": 0,
  //   "parkingSpot": {
  //     "id": 0,
  //     "floor": 0,
  //     "zone": "string",
  //     "number": 0,
  //     "reservations": [
  //       "string"
  //     ]
  //   }
  // }
}