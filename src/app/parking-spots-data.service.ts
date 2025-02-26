import { Injectable } from '@angular/core';
import { ParkingSpot } from './models/parking-spot';

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
