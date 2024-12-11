document.addEventListener("DOMContentLoaded", function() { 
    // Массив с товарами в магазине
    const shop = {
        products: [
            { name: "Игровая мышь Razer", price: 4500 },
            { name: "Клавиатура Logitech G Pro", price: 8000 },
            { name: "Игровой монитор Dell", price: 35000 },
            { name: "Видеокарта NVIDIA RTX 3080", price: 90000 },
            { name: "Процессор Intel Core i9", price: 50000 },
            { name: "Материнская плата ASUS ROG", price: 25000 }
        ]
    };

    // Объект корзины, где хранятся добавленные товары и общая сумма
    const cart = {
        items: [],  // Массив для хранения товаров, добавленных в корзину
        total: 0,   // Общая сумма товаров в корзине

        // Метод для добавления товара в корзину
        addToCart: function(productName, productPrice) {
            this.items.push({ name: productName, price: productPrice }); // Добавляем товар в массив
            this.total += productPrice; // Увеличиваем общую сумму
        },
        
        // Метод для очистки корзины
        clearCart: function() {
            this.items = [];  // Очищаем массив товаров
            this.total = 0;   // Обнуляем общую сумму
        }
    };

    // Функция для отображения содержимого корзины на странице
    function displayCart() {
        const cartItemsElement = document.getElementById('cart-items');  // Список товаров в корзине
        const totalPriceElement = document.getElementById('total-price'); // Элемент для отображения общей суммы

        // Проверяем, что элементы для отображения существуют
        if (!cartItemsElement || !totalPriceElement) {
            console.error('Элемент cart-items или total-price не найден.');
            return;
        }

        // Очищаем текущее содержимое корзины на странице
        cartItemsElement.innerHTML = '';

        // Проверяем, если корзина пуста
        if (cart.items.length === 0) {
            cartItemsElement.innerHTML = '<li>Корзина пуста</li>';  // Отображаем сообщение, что корзина пуста
            console.log("Корзина пуста.");
        } else {
            // Отображаем каждый товар в корзине
            cart.items.forEach(item => {
                let li = document.createElement('li');
                li.textContent = `${item.name} — ${item.price} ₽`;  // Отображаем название и цену товара
                cartItemsElement.appendChild(li);
            });
            console.log("Текущая корзина:", cart.items);  // Выводим содержимое корзины в консоль
        }

        // Обновляем общую сумму на странице
        totalPriceElement.textContent = `${cart.total} ₽`;
        console.log(`Общая сумма корзины: ${cart.total} ₽`);  // Выводим общую сумму в консоль
    }

    // Функция для формирования и отображения чека в консоли
    function generateReceipt() {
        // Проверяем, пуста ли корзина
        if (cart.items.length === 0) {
            console.log('Корзина пуста. Чек не может быть сформирован.');
            return;
        }

        // Вывод заголовка чека
        console.log('Чек:');

        // Вывод каждого товара в корзине
        cart.items.forEach(item => {
            console.log(`${item.name}: ${item.price} ₽`);
        });

        // Вывод общей суммы
        console.log(`Общая сумма: ${cart.total} ₽`);
    }

    // Функция для подсчета количества товаров дороже заданной цены
    function countExpensiveItems(priceThreshold) {
        const expensiveItems = cart.items.filter(item => item.price > priceThreshold); // Фильтруем товары
        console.log(`Количество товаров дороже ${priceThreshold} ₽: ${expensiveItems.length}`);
        return expensiveItems.length; // Возвращаем количество таких товаров
    }

    // Функция для подсчёта количества товаров дешевле заданной цены
    function countCheapItems(priceThreshold) {
        const cheapItems = cart.items.filter(item => item.price < priceThreshold); // Фильтруем товары
        console.log(`Количество товаров дешевле ${priceThreshold} ₽: ${cheapItems.length}`);
        return cheapItems.length; // Возвращаем количество таких товаров
    }

    // Обработчик для кнопки покупки
    function handleBuyButtonClick(event) {
        const productName = event.target.getAttribute('data-product');  // Получаем название товара
        const productPrice = parseInt(event.target.getAttribute('data-price'));  // Получаем цену товара

        // Добавляем товар в корзину и обновляем её отображение
        cart.addToCart(productName, productPrice);
        displayCart();
        displayMostExpensive();  // Отображаем самый дорогой товар

        // Подсчет товаров дороже 10000 ₽ и вывод в консоль
        countExpensiveItems(10000);

        // Подсчет товаров дешевле 10000 ₽ и вывод в консоль
        countCheapItems(10000);
    }

    // Привязываем обработчики кликов ко всем кнопкам "Купить"
    document.querySelectorAll('button[data-product]').forEach(button => {
        button.addEventListener('click', handleBuyButtonClick);
    });

    // Обработчик для кнопки очистки корзины
    const clearCartButton = document.getElementById('clear-cart');
    if (clearCartButton) {
        clearCartButton.addEventListener('click', function() {
            cart.clearCart();  // Очищаем корзину
            displayCart();  // Обновляем её отображение
            console.log("Корзина очищена.");
        });
    } else {
        console.error('Элемент clear-cart не найден.');
    }

    // Обработчик для кнопки "Купить всё"
    const buyCartButton = document.getElementById('buy-cart');
    if (buyCartButton) {
        buyCartButton.addEventListener('click', function() {
            if (cart.items.length === 0) {
                console.log("Корзина пуста. Покупка невозможна.");
                return;
            }
            generateReceipt();  // Генерируем и выводим чек в консоль
            console.log("Товары куплены!");
        });
    } else {
        console.error('Элемент buy-cart не найден.');
    }

    // Функция для отображения самого дорогого товара в корзине
    function displayMostExpensive() {
        // Проверяем, пуста ли корзина
        if (cart.items.length === 0) {
            console.log("Корзина пуста, нет самых дорогих товаров.");
            return;
        }

        // Ищем самый дорогой товар
        let mostExpensiveItem = cart.items[0];
        for (let i = 1; i < cart.items.length; i++) {
            if (cart.items[i].price > mostExpensiveItem.price) {
                mostExpensiveItem = cart.items[i];
            }
        }

        // Выводим самый дорогой товар в консоль
        console.log(`Самый дорогой товар в корзине: ${mostExpensiveItem.name} — ${mostExpensiveItem.price} ₽`);
    }
    
 // Функция для подсчета общей стоимости товаров в магазине
 function calculateTotalShopValue() {
    let totalValue = 0;

    // Используем цикл for для обхода всех товаров в магазине и суммирования их стоимости
    for (let i = 0; i < shop.products.length; i++) {
        totalValue += shop.products[i].price;  // Добавляем цену каждого товара к общей сумме
    }

    console.log(`Общая стоимость всех товаров в магазине: ${totalValue} ₽`);
}

// Вызов функции подсчёта общей стоимости товаров при загрузке страницы
calculateTotalShopValue();

// Функция для подсчета и работы с массивом товаров с ценой, кратной 5000 ₽
function processItemsMultipleOf5000() {
    let itemsMultipleOf5000 = [];  // Создаем пустой массив для товаров, цена которых кратна 5000 ₽

    // Используем цикл for для перебора товаров в магазине
    for (let i = 0; i < shop.products.length; i++) {
        if (shop.products[i].price % 5000 === 0) { // Проверяем, если цена кратна 5000
            itemsMultipleOf5000.push(shop.products[i]); // Добавляем товар в массив
        }
    }

    // Выводим товары с ценой, кратной 5000 ₽, в консоль
    if (itemsMultipleOf5000.length > 0) {
        console.log("Товары с ценой, кратной 5000 ₽:");
        itemsMultipleOf5000.forEach(item => {
            console.log(`${item.name} — ${item.price} ₽`);
        });
    } else {
        console.log("Нет товаров с ценой, кратной 5000 ₽.");
    }
}

// Вызов функции для обработки массива товаров
processItemsMultipleOf5000();
    // Начальное отображение корзины
    displayCart();
});