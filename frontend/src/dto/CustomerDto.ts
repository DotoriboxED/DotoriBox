import { TaxiDto } from './taxiDto';
import { SampleDto } from './sampleDto';

export class CustomerDto {
    id?: number;
    isMale?: boolean;
    taxi?: TaxiDto;
    age?: number;
    taxiId?: number;
    score?: number;
    review?: string;
    sample?: SampleDto;
    sampleId?: number;
}
