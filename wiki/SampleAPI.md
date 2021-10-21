# SampleAPI

이 문서는 Sample의 API에 관한 문서입니다.

## POST

```
/sample/
```

Sample을 생성합니다.

#### Body

* `sampleDto`



## GET

```
/sample/
```

모든 Sample을 가져옵니다. SampleTargetDto를 바탕으로 성별 + 나이 - 시간표 순으로 

#### Body

* SampleTargetDto

#### Result

```json
[
    {
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
        },
        "sampleStock": {
            "id": 2,
            "amount": 30,
            "sales": 0,
            "createdAt": "2021-10-06T06:36:59.612Z",
            "updatedAt": "2021-10-06T06:36:59.000Z",
            "sampleId": 2
        },
        "sampleTarget": {
            "id": 2,
            "age": 60,
            "isMale": false,
            "startTime": 600,
            "endTime": 1800,
            "sampleId": 2
        }
    },
    {
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
        },
        "sampleStock": {
            "id": 3,
            "amount": 30,
            "sales": 0,
            "createdAt": "2021-10-06T06:37:45.667Z",
            "updatedAt": "2021-10-06T06:37:45.000Z",
            "sampleId": 3
        },
        "sampleTarget": {
            "id": 3,
            "age": 30,
            "isMale": true,
            "startTime": 600,
            "endTime": 1800,
            "sampleId": 3
        }
    },
    {
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
        },
        "sampleStock": {
            "id": 1,
            "amount": 30,
            "sales": 0,
            "createdAt": "2021-10-06T06:17:23.240Z",
            "updatedAt": "2021-10-06T06:17:23.000Z",
            "sampleId": 1
        },
        "sampleTarget": {
            "id": 1,
            "age": 20,
            "isMale": false,
            "startTime": 600,
            "endTime": 1800,
            "sampleId": 1
        }
    }
]
```



```
/sample/:sampleId/image
```

`sampleId`의 image를 가져옵니다.

#### Parameter

* `sampleId`: Sample의 ID



```
/sample/:sampleId
```

`sampleId`의 Sample 데이터를 가져옵니다.

#### Parameter

* `sampleId`: Sample의 ID

#### Result

```json
{
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
    },
    "sampleStock": {
        "id": 1,
        "amount": 30,
        "sales": 0,
        "createdAt": "2021-10-06T06:17:23.240Z",
        "updatedAt": "2021-10-06T06:17:23.000Z",
        "sampleId": 1
    },
    "sampleTarget": {
        "id": 1,
        "age": 20,
        "isMale": false,
        "startTime": 600,
        "endTime": 1800,
        "sampleId": 1
    }
}
```



```
/sample/:sampleId/stat/customer
```

`sampleId`의 Sample을 선택한 사람 중 가장 많이 선택한 그룹 순서대로 출력합니다.

#### Parameter

* `sampleId`: Sample의 ID

#### Result

```json
[
    {
        "isMale": 1,
        "age": 20,
        "count": "2"
    },
    {
        "isMale": 0,
        "age": 20,
        "count": "1"
    }
]
```





## PUT

```
/sample/:sampleId/
```

`sampleId`의 Sample을 찾아 `sampleDto`의 내용으로 수정합니다.

#### Parameter

* `sampleId`: Sample의 ID

#### Body

* `sampleDto`



```
/sample/:sampleId/image
```

`sampleId`의 Sample을 찾아 Sample의 이미지를 수정합니다.

#### Parameter

* `sampleId`: Sample의 ID

#### Body(form-data)

* `attachments`: 이미지 파일



```
/sample/:sampleId/recover
```

`sampleId`의 Sample을 찾아 삭제된 것이라면 다시 복구합니다.

#### Parameter

* `sampleId`: 삭제된 Sample의 ID



## Delete

```
/sample/:sampleId
```

`sampleId`의 Sample을 찾아 삭제합니다.

#### Parameter

* `sampleId`: 삭제할 Sample의 ID

