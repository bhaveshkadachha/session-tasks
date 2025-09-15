export interface  Product {
    "id": number
    "name": string,
    "type": string,
    "price": number,
    "oldPrice": number,
    "emi": string,
    "isBestSeller": boolean,
    "rating": number,
    "reviews": number,
    "description": string,
    "images": string[],
    "plugOptions": string[],
    "stockInfo": string,
    "warranty": string
  }