function init() {

    // 1. Добавлять в объект корзины выбранные товары по клику на кнопке «Купить» без перезагрузки страницы;
    // Привязать к событию покупки товара пересчет корзины и обновление ее внешнего вида.

    let basket = {
        goods: [["telephone", 1000], ["laptop", 2000], ["tv", 3000]],
        amount: 0,
        price: 0,
    }

    let basketDiv = document.getElementById("basket");
    basketDiv.innerHTML = "В корзине " + basket.amount + " товаров на сумму " + basket.price + " рублей";

    function addtelephone() {
        return basket.amount = basket.amount + 1,
            basket.price = basket.price + basket.goods[0][1],
            basketDiv.innerHTML = "В корзине " + basket.amount + " товаров на сумму " + basket.price + " рублей";
    }
    function addlaptop() {
        return basket.amount = basket.amount + 1,
            basket.price = basket.price + basket.goods[1][1],
            basketDiv.innerHTML = "В корзине " + basket.amount + " товаров на сумму " + basket.price + " рублей";
    }
    function addtv() {
        return basket.amount = basket.amount + 1,
            basket.price = basket.price + basket.goods[2][1],
            basketDiv.innerHTML = "В корзине " + basket.amount + " товаров на сумму " + basket.price + " рублей";
    }
    function resetBasket() {
        return basket.amount = 0,
            basket.price = 0,
            basketDiv.innerHTML = "В корзине " + basket.amount + " товаров на сумму " + basket.price + " рублей";
    }

    let telephoneButton = document.getElementById("addtelephone")
    telephoneButton.addEventListener('click', addtelephone)

    let laptopButton = document.getElementById("addlaptop")
    laptopButton.addEventListener('click', addlaptop)

    let tvButton = document.getElementById("addtv")
    tvButton.addEventListener('click', addtv)

    let resetButton = document.getElementById("resetButton")
    resetButton.addEventListener('click', resetBasket)

    // 2 * У товара может быть несколько изображений. Нужно менять картинку при нажатии на картинку

    laptops = ["img/laptop.jpg", "img/laptop2.jpg"]
    telephones = ["img/telephone.jpg", "img/telephone2.jpg", "img/telephone3.jpg"]
    let i = 0;
    let laptopPic = document.getElementById("laptopPic")

    function changelaptopPic() {
        i++; i %= laptops.length;
        laptopPic.src = laptops[i];
    }
    laptopPic.addEventListener('click', changelaptopPic)


    let telephonePic = document.getElementById("telephonePic")
    function changetelephonePic() {
        i++; i %= telephones.length;
        telephonePic.src = telephones[i];
    }
    telephonePic.addEventListener('click', changetelephonePic)

}

window.onload = init;