interface Product {
    id: number;
    name: string;
    price: number;
}
const products = [
    {
    id: 1,
    name: 'Телевизор',
    price: 100000
    },
    {
    id: 2,
    name: 'Плойка5',
    price: 57000
    },
    {
    id: 3,
    name: 'Iphone 7s',
    price: 25000
    }
]

class Delivery {
    constructor(public date: Date) {
    }
}

class Home  extends Delivery{
    constructor(date: Date, public address: string) {
        super(date);
    }
}
class Point extends Delivery{
    constructor(public storeId: number ) {
        super(new Date());
    }
}

const product = {
    id: 4,
    name: 'Ipad 6',
    price: 35000
}

const deliver = {
    date: new Date(1478708162000),
    address: 'ул. Мечникова д. 116 кв. 12'
}
const deliverPoint = {
    date: new Date(),
    storeId: 1
}

type DeliveryUnion = Home | Point;



class Cart{
    private _products: Product[] = [];
    private _delivery: DeliveryUnion;
    private _price: number;
    get products(): Product[] {
        return this._products;
    }

    get delivery(): Delivery {
        return this._delivery;
    }

    get price(): number {
        return this._price;
    }

    addProduct(product: Product): void;
    addProduct(products: Product[]): void;
    addProduct(productOrProducts: Product | Product[]){
        if(Array.isArray(productOrProducts)){
            for (let i = 0; i < productOrProducts.length; i++){
                let product = productOrProducts[i];
                this._products.push(product);
            }
        }else{
            this._products.push(product)
        }
    }
    deleteProduct(productId: number){
        const index = this._products.findIndex(el => el.id === productId);
        if(index >= 0 ){
            this._products.splice(index, 1);
        }
    }
    getPrice(): number {
        return this._price = this._products.map(el => el.price).reduce((p1: number, p2: number)=> p1 + p2);
    }
    setDelivery(delivery: DeliveryUnion){
            this._delivery = delivery;
    }
    checkout(){
        let name = this.products.map(el => el.name)
        if(this._products.length === 0){
            throw new Error('Корзина пуста')
        }
        else if(!this._delivery){
            throw new Error('Укажите адресс')
        }
        else{
            return 'Success';
        }
        //
        // if(DeliveryGuard(this._delivery) && this._products){
        //     return `Заказ оформлен
        //         Продукты: ${name.concat()},
        //         Доставка: Курьером по адрессу - ${this._delivery.address}
        //         Цена: ${this._price}
        //     `;
        // }
        // else if(!DeliveryGuard(this._delivery) && this._products){
        //     return `Заказ оформлен
        //         Продукты: ${name.concat()},
        //         Доставка: В пункт выдачи - ${this._delivery.storeId}
        //         Цена: ${this._price}
        //     `;
        // }
        // else if(!this._delivery){
        //     throw new Error('Укажите адресс доставки или пункт выдачи')
        // }else if(!this._products){
        //     throw new Error('Корзина пуста')
        // }
        // throw new Error('Непредвиденная ошибка, попробуйте позже')
    }
}




let cart = new Cart();
console.log('CART 1')
cart.addProduct(products);
console.log(cart.products);
cart.addProduct(product);
console.log(cart.products);
console.log('-------------------------------')
console.log(cart.getPrice());
cart.setDelivery(deliver);
console.log(cart.delivery);
console.log('-------------------------------')
cart.setDelivery(deliverPoint);
console.log(cart.delivery);
console.log('-------------------------------')
cart.deleteProduct(1)
console.log(cart.products);
console.log('-------------------------------')
cart.deleteProduct(3)
console.log(cart.products);
console.log('-------------------------------')
console.log(cart.getPrice());
console.log('-------------------------------')
console.log(cart.checkout());


console.log('')
console.log('')
console.log('CART 2')

let cart2 = new Cart();

cart2.addProduct(products);
console.log(cart2.products);
cart2.addProduct(product);
console.log(cart2.products);
console.log('-------------------------------')
console.log(cart2.getPrice());
cart2.setDelivery(deliver);
console.log(cart2.delivery);
console.log('-------------------------------')
cart2.deleteProduct(4)
console.log(cart2.products);
console.log('-------------------------------')
cart2.deleteProduct(1)
console.log(cart2.products);
console.log('-------------------------------')
console.log(cart2.getPrice());
console.log('-------------------------------')
console.log(cart2.checkout());
