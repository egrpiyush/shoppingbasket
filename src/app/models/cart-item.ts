export class CartItem {
    id: number;
    productId: number;
    productName: string;
    price: number;
    quantity: number;
    description: string;

    constructor(productId, productName, price = 0, quantity, description = ""){
        this.productId = productId;
        this.productName = productName;
        this.price = price;
        this.quantity = quantity;
        this.description = description;
    }    
}
