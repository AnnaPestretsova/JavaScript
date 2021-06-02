var items = [
    {
        id: 0,
        name: 'Iphone',
        price: 50,
        color: 'Черный'
    },
    {
        id: 1,
        name: 'Macbook Pro',
        price: 150,
        color: 'Красный'
    },
    {
        id: 2,
        name: 'Nokia',
        price: 20,
        color: 'Белый'
    },
    {
        id: 3,
        name: 'Asus',
        price: 10,
        color: 'Белый'
    },
    {
        id: 4,
        name: 'Iphone',
        price: 50,
        color: 'Черный'
    },
    {
        id: 5,
        name: 'Macbook Pro',
        price: 150,
        color: 'Красный'
    },
    {
        id: 6,
        name: 'Nokia',
        price: 20,
        color: 'Белый'
    },
    {
        id: 7,
        name: 'Asus',
        price: 10,
        color: 'Белый'
    }
]

var catalog = document.getElementById('catalog');

for (i = 0; i < items.length; i++) {
    var catalogItem = document.createElement('article');
    catalogItem.className = 'catalog-item-card';
    catalogItem.innerHTML = '<h3>' + items[i].name + '</h3><span class="card-item-point">Цена: ' + items[i].price + '</span><span class="card-item-point">Цвет: ' + items[i].color + '</span>';
    catalog.appendChild(catalogItem)

    var catalogItemButton = document.createElement('button');
    catalogItemButton.className = 'catalog-item-button';
    catalogItemButton.innerHTML = 'Добавить в корзину';
    catalogItem.appendChild(catalogItemButton)

}