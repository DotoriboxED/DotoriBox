import { SampleDto } from './sampleDto';

export class SampleInfoDto {
    id?: number;
    name?: string;
    sampleType?: string;
    manufacture?: string;
    salesFrom?: string;
    customerConsulting?: string;
    sampleQuestion?: string;
    isDeleted?: boolean;
    sample?: SampleDto;
    sampleId?: number;
}
