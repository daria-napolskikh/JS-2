class GoodsItem {
    constructor(title, price){
        this.title = title;
        this.price = price;
        }
    
    render() {
        return `<div class="goods-item">
        <div class="item-info">
        <h3 class="title">${this.title}</h3>
        <p class="price">${this.price}</p>
        </div>
        <button class="buy-btn">add to cart</button>
        </div>`;
    }
}

class GoodsList {
    constructor() {
        this.goods = [];
    }
    fetchGoods() {
        this.goods = [
            { title: 'Shirt', price: 150 },
            { title: 'Socks', price: 50 },
            { title: 'Jacket', price: 350 },
            { title: 'Shoes', price: 250 },
        ];
    }
    render() {
        let listHtml = '';
        this.goods.forEach(good => {
            const goodItem = new GoodsItem(good.title, good.price);
            listHtml += goodItem.render();
        });
        document.querySelector('.goods-list').innerHTML = listHtml;
    }
  
    // метод, определяющий суммарную стоимость всех товаров:
    calcTotalSum(){ 
        const totalSum = this.goods.reduce((total,goodItem) => total + goodItem.price, 0)
        document.querySelector('.total-sum').innerHTML = totalSum
    }
    
}

// класс товара в корзине
class CartItem {
    constructor(good){
        this.good = good;
    }
}

// класс корзины
class Cart {
    constructor(){
        this.items = [];
    }
    push(cartItem){
        this.items.push(cartItem);
    } 
    totalNumber(){}//количество товаров в корзине
    renew(){} //обновить
    clean(){} //очистить
    checkout(){}  
    render(){} 
}

const cart = new Cart();
const addToCart = good => cart.push(new CartItem(good));

const list = new GoodsList();
list.fetchGoods();
list.render();
list.calcTotalSum();





    