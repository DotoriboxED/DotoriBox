# DTO

이 문서는 DTO에 관한 문서입니다.

## CustomerDto

```typescript
class CustomerDto {
  id?: number;
  isMale?: boolean;
  taxi?: TaxiDto;
  age?: number;
  taxiId?: number;
  sample?: SampleDto;
  sampleId?: number;
  phone?: string;
}
```

* taxiId: Taxi 고유번호입니다.
* sample: Sample Data를 가져옵니다.

## Sample

### SampleDto

```typescript
export class SampleDto {
  id?: number;
  isDeleted?: boolean;
  image?: string;
  stocks?: StockDto[];
  customers?: CustomerDto[];
  sampleInfo?: SampleInfoDto;
  sampleStock?: SampleStockDto;
  sampleTarget?: SampleTargetDto;
}
```

* image: 이미지를 불러올 수 있는 경로입니다.
* stocks: Sample을 싣고 있는 Taxi가 가지고 있는 재고량을 나타냅니다.
* customers: Sample을 소비한 소비자를 나타냅니다.
* SampleInfo: Sample의 정보를 가지고 있는 객체를 가져옵니다.
* SampleStock: Sample의 재고 수를 알고 있는 객체를 가져옵니다.
* SampleTarget: Sample이 목표로 삼고 있는 대상(맞춤형)을 가져옵니다.

### SampleInfoDto

```typescript
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
```

* sampleType: 샘플의 종류입니다.
* manufacture: 샘플 제조사입니다.
* nutrient: 영양성분 입니다.
* method: 먹는 방법입니다.
* sample: Sample 정보를 가져옵니다.

### SampleStockDto

```typescript
export class SampleStockDto {
  id?: number;
  amount?: number;
  sales?: number;
  sample?: SampleDto;
  sampleId?: number;
}
```

* sample: Sample 정보를 가져옵니다.
* amount: Sample의 전체 재고를 나타냅니다.
* sales: Sample의 판매량을 나타냅니다.

### SampleTargetDto

```typescript
export class SampleTargetDto {
  id?: number;
  age?: number;
  isMale?: boolean;
  sampleTargetTimeId: number;
  sampleTargetTime: SampleTargetTimeDto;
  sampleId?: number;
  sampleDto?: SampleDto;
}
```

* sampleTargetTimeId: 샘플이 주로 팔릴 거 같은 시간대 객체 Id를 나타냅니다.

### SampleTargetTime

```typescript
export class SampleTargetTime {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  startAt: Date;
  @Column()
  endAt: Date;
  @OneToMany(
    () => SampleTarget,
    (sampleTarget) => sampleTarget.sampleTargetTime,
  )
  sampleTarget: SampleTarget[];
  @Column({ default: false })
  isDeleted: boolean;
  @AfterLoad()
  updateTime() {
    const result = calculateDate(this.startAt, this.endAt);
    this.startAt = result.startAt;
    this.endAt = result.endAt;
  }
}
```

* startAt: 샘플이 팔릴 시간의 시작 시점입니다.
* endAt: 샘플이 팔릴 시간의 종료 시점입니다.
* sampleTarget: 이 시간대에 어떤 샘플이 팔릴 거 같은지 나타냅니다.

## StockDto

```typescript
export class StockDto {
  id?: number;
  stock?: number;
  sales?: number;
  taxiId?: number;
  sampleId?: number;
  isDeleted?: boolean;
}
```

* stock: 택시가 싣고 다니는 Sample의 재고를 나타냅니다.
* sales: 택시가 싣고 다니는 Sample의 판매량을 나타냅니다.

## DriverDto

```typescript
export class DriverDto {
  id?: number;
  driverName?: string;
  phoneNumber?: string;
  accountNumber?: string;
  group?: string;
  platform: number;
  drivingTime: number;
  residence: string;
  isDeleted?: boolean;
  taxiId?: number;
  driverLicense: DriverLicenseDto;
  driverTaxiLicense: DriverTaxiLicenseDto;
}
```

* driverName: 운전자 이름을 나타냅니다.
* phoneNumber: 전화번호를 나타냅니다.
* accountNumber: 계좌 번호를 나타냅니다.
* group: 군을 나타냅니다(가, 나, 다, 라)
* platform: 어떤 택시 플랫폼에 속해있는지 나타냅니다.
* drivingTime: 어떤 시간대에 운행을 하는지 나타냅니다.
* residence: 운전자가 어디에 거주하는지 나타냅니다.