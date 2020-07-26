import { environment } from '../../environments/environment'

export const baseApiUrl = environment.production ? "https://prod.shoppingcart.com" : "http://localhost:7071/api/"
export const productsUrl = baseApiUrl + "GetProducts"
export const deliveryFeeUrl = baseApiUrl + "GetDeliveryFee"
export const placeOrderUrl = baseApiUrl + "PlaceOrder"