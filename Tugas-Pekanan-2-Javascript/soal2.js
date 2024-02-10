function myFunction() {
    let productBin = {
        "requestId": null,
        "data": [
          {
            "id": 100000057465,
            "storageId": 10000008207,
            "code": "A01-01-01-A",
            "productId": 110000081009,
            "productName": "FloBrand-DressBSPink",
            "productCode": "FBR00040101",
            "quantity": 76,
            "createdTime": "2021-12-21T13:54:48Z",
          },
          {
            "id": 100000057466,
            "storageId": 10000002181,
            "code": "A01-01-01-B",
            "productId": 110000081009,
            "productName": "FloBrand-DressBSPink",
            "productCode": "FBR00040101",
            "quantity": 71,
            "createdTime": "2021-12-21T13:54:48Z",
          },
          {
            "id": 100000065224,
            "storageId": 10000008884,
            "code": "Tgt00-A-A-01",
            "productId": 110000081009,
            "productName": "FloBrand-DressBSPink",
            "productCode": "FBR00040101",
            "quantity": 10,
            "createdTime": "2022-02-08T10:35:19Z",
          },
          {
            "id": 1000000652343,
            "storageId": 10000008884,
            "code": "Tgt00-A-A-01",
            "productId": 110000081009,
            "productName": "FloBrand-DressBSPink",
            "productCode": "FBR00040101",
            "quantity": 50,
            "createdTime": "2022-02-08T10:35:19Z",
          },
          {
            "id": 100000065116,
            "storageId": 10000008884,
            "code": "Tgt00-A-A-01",
            "productId": 110000081009,
            "productName": "FloBrand-DressBSPink",
            "productCode": "FBR00040101",
            "quantity": 13,
            "createdTime": "2022-02-08T10:35:19Z",
          },
          {
            "id": 1000000651111,
            "storageId": 10000008884,
            "code": "Tgt00-A-A-01",
            "productId": 110000081009,
            "productName": "FloBrand-DressBSPink",
            "productCode": "FBR00040101",
            "quantity": 22,
            "createdTime": "2022-02-08T10:35:19Z",
          }
        ],
        "message": "success"
      }
      return productBin;
}


function multipleFunction(data){
    let total =0;

    for(let i=0; i< data.length; i++){
        total += data[i].quantity;
    }
    return total;
}
let data1 = myFunction();
let data2 = data1.data;
let result = multipleFunction(data2);
console.log("Total Quantity " + result);