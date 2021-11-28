# Product-Management-APIs
## _Product Management APIs ( Using EXPRESS)_

## SCHEMA:
_PRODUCT_
- product id : String
- title : String
- price : String
- category : Array of String
- company id : String
- seller id : Array of String

_COMPANY_
- company id : String
- name : String
- product id : Array of String

_SELLER_
- seller id : String
- name : String
- product id : Array of String

## POST REQUESTS:

_ADD_
- add new company
- add new seller
- add new product

_RETRIEVE_
- fetch company details based on product name
- fetch seller details based on product name
- fetch all products of a company
- fetch all products of a seller

_UPDATE_
- update company (add/remove products)
- update seller (add/remove products)
- update product (add/remove category)

_DELETE_
- delete company
- delete seller
- delete product

## See Screenshots Here
- [CLick Here](https://github.com/KhushiPatel12/Product-Management-APIs/tree/main/Postman)!
