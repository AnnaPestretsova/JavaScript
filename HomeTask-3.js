//Задание 1
var n = 0;
var numbers = 100;
while (n <= numbers) {
    var i = 2;
    var count = 0;
    while (i < n / 2) {
        if (n % i == 0) {
            count++;
            break;
        }
        i++;
    }
    if (count == 0 && n > 1 && n != 4) {
        alert("Простое число:" + n + "<br>");
    }
    n++;
}


//Задание 2
var basket = [
    {
        title: "Item-1",
        price: 50,
        count: 12
    },
    {
        title: "Item-2",
        price: 300,
        count: 5
    },
    {
        title: "Item-3",
        price: 900,
        count: 4
    }
];

var sum = 0;
for (var item of basket) {
    sum += item.price * item.count;
    alert("Товар:" + item.title + " стоимость одной единицы товара:" + item.price + "Общая стоимость за  " + item.count + " единиц, составляет: " + (item.price * item.count) + "<br>");
}

alert("Общая стоимость товаров = " + sum)


//Задание 3
function countBasketPrice(array) {
    var sum = 0;
    for (var item of array) {
        sum += item.price * item.count;
    }
    return sum;
}
alert("<br>" + countBasketPrice(basket))

//Задание 4
for (var i = 0; i < 10; document.write(i++));


//Задание 5
var a = "*";
var c = 20;

for (var i = 0; i < c; i++) {
    for (var j = 0; j <= i; j++) {
        document.write(a);
    }
    document.write("<br>")
}