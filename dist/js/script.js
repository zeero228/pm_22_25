$(document).ready(function(){$.getJSON("data.json",function(e){$(".name_block h1").text(e.name),$(".name_block h2").text(e.surname),$(".under_name").text(e.title),$(".main_text_about").text(e.aboutMe),$(".second_text_about").text(e.secondAboutMe);var i=e.contact;$(".contact-info").html(`
            <li><i class="bi bi-telephone-fill"></i> ${i.phone}</li>
            <li><i class="bi bi-globe2"></i> ${i.website}</li>
            <li><i class="bi bi-geo-alt-fill"></i> ${i.address}</li>
        `),e.references.forEach(e=>{$(".contact-list").append(`
                <div class="list-item">
                    <div class="line"></div>
                    <div class="square"></div>
                    <div class="info" style="line-height: 5px;">
                        <h3 style="font-size: 15px" class="job_position"><b>${e.name}</b></h3>
                        <div class="experience_text">
                            <p><span class="address">${e.address}</span></p>
                            <p>Tel: ${e.phone}</p>
                            <p>Email: ${e.email}</p>
                        </div>
                    </div>
                </div>
            `)}),e.jobExperience.forEach((e,i)=>{$(".experience_list").append(`
                <div class="list-item">
                    <div class="line"></div>
                    <div class="square"></div>
                    <div class="info">
                        <p class="experience_work_place">${e.place}</p>
                        <p style="color: #333">${e.location}</p>
                        <div class="position_and_year">
                            <h5 class="job_position" data-index="${i}">
                                <span class="tooltiptext">Нажміть для детальнішої інформації</span><b>${e.position}</b>
                            </h5>
                            <p class="year_work">${e.year}</p>
                        </div>
                        <div class="experience_text" style="display: none;">
                            <p>${e.description}</p>
                        </div>
                    </div>
                </div>
            `)}),e.education.forEach(e=>{$(".education_list").append(`
                <div class="list-item">
                    <div class="line"></div>
                    <div class="square"></div>
                    <div class="info">
                        <p class="experience_work_place">${e.institution}</p>
                        <h5 style="font-size: 18px"><b>${e.degree}</b></h5>
                        <p class="year_work">${e.year}</p>
                        <div class="experience_text">
                            <p>${e.description}</p>
                        </div>
                    </div>
                </div>
            `)}),e.skills.design.forEach(e=>{$(".skill-container").append(`
                <div class="skill">
                    <h5 style="text-transform: none;"><b>${e.name}</b></h5>
                    <div class="skill-bar">
                        <div class="skill-level" style="width: ${e.level}"></div>
                    </div>
                </div>
            `)}),e.skills.hobbies.forEach(e=>{$(".skill-container").append(`
                <div class="skill">
                    <h5 style="text-transform: none;"><b>${e.name}</b></h5>
                    <div class="skill-bar">
                        <div class="skill-level" style="width: ${e.level}"></div>
                    </div>
                </div>
            `)}),e.skills.languages.forEach(e=>{$(".progress_bars").append(`
                <div class="progress-circle" data-percent="${e.level.replace("%","")}">
                    <div class="progress-text">
                        <h1 class="procent">${e.level}</h1>
                        <h3 class="procent_text">${e.name}</h3>
                    </div>
                </div>
            `)}),$(".progress-circle").each(function(){let e=$(this),i=e.data("percent"),s=0,t=setInterval(function(){s<i?(s++,e.find(".procent").text(s+"%"),e.css("background",`conic-gradient(#dc0a0a 0%, #dc0a0a ${s}%, #d0d0d0 ${s}% 100%)`)):clearInterval(t)},25)})}).fail(function(){console.error("Помилка при завантаженні даних з JSON.")}),$(".experience_list").on("click",".job_position",function(){var e=$(this).closest(".list-item").find(".experience_text"),i=$(this).find(".tooltiptext");e.stop(!0,!0).slideToggle(300),i.text("Приховати детальну інформацію"===i.text()?"Нажміть для детальнішої інформації":"Приховати детальну інформацію")}),$(".contact-list").on("click",".job_position",function(){var e=$(this).closest(".list-item").find(".experience_text"),i=$(this).find(".tooltiptext");e.stop(!0,!0).slideToggle(300),i.text("Приховати детальну інформацію"===i.text()?"Нажміть для детальнішої інформації":"Приховати детальну інформацію")})});