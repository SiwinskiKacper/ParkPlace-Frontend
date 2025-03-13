import { ParkingSpot } from "./parking-spot";

export interface Reservation {
    parkingSpot : ParkingSpot;
    startTime : number;
    endTime : number;
}