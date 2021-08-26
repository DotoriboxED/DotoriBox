import {SampleDto} from "./sampleDto";

export class StockDto {
  id?: number;
  stock?: number;
  sales?: number;
  taxiId?: number;
  sampleId?: number;
  sample?: SampleDto;
  isDeleted?: boolean;
}
