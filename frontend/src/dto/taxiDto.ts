import {DriverDto} from "./driverDto";

export class TaxiDto {
    id?: number;
    taxiNumber?: number;
    isDeleted?: boolean;
    driver?: DriverDto;
}