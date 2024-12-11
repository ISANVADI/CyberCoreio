// Функция для сортировки таблицы по цене
function sortTableByPrice() {
    const table = document.querySelector("table tbody");
    const rows = Array.from(table.rows);

    // Сортировка строк по значению цены из 4-го столбца (индекс 3)
    rows.sort((rowA, rowB) => {
        const priceA = parseFloat(rowA.cells[3]?.textContent.replace('$', '').trim()) || 0;
        const priceB = parseFloat(rowB.cells[3]?.textContent.replace('$', '').trim()) || 0;
        return priceA - priceB;
    });

    // Вставка отсортированных строк обратно в таблицу
    rows.forEach(row => table.appendChild(row));
}

// Сортировка таблицы при загрузке страницы
document.addEventListener("DOMContentLoaded", sortTableByPrice);

// Функция для добавления новой категории в каталог
function addNewCategory() {
    const catalog = document.getElementById("catalog");
    const newCategory = document.createElement("div");
    newCategory.innerHTML = `
        <h3>Планшеты:</h3>
        <ol>
            <li>Планшет apple</li>
            <li>Планшет samsung</li>
            <li>Планшет huawei</li>
        </ol>
    `;
    catalog.appendChild(newCategory);
}

// Функция для удаления последней категории в каталоге (предполагается, что это категория "Планшеты")
function removeCategory() {
    const catalog = document.getElementById("catalog");
    const lastCategory = catalog.querySelector("div:last-child");
    if (lastCategory) {
        catalog.removeChild(lastCategory);
    } else {
        alert("Категория планшетов не найдена!");
    }
}

// Функция для добавления эффекта наведения мыши на элемент
function addHoverEffect() {
    const productList = document.querySelector("#product-list");
    productList.addEventListener("mouseover", () => {
        productList.style.backgroundColor = "#e0f7fa";
    });
    productList.addEventListener("mouseout", () => {
        productList.style.backgroundColor = "";
    });
}

// Добавление кнопок для добавления и удаления категории при загрузке страницы
document.addEventListener("DOMContentLoaded", () => {
    addHoverEffect();

    // Создание контейнера с кнопками
    const catalogControls = document.createElement("div");
    catalogControls.id = "catalog-controls";

    // Кнопка для добавления категории "Планшеты"
    const addButton = document.createElement("button");
    addButton.textContent = "Добавить категорию Планшеты";  
    addButton.onclick = addNewCategory;

    // Кнопка для удаления последней категории
    const removeButton = document.createElement("button");
    removeButton.textContent = "Удалить категорию Планшеты";
    removeButton.onclick = removeCategory;

    catalogControls.appendChild(addButton);
    catalogControls.appendChild(removeButton);

    document.body.appendChild(catalogControls);
});

// Изменение заголовка страницы при прокрутке до раздела "Каталог"
window.addEventListener("scroll", function() {
    const catalogSection = document.getElementById("catalog");
    const catalogPosition = catalogSection.getBoundingClientRect().top;
    
    // Изменение заголовка страницы при видимости раздела
    if (catalogPosition < window.innerHeight && catalogPosition >= 0) {
        document.title = "Каталог товаров - CyberCore";
    } else {
        document.title = "Интернет-магазин CyberCore";
    }
});

// Приветственное сообщение при загрузке страницы
window.addEventListener("load", function() {
    if (window.confirm("Добро пожаловать в наш интернет-магазин CyberCore!")) {
        alert("Спасибо за посещение!");
    }
});

// Таймер для предложения скидки при отсутствии активности пользователя
let inactiveTimer;
function showDiscountOffer() {
    alert("Потратьте больше времени на выбор техники и получите скидку 5%!");
}

function resetInactiveTimer() {
    clearTimeout(inactiveTimer);
    inactiveTimer = setTimeout(showDiscountOffer, 20000); // 20 секунд бездействия
}

// Сброс таймера при взаимодействии пользователя
window.addEventListener("mousemove", resetInactiveTimer);
window.addEventListener("scroll", resetInactiveTimer);
window.addEventListener("keydown", resetInactiveTimer);

// Запуск таймера при загрузке страницы
window.addEventListener("load", resetInactiveTimer);

// Создание кнопки для применения стилей к элементам списка и добавление её на страницу
const applyStylesButton = document.createElement("button");
applyStylesButton.textContent = "Применить стили к списку";
applyStylesButton.id = "apply-styles-button";
document.body.appendChild(applyStylesButton);

// Создание списка с элементами и добавление его на страницу
const listContainer = document.createElement("ul");
listContainer.id = "item-list";
document.body.appendChild(listContainer);

const items = ["Офисный ПК", "Домашний ПК", "Игровой ПК", "Ультра ПК"];
items.forEach(itemText => {
    const listItem = document.createElement("li");
    listItem.textContent = itemText;
    listContainer.appendChild(listItem);
});

// Функция для применения стилей к элементам списка на основе их текста
function applyListStyles() {
    const listItems = document.querySelectorAll("#item-list li");

    listItems.forEach(item => {
        const itemName = item.textContent.trim().toLowerCase();

        // Применение стилей в зависимости от текста элемента списка
        if (itemName.includes("офисный")) {
            item.style.color = "DarkCyan";
            item.style.fontStyle = "italic";
        } else if (itemName.includes("домашний")) {
            item.style.color = "black";
            item.style.fontWeight = "bold";
        } else if (itemName.includes("игровой")) {
            item.style.color = "orange";
            item.style.fontWeight = "bold";
        } else if (itemName.includes("ультра")) {
            item.style.color = "Salmon";
            item.style.fontWeight = "bold";
            item.style.fontStyle = "times new roman";
        }
    });
}

// Добавление обработчика события для кнопки, чтобы применить стили к списку
applyStylesButton.addEventListener("click", applyListStyles);

// Массив цветов для циклического изменения фона
const colors = ['#FA8072', '#FFB6C1', '#FFEFD5', '#E0FFFF'];
let i = 0;

// Циклическое изменение фона страницы каждые 750 мс
const intervalId = setInterval(() => document.body.style.background = colors[i++ % colors.length], 1000);
// Остановка изменения фона через 3 секунды
setTimeout(() => { clearInterval(intervalId); document.body.style.background = ''; }, 4000);

// Функция для изменения стиля ссылок в навигации
function styleNavLinks() {
    const navLinks = document.querySelectorAll(".nav a");
    navLinks.forEach(link => {
        link.style.color = "darkblue";
        link.style.fontWeight = "bold";
        link.style.textDecoration = "underline";
    });
}

// Создание кнопки для изменения стиля ссылок и добавление её на страницу
const styleLinksButton = document.createElement("button");
styleLinksButton.textContent = "Изменить стиль навигации";
styleLinksButton.onclick = styleNavLinks;
document.body.appendChild(styleLinksButton);

// Ждём загрузки документа
$(document).ready(function () {
    // Подсветка активного раздела навигации
    $("nav a").on("click", function () {
        $("nav a").removeClass("active");
        $(this).addClass("active");
    });

    // Анимация кнопок при наведении
    $("#filter-buttons button").hover(
        function () {
            $(this).animate({ backgroundColor: "#ff9800", color: "#fff" }, 200);
        },
        function () {
            $(this).animate({ backgroundColor: "#4CAF50", color: "#fff" }, 200);
        }
    );

    // Показ/скрытие категорий товаров
    $("#filter-buttons button").on("click", function () {
        const category = $(this).data("category");
        $(".product").hide();
        $(`.product[data-category="${category}"]`).fadeIn(300).addClass("show");
    });

    // Анимация появления каталога
    $("#catalog").hide().slideDown(1000);

    // Эффект флип-карт товаров
    $(".product-box").on("click", function () {
        $(this).toggleClass("flipped");
    });

    // Валидация формы обратной связи
    $("#contact-form").on("submit", function (e) {
        let valid = true;
        $(this)
            .find("input[required]")
            .each(function () {
                if (!$(this).val()) {
                    valid = false;
                    $(this).css("border", "2px solid red");
                } else {
                    $(this).css("border", "1px solid green");
                }
            });
        if (!valid) {
            e.preventDefault();
            alert("Пожалуйста, заполните обязательные поля.");
        }
    });

    // Слайдер для галереи товаров
    $("#product-gallery").slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    });
});