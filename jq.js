$(document).ready(function () {
    // Изменение заголовка с эффектами
    // При наведении мыши на заголовок меняется цвет на зелёный с плавным переходом
    $("#header-title").on("mouseenter", function () {
        $(this).css({ color: "green", transition: "0.5s" });
    // При уходе мыши цвет возвращается к пурпурному
    }).on("mouseleave", function () {
        $(this).css("color", "purple");
    });

    // Добавление нового товара в каталог
    // Вставка нового элемента "новинка" и стилизация его
    $("#catalog").append('<p class="new-product">Новинка: Ультрасовременный ПК за $1200!</p>');
    $(".new-product").css({
        color: "red",         // Красный текст
        fontWeight: "bold",  // Жирный шрифт
        textAlign: "center"  // Выравнивание по центру
    }).hide().fadeIn(2000); // Плавное появление элемента

    // Скрытие и показ таблицы
    // Создание кнопки для управления видимостью таблицы
    $("table").before('<button id="toggle-table">Показать/Скрыть таблицу</button>');
    $("#toggle-table").on("click", function () {
        $("table").slideToggle(1000); // Плавное скрытие или показ таблицы
    });

    // Визуальные эффекты для товаров
    // Добавление тени при наведении мыши на карточку товара
    $(".product-card").hover(
        function () {
            $(this).css("box-shadow", "0 0 20px blue"); // Синяя тень
        },
        function () {
            // Возвращение стандартной тени
            $(this).css("box-shadow", "0 2px 10px rgba(0, 0, 0, 0.1)");
        }
    );

    // Анимация для логотипа
    // По клику логотип исчезает и появляется с изменением размера
    $("#logo").on("click", function () {
        $(this).animate({
            width: "toggle",   // Скрыть/показать ширину
            height: "toggle"   // Скрыть/показать высоту
        }, 1000, function () {
            // Восстановление изначального размера после завершения анимации
            $(this).animate({
                width: "200px",
                height: "200px"
            }, 1000);
        });
    });

    // Фильтрация товаров
    // Добавление кнопок фильтров перед списком товаров
    $("#product-list").before(`
        <div id="filter-buttons">
            <button class="filter" data-type="computer">Компьютеры</button>
            <button class="filter" data-type="accessory">Аксессуары</button>
            <button class="filter" data-type="all">Все</button>
        </div>
    `);

    // События для кнопок фильтров
    $(".filter").on("click", function () {
        const type = $(this).data("type"); // Получение типа фильтра
        $(".product").hide(); // Скрытие всех товаров

        if (type === "all") {
            $(".product").fadeIn(1000); // Показ всех товаров
        } else {
            $(`.${type}`).fadeIn(1000); // Показ только выбранной категории
        }
    });

    // Всплывающая подсказка
    // Наведение на ссылку меню добавляет подсказку с её текстом
    $("nav a").hover(
        function () {
            const text = $(this).text(); // Получение текста ссылки
            $(this).attr("title", `Перейти в раздел "${text}"`); // Добавление подсказки
        }
    );
// Определяем плагин
(function($) {
    $.fn.blink = function(speed) {
        let $this = this; // Сохраняем ссылку на элемент
        setInterval(function() {
            $this.fadeToggle(speed); // Переключение видимости
        }, speed * 2); // Интервал между миганиями
        return this;
    };
})(jQuery);

// Используем плагин
$(document).ready(function() {
    $('#blinking-text').blink(500); // Эффект мигания с интервалом 500 мс
});
});