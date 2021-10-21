# Taxi

이 문서는 Taxi API의 역할을 다룬 것입니다.

## Post

```
/taxi/
```

taxi를 생성합니다.

#### Body

* TaxiDto



#### Body

* TaxiDto

```
/taxi/:taxiId/sample
```

택시에 Sample을 추가합니다.

#### Parameter

* taxiId: 택시의 ID

#### Body

* StockDto



## Get

```
/taxi/
```

Taxi 정보를 가져옵니다.

#### Result

```json
[
    {
        "id": 1,
        "taxiNumber": 98001,
        "isDeleted": false,
        "createdAt": "2021-10-06T05:59:24.243Z",
        "updatedAt": "2021-10-06T05:59:24.243Z",
        "driver": {
            "id": 1,
            "driverName": "테스트",
            "phoneNumber": "010-1111-1111",
            "licensePlate": "11가 1111",
            "accountNumber": "우리은행 1002-456-671732",
            "group": "가",
            "isDeleted": false,
            "createdAt": "2021-10-06T05:59:24.232Z",
            "updatedAt": "2021-10-06T05:59:24.000Z",
            "taxiId": 1
        }
    }
]
```





```
/taxi/:taxiNumber
```

**택시 고유 번호**를 통해 택시의 정보를 가져옵니다.

#### Parameter

* taxiNumber: Taxi의 고유 번호

#### Result

```json
{
    "id": 1,
    "taxiNumber": 98001,
    "isDeleted": false,
    "createdAt": "2021-10-06T05:59:24.243Z",
    "updatedAt": "2021-10-06T05:59:24.243Z",
    "driver": {
        "id": 1,
        "driverName": "테스트",
        "phoneNumber": "010-1111-1111",
        "licensePlate": "11가 1111",
        "accountNumber": "우리은행 1002-456-671732",
        "group": "가",
        "isDeleted": false,
        "createdAt": "2021-10-06T05:59:24.232Z",
        "updatedAt": "2021-10-06T05:59:24.000Z",
        "taxiId": 1
    }
}
```





```
/taxi/:taxiId/stock
```

**택시의 ID**를 통해 택시의 샘플 재고를 가져옵니다.

#### Parameter

* taxiId: **택시의 ID**

#### Result

```json
[
    {
        "id": 1,
        "stock": 5,
        "sales": 0,
        "isDeleted": false,
        "createdAt": "2021-10-08T04:19:39.905Z",
        "updatedAt": "2021-10-08T04:19:39.905Z",
        "sampleId": 1,
        "taxiId": 1,
        "sample": {
            "id": 1,
            "image": null,
            "isDeleted": false,
            "createdAt": "2021-10-06T06:17:23.250Z",
            "updatedAt": "2021-10-06T06:17:23.250Z",
            "sampleInfo": {
                "id": 1,
                "name": "초콜릿",
                "sampleType": "음식",
                "manufacture": "노브랜드",
                "isDeleted": false,
                "createdAt": "2021-10-06T06:17:23.228Z",
                "updatedAt": "2021-10-06T06:17:23.000Z",
                "sampleId": 1
            }
        }
    },
    {
        "id": 2,
        "stock": 5,
        "sales": 0,
        "isDeleted": false,
        "createdAt": "2021-10-08T04:20:16.974Z",
        "updatedAt": "2021-10-08T04:20:16.974Z",
        "sampleId": 2,
        "taxiId": 1,
        "sample": {
            "id": 2,
            "image": null,
            "isDeleted": false,
            "createdAt": "2021-10-06T06:36:59.618Z",
            "updatedAt": "2021-10-06T06:36:59.618Z",
            "sampleInfo": {
                "id": 2,
                "name": "쌍화차",
                "sampleType": "음식",
                "manufacture": "차차차",
                "isDeleted": false,
                "createdAt": "2021-10-06T06:36:59.609Z",
                "updatedAt": "2021-10-06T06:36:59.000Z",
                "sampleId": 2
            }
        }
    },
    {
        "id": 3,
        "stock": 5,
        "sales": 0,
        "isDeleted": false,
        "createdAt": "2021-10-08T04:20:21.682Z",
        "updatedAt": "2021-10-08T04:20:21.682Z",
        "sampleId": 3,
        "taxiId": 1,
        "sample": {
            "id": 3,
            "image": null,
            "isDeleted": false,
            "createdAt": "2021-10-06T06:37:45.672Z",
            "updatedAt": "2021-10-06T06:37:45.672Z",
            "sampleInfo": {
                "id": 3,
                "name": "고기",
                "sampleType": "음식",
                "manufacture": "정육점",
                "isDeleted": false,
                "createdAt": "2021-10-06T06:37:45.663Z",
                "updatedAt": "2021-10-06T06:37:45.000Z",
                "sampleId": 3
            }
        }
    }
]
```



```
/taxi/:taxiId/sample/:sampleId
```

**택시의 ID**로 택시를 구별하여 그 택시가 가지고 있는 Sample의 정보를 SampleId를 통해 조회합니다.

#### Parameter

* taxiId: 택시의 ID
* sampleId: 샘플의 ID

#### Result

```json
{
    "id": 1,
    "stock": 5,
    "sales": 0,
    "isDeleted": false,
    "createdAt": "2021-10-08T04:19:39.905Z",
    "updatedAt": "2021-10-08T04:19:39.905Z",
    "sampleId": 1,
    "taxiId": 1,
    "sample": {
        "id": 1,
        "image": null,
        "isDeleted": false,
        "createdAt": "2021-10-06T06:17:23.250Z",
        "updatedAt": "2021-10-06T06:17:23.250Z",
        "sampleInfo": {
            "id": 1,
            "name": "초콜릿",
            "sampleType": "음식",
            "manufacture": "노브랜드",
            "isDeleted": false,
            "createdAt": "2021-10-06T06:17:23.228Z",
            "updatedAt": "2021-10-06T06:17:23.000Z",
            "sampleId": 1
        }
    }
}
```





## Put

```
/taxi/:taxiId
```

**택시의 ID**를 통해 택시를 구별한 후 그 택시의 정보를 수정합니다.

#### Parameter

* taxiId: **택시의 ID**

#### Body

* TaxiDto



```
/taxi/:taxiId/recover
```

**택시의 ID**를 통해 택시를 구별한 후 삭제된 택시라면 복구합니다.

#### Paramter

* taxiId: **택시의 ID**



```
/taxi/:taxiId/sample/:sampleId
```

**택시의 ID**를 통해 택시를 구별한 후 그 택시의 재고를 샘플의 ID로 구별하여 수정합니다.

#### Parameter

* taxiId: **택시의 ID**
* sampleId: 샘플의 ID

#### Body

* StockDto



## Delete

```
/taxi/:taxiId
```

**택시의 ID**를 통해 택시를 구별하여 제거합니다.

#### Parameter

* taxiId: **택시의 ID**



```
/taxi/:taxiId/sample/:sampleId
```

**택시의 ID**를 통해 택시를 구별한 후 샘플 ID를 통해 재고를 구별하여 제거합니다.

#### Parameter

* taxiId: **택시의 ID**
* sampleId: 샘플의 ID







