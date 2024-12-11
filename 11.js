
 const storeInfo = {
    name: "CyberCore",
    products: [
        { name: "Игровой ПК", price: 1000, category: "компьютеры" },
        { name: "Офисный ПК", price: 500, category: "компьютеры" },
        { name: "Монитор 24 дюйма", price: 200, category: "аксессуары" },
        { name: "Механическая клавиатура", price: 100, category: "аксессуары" }
    ]
};

const cart = {
    items: []
};

// Отображение списка товаров с кнопками
const productList = document.getElementById('product-list');
storeInfo.products.forEach(product => {
    const button = document.createElement('button');
    button.innerText = `Добавить ${product.name} за ${product.price} тг.`;
    button.onclick = () => addToCart(product);
    productList.appendChild(button);
});

// Функция добавления товара в корзину
function addToCart(product) {
    cart.items.push(product);
    console.log(`Добавлено в корзину: ${product.name} — ${product.price} тг.`);
    updateCartDisplay();
}

// Функция обновления отображения корзины
function updateCartDisplay() {
    const cartItemsDiv = document.getElementById('cart-items');
    cartItemsDiv.innerHTML = ''; // Очищаем корзину перед обновлением

    if (cart.items.length === 0) {
        cartItemsDiv.innerHTML = '<p>Корзина пуста.</p>';
        return;
    }

    cart.items.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.innerText = `${item.name} — ${item.price} тг.`;
        cartItemsDiv.appendChild(itemDiv);
    });
}

// Функция для отображения самого дорогого товара
function displayMostExpensive() {
    if (cart.items.length === 0) {
        console.log("Корзина пуста.");
        return;
    }

    let mostExpensiveItem = cart.items[0];
    for (let i = 1; i < cart.items.length; i++) {
        if (cart.items[i].price > mostExpensiveItem.price) {
            mostExpensiveItem = cart.items[i];
        }
    }

    console.log(`Самый дорогой товар в корзине: ${mostExpensiveItem.name} — ${mostExpensiveItem.price} тг.`);
}

// Функция для очистки корзины
function clearCart() {
    cart.items = [];
    console.log("Корзина очищена.");
    updateCartDisplay();
}

// Обработчики событий
document.getElementById('show-most-expensive').onclick = displayMostExpensive;
document.getElementById('clear-cart').onclick = clearCart;
    
    
    function displayProducts() {
        const productList = document.createElement("div");
        productList.setAttribute("id", "product-list");
        productList.setAttribute("style", "display: flex; flex-wrap: wrap; justify-content: center;");
    
        storeInfo.products.forEach(product => {
            console.log(`Добавление продукта: ${product.name}, Цена: $${product.price}, Категория: ${product.category}`);
            
            const productCard = document.createElement("div");
            productCard.className = "product-card";
            productCard.classList.add(product.category); // Добавляем класс категории
            
            const productTitle = document.createElement("div");
            productTitle.className = "product-title";
            productTitle.textContent = product.name;
    
            const productPrice = document.createElement("div");
            productPrice.textContent = `$${product.price}`;
    
            productCard.appendChild(productTitle);
            productCard.appendChild(productPrice);
            productList.appendChild(productCard);
        });
    
        document.body.appendChild(productList);
        console.log("Все продукты добавлены в список.");
    }
    
    window.onload = function() {
        displayProducts();
        createProductCards(); // Создание карточек товара
        console.log("Скрипт загружен и готов к работе.");
    };
    
    function filterProducts(category) {
        const products = document.querySelectorAll('.product-card'); 
        products.forEach(product => {
            if (category === 'all') {
                product.style.display = 'block';
            } else {
                if (product.classList.contains(category)) {
                    product.style.display = 'block';
                } else {
                    product.style.display = 'none';
                }
            }
        });
        console.log(`Фильтрация применена: ${category}`);
    }
    
    function toggleDetails(button) {
        let details = button.nextElementSibling;
        if (details.style.display === "none") {
            details.style.display = "block";
            button.textContent = "Скрыть";
            console.log(`Детали для продукта ${button.previousElementSibling.textContent} показаны.`);
        } else {
            details.style.display = "none";
            button.textContent = "Подробнее";
            console.log(`Детали для продукта ${button.previousElementSibling.textContent} скрыты.`);
        }
    }

    const products = [
        {
            name: "Игровой компьютер 3",
            cpu: "Intel Core i9-12900K",
            ram: "32 GB DDR5 4800 MHz",
            gpu: "NVIDIA GeForce RTX 4080",
            details: "Водяное охлаждение, блок питания 1000W, RGB подсветка",
            price: "3500$",
            category: "компьютеры" // Добавляем категорию
        },
        {
            name: "Офисный компьютер 3",
            cpu: "AMD Ryzen 5 5600G",
            ram: "16 GB DDR4 3200 MHz",
            gpu: "Integrated Radeon Graphics",
            details: "256 GB SSD, 1 TB HDD, тихий вентилятор",
            price: "800$",
            category: "компьютеры" // Добавляем категорию
        },
        {
            name: "Домашний компьютер 3",
            cpu: "Intel Core i5-12400",
            ram: "16 GB DDR4 3200 MHz",
            gpu: "NVIDIA GeForce GTX 1660",
            details: "500 GB SSD, 600W блок питания, Wi-Fi адаптер",
            price: "950$",
            category: "компьютеры" // Добавляем категорию
        }
    ];

    function createProductCards() {
        const gallery = document.getElementById('product-gallery');
        
        products.forEach(product => {
            console.log(`Создание карточки продукта: ${product.name}, Процессор: ${product.cpu}`);
            
            const productBox = document.createElement('div');
            productBox.classList.add('product-box');
            productBox.setAttribute('data-category', product.category); // Устанавливаем атрибут категории
            
            const productInner = document.createElement('div');
            productInner.classList.add('product-inner');
            
            const front = document.createElement('div');
            front.classList.add('product-front');
            front.innerHTML = `
                <h3>${product.name}</h3>
                <p><strong>Процессор:</strong> ${product.cpu}</p>
                <p><strong>Оперативная память:</strong> ${product.ram}</p>
                <p><strong>Видеокарта:</strong> ${product.gpu}</p>
                <div class="details" style="display:none;">
                    <p><strong>Детали:</strong> ${product.details}</p>
                    <p><strong>Цена:</strong> ${product.price}</p>
                </div>
            `;
            
            const back = document.createElement('div');
            back.classList.add('product-back');
            back.innerHTML = `
                <h3>Дополнительно:</h3>
                <p><strong>Детали:</strong> ${product.details}</p>
                <p><strong>Цена:</strong> ${product.price}</p>
            `;
            
            productInner.appendChild(front);
            productInner.appendChild(back);
            productBox.appendChild(productInner);
            
            productBox.addEventListener('click', () => {
                productBox.classList.toggle('flipped');
                console.log(`Карточка продукта ${product.name} перевернута на ${productBox.classList.contains('flipped') ? 'заднюю' : 'переднюю'} сторону.`);
            });
            
            gallery.appendChild(productBox);
        });

        console.log("Все карточки продуктов созданы.");
    }

    // Изначально показываем все товары
    filterProducts('all');
    function toggleDetails(button) {
            const details = button.nextElementSibling;
            details.style.display = details.style.display === 'none' ? 'block' : 'none';
        }

        function filterProducts(category) {
            const products = document.querySelectorAll('.product');
            let filteredProducts = [];

            products.forEach(product => {
                if (category === 'all' || product.classList.contains(category)) {
                    product.style.display = 'block'; // Показываем продукт
                    filteredProducts.push(product.querySelector('h3').innerText);
                } else {
                    product.style.display = 'none'; // Скрываем продукт
                }
            });

            console.log(`Отфильтрованные товары (${category}):`, filteredProducts);
        }
        function toggleDetails(button) {
    const detailsDiv = button.nextElementSibling; // Получаем следующий элемент (блок с деталями)
    
    // Переключаем отображение блока с деталями
    if (detailsDiv.style.display === "block") {
        detailsDiv.style.display = "none"; // Скрываем детали
    } else {
        // Скрываем все остальные блоки с деталями
        const allDetails = document.querySelectorAll('.details');
        allDetails.forEach(detail => {
            detail.style.display = 'none';
        });

        // Показываем детали для нажатого товара
        detailsDiv.style.display = "block"; // Показываем детали

        // Логируем название товара в консоль
        const productName = button.parentElement.querySelector('h3').innerText; // Получаем название товара
        console.log(`Кнопка "Подробнее" нажата для: ${productName}`);
    }
}
