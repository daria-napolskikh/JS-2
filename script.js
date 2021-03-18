const goods = [
    { title: 'Shirt', price: 150 },
    { title: 'Socks', price: 50 },
    { title: 'Jacket', price: 350 },
    { title: 'Shoes', price: 250 },
    { title: 'Shirt', price: 150 },
    { title: 'Socks', price: 50 },
    { title: 'Jacket', price: 350 },
    { title: 'Shoes', price: 250 },
    
  ];
  
const renderGoodsItem = (title, price) => {
    return `<div class="goods-item"><div class="item-info"><h3 class="title">${title}</h3><p class="price">${price}</p></div><button class="buy-btn">add to cart</button></div>`;
};
  
const renderGoodsList = (list) => {
    let goodsList = list.map(item => renderGoodsItem(item.title, item.price)).join('');
    document.querySelector('.goods-list').innerHTML = goodsList;
};
  
renderGoodsList(goods);
    