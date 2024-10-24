$(document).ready(function() {
    $('.job_position').on('click', function() {
        // Знайти контейнер з текстом в межах поточного елемента списку
        var textContainer = $(this).closest('.list-item').find('.experience_text');

        // Використовувати slideToggle для плавної анімації
        textContainer.slideToggle(300);

        // Змінити текст кнопки
        var buttonText = $(this).find('.tooltiptext');
        if (buttonText.text() === "Приховати детальну інформацію") {
            buttonText.text("Нажміть для детальнішої інформації");
        } else {
            buttonText.text("Приховати детальну інформацію");
        }
    });
    $('.progress-circle').each(function() {
        const $circle = $(this);
        const targetPercent = $circle.data('percent');
        let currentPercent = 0;

        const interval = setInterval(function() {
            if (currentPercent < targetPercent) {
                currentPercent++;
                $circle.find('.procent').text(currentPercent + '%'); // Оновлення тексту
                $circle.css('background', `conic-gradient(#dc0a0a 0%, #dc0a0a ${currentPercent}%, #d0d0d0 ${currentPercent}% 100%)`);
            } else {
                clearInterval(interval); // Зупиняємо інтервал, коли досягнуто цільового значення
            }
        }, 25); // Затримка між кроками анімації
    });
});

