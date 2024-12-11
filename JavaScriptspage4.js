// Пример данных о товарах с сайта
const products = [
    { name: 'Игровой ПК 1', price: 1000 },
    { name: 'Игровой ПК 2', price: 950 },
    { name: 'Офисный ПК 1', price: 500 },
    { name: 'Офисный ПК 2', price: 800 },
    { name: 'Домашний ПК 1', price: 450 },
    { name: 'Домашний ПК 2', price: 600 },
    { name: 'Игровой ПК 3', price: 2500 },
    { name: 'Офисный ПК 3', price: 750 },
    { name: 'Домашний ПК 3', price: 450 },
];

// Функция для генерации случайного рейтинга
function generateRandomRating() {
    // Генерируем случайное число от 1 до 5 с одним знаком после запятой
    return (Math.random() * 4 + 1).toFixed(1);
}

// Присваиваем случайные рейтинги товарам
products.forEach(product => {
    product.rating = parseFloat(generateRandomRating()); // Конвертируем строку в число с плавающей запятой
});

// Функция для нахождения максимальной и минимальной цены
function showPriceStats(products) {
    // Извлекаем цены из массива товаров
    const prices = products.map(product => product.price);
    // Находим максимальную и минимальную цену
    const maxPrice = Math.max(...prices);
    const minPrice = Math.min(...prices);
    console.log(`Максимальная цена: ${maxPrice} долларов`);
    console.log(`Минимальная цена: ${minPrice} долларов`);
}

// Функция для расчета средней цены и подсчета количества товаров выше средней
function showAvgAndAboveAvg(products) {
    // Извлекаем цены из массива товаров
    const prices = products.map(product => product.price);
    // Считаем общую сумму цен
    const total = prices.reduce((sum, price) => sum + price, 0);
    // Рассчитываем среднюю цену
    const average = total / prices.length;
    // Считаем количество товаров с ценой выше средней
    const aboveAverageCount = prices.filter(price => price > average).length;

    console.log(`Средняя цена: ${average.toFixed(2)} долларов`);
    console.log(`Количество товаров с ценой выше средней: ${aboveAverageCount}`);
}

// Функция для анализа колебаний цен
function showPriceFluctuation(products) {
    // Извлекаем цены из массива товаров
    const prices = products.map(product => product.price);
    let fluctuationCount = 0; // Счетчик значительных колебаний цен
    // Проходим по ценам и сравниваем их с предыдущими значениями
    for (let i = 1; i < prices.length; i++) {
        const diff = Math.abs(prices[i] - prices[i - 1]); // Рассчитываем разницу между соседними ценами
        if (diff > 5000) { // Задаем порог для значительных колебаний
            fluctuationCount++;
            console.log(`Цена изменилась с ${prices[i - 1]} долларов до ${prices[i]} долларов, разница: ${diff} долларов`);
        }
    }
    // Если значительных колебаний не зафиксировано
    if (fluctuationCount === 0) {
        console.log("Значительных колебаний цен не зафиксировано.");
    }
}

// Функция для анализа рейтингов
function analyzeRatings(products) {
    // Извлекаем рейтинги из массива товаров
    const ratings = products.map(product => product.rating);
    // Рассчитываем средний рейтинг
    const averageRating = calculateAverage(ratings);
    // Считаем количество товаров с рейтингом выше среднего
    const aboveAverageCount = ratings.filter(rating => rating > averageRating).length;

    console.log(`Средний рейтинг: ${averageRating.toFixed(2)}`);
    console.log(`Количество товаров с рейтингом выше среднего: ${aboveAverageCount}`);
}

// Функция для расчета средней оценки
function calculateAverage(arr) {
    // Считаем общую сумму значений
    const sum = arr.reduce((acc, curr) => acc + curr, 0);
    // Возвращаем среднее значение
    return sum / arr.length;
}

// Объединенная функция для всех анализов
function analyzeProducts() {
    console.log("Данные о товарах:", products);

    showPriceStats(products);        // Выводим статистику цен
    showAvgAndAboveAvg(products);    // Вычисляем среднюю цену и товары выше средней
    showPriceFluctuation(products);  // Анализируем колебания цен
    analyzeRatings(products);        // Анализируем рейтинги товаров
}

// Привязка функции к кнопке
document.getElementById('browseProductsBtn').addEventListener('click', analyzeProducts);