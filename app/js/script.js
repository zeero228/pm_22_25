$(document).ready(function() {
    $.getJSON("data.json", function(data) {
        $('.name_block h1').text(data.name);
        $('.name_block h2').text(data.surname);
        $('.under_name').text(data.title);
        $('.main_text_about').text(data.aboutMe);
        $('.second_text_about').text(data.secondAboutMe);

        // Контактна інформація
        const contactInfo = data.contact;
        $('.contact-info').html(`
            <li><i class="bi bi-telephone-fill"></i> ${contactInfo.phone}</li>
            <li><i class="bi bi-globe2"></i> ${contactInfo.website}</li>
            <li><i class="bi bi-geo-alt-fill"></i> ${contactInfo.address}</li>
        `);

        // Референції
        data.references.forEach(ref => {
            $('.contact-list').append(`
                <div class="list-item">
                    <div class="line"></div>
                    <div class="square"></div>
                    <div class="info" style="line-height: 5px;">
                        <h3 style="font-size: 15px" class="job_position"><b>${ref.name}</b></h3>
                        <div class="experience_text">
                            <p><span class="address">${ref.address}</span></p>
                            <p>Tel: ${ref.phone}</p>
                            <p>Email: ${ref.email}</p>
                        </div>
                    </div>
                </div>
            `);
        });

        // Досвід роботи
        data.jobExperience.forEach((job, index) => {
            $('.experience_list').append(`
                <div class="list-item">
                    <div class="line"></div>
                    <div class="square"></div>
                    <div class="info">
                        <p class="experience_work_place">${job.place}</p>
                        <p style="color: #333">${job.location}</p>
                        <div class="position_and_year">
                            <h5 class="job_position" data-index="${index}">
                                <span class="tooltiptext">Нажміть для детальнішої інформації</span><b>${job.position}</b>
                            </h5>
                            <p class="year_work">${job.year}</p>
                        </div>
                        <div class="experience_text" style="display: none;">
                            <p>${job.description}</p>
                        </div>
                    </div>
                </div>
            `);
        });

        // Освіта
        data.education.forEach(edu => {
            $('.education_list').append(`
                <div class="list-item">
                    <div class="line"></div>
                    <div class="square"></div>
                    <div class="info">
                        <p class="experience_work_place">${edu.institution}</p>
                        <h5 style="font-size: 18px"><b>${edu.degree}</b></h5>
                        <p class="year_work">${edu.year}</p>
                        <div class="experience_text">
                            <p>${edu.description}</p>
                        </div>
                    </div>
                </div>
            `);
        });

        // Навички
        data.skills.design.forEach(skill => {
            $('.skill-container').append(`
                <div class="skill">
                    <h5 style="text-transform: none;"><b>${skill.name}</b></h5>
                    <div class="skill-bar">
                        <div class="skill-level" style="width: ${skill.level}"></div>
                    </div>
                </div>
            `);
        });

        // Хобі
        data.skills.hobbies.forEach(hobby => {
            $('.skill-container').append(`
                <div class="skill">
                    <h5 style="text-transform: none;"><b>${hobby.name}</b></h5>
                    <div class="skill-bar">
                        <div class="skill-level" style="width: ${hobby.level}"></div>
                    </div>
                </div>
            `);
        });

        // Мови
        data.skills.languages.forEach(language => {
            $('.progress_bars').append(`
                <div class="progress-circle" data-percent="${language.level.replace('%','')}">
                    <div class="progress-text">
                        <h1 class="procent">${language.level}</h1>
                        <h3 class="procent_text">${language.name}</h3>
                    </div>
                </div>
            `);
        });

        // Анімація прогрес-барів
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

    }).fail(function() {
        console.error("Помилка при завантаженні даних з JSON.");
    });

    // Функція для приховування/відображення тексту
    $('.experience_list').on('click', '.job_position', function() {
        // Знайти текстовий блок для відповідного елемента
        const textContainer = $(this).closest('.list-item').find('.experience_text');
        const tooltipText = $(this).find('.tooltiptext');

        // Перемикати анімацію slideToggle
        textContainer.stop(true, true).slideToggle(300);

        // Змінити текст у tooltip залежно від стану
        tooltipText.text(
            tooltipText.text() === "Приховати детальну інформацію"
                ? "Нажміть для детальнішої інформації"
                : "Приховати детальну інформацію"
        );
    });
    $('.contact-list').on('click', '.job_position', function() {
        // Знайти текстовий блок для відповідного елемента
        const textContainer = $(this).closest('.list-item').find('.experience_text');
        const tooltipText = $(this).find('.tooltiptext');

        // Перемикати анімацію slideToggle
        textContainer.stop(true, true).slideToggle(300);

        // Змінити текст у tooltip залежно від стану
        tooltipText.text(
            tooltipText.text() === "Приховати детальну інформацію"
                ? "Нажміть для детальнішої інформації"
                : "Приховати детальну інформацію"
        );
    });
});