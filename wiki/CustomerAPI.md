# CustomerAPI

이 문서는 Customer의 API 관련 문서입니다.

## POST

```
/customer
```

새로운 사용자(손님)를 추가합니다.

#### Body

* `customerDto`, `stockDto`



```
/customer/:customerId
```

`customerId`의 평가 정보를 입력합니다.

#### Body

* `customerDto`

