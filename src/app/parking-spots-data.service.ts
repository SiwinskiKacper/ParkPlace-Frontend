import { Injectable } from '@angular/core';

export interface ParkingSpot {
  id: number;  zone: string; floor: number; number: number; available: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ParkingSpotsDataService {
  constructor() { }

  protected static parkingSpots: ParkingSpot[] = [
    {id: 0, zone: 'A', floor: 1, number: 1, available: false},
    {id: 1, zone: 'A', floor: 1, number: 2, available: false},
    {id: 2, zone: 'A', floor: 2, number: 1, available: false},
    {id: 3, zone: 'B', floor: 1, number: 1, available: true},
    {id: 4, zone: 'B', floor: 1, number: 2, available: true},
  ];;

  static getAllParkingSpots(): ParkingSpot[] {
    return this.parkingSpots;
  }
}
