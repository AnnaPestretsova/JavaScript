//Задание 1
function number(n) {
    var obj = {};
    if (n < 0 || n > 999 || isNaN(n)) {
        console.log("Неверное значение");
        return obj;
    } else {
        obj =
        {
            hundred: parseInt(n / 100),
            ten: parseInt(n / 10 % 10),
            one: parseInt(n % 10),
            display: function () {
                document.write("В числе:" + n + "<br>Сотни: " + this.hundred + "<br>Десятки:" + this.ten + "<br>Единицы:" + this.one)
            }
        }
        console.log(obj);
        return obj;
    }
}
number(451).display();

//Задание 2
var cart = [
    { id: 0, name: "Хлеб", price: 45, count: 2 },
    { id: 1, name: "Молоко", price: 60, count: 1 },
    { id: 2, name: "Кефир", price: 63, count: 2 },
    { id: 3, name: "Печеньки", price: 68, count: 4 },
    { id: 4, name: "Сладости", price: 52, count: 1 },
];

function countBasketPrice(data) {
    let sum = 0;
    for (const item of data) {
        sum += item.price * item.count;
    }
    return sum;
}
console.log("Shop cart sum: " + countBasketPrice(cart));
