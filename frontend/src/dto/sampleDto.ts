import { StockDto } from './stockDto';
import { CustomerDto } from './CustomerDto';
import { SampleInfoDto } from './SampleInfoDto';
import { SampleStockDto } from './SampleStockDto';

export class SampleDto {
    id?: number;
    price?: number;
    explain?: string;
    sampleName?: string;
    isDeleted?: boolean;
    image?: string;
    stocks?: StockDto[];
    customers?: CustomerDto[];
    sampleInfo?: SampleInfoDto;
    sampleStock?: SampleStockDto;
}
