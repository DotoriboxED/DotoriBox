import { SampleDto } from './sample.dto';

export class SampleInfoDto {
  id?: number;
  name?: string;
  sampleType?: string;
  manufacture?: string;
  nutrient?: string;
  method?: string;
  isDeleted?: boolean;
  sample?: SampleDto;
  sampleId?: number;
}
