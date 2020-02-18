<template>
  <div id="app">
    <section class="container-fluid bg-dark text-white pt-4 content">
      <div class="container-fluid w-75 pt-4 pb-4">
        <div class="d-flex flex-row">
          <h2 class="text-left text-uppercase">13-15 марта</h2>
          <h2 class="text-right text-uppercase ml-auto">175 000 рублей</h2>
        </div>
        <div class="banner">
          <img src="../assets/mlhack.svg" alt="mlhack" class="w-75 m-auto">
          <h2 class="ml-auto text-right text-uppercase">2020</h2>
        </div>
        <router-link to="/team" class="btn btn-lg btn-outline-primary text-uppercase mt-2">Подать заявку</router-link>
        <router-link to="/startup" class="btn btn-lg btn-outline-primary text-uppercase mt-2">Предложить готовое решение</router-link>
      </div>
    </section>
    <section class="container-fluid bg-dark text-white pt-4" id="about">
      <div class="container-fluid w-75">
        <div class="d-flex flex-row">
          <h2 class="text-left text-lg">Что такое HACK ML?</h2>
          <h2 class="mt-auto mb-auto text-right ml-auto text-primary">01</h2>
        </div>
        <div class="text-left text-container mt-5 pb-5">
          <ul>
            <li>Уникальный всероссийский Хакатон в направлении машинного обучения</li>
            <li>Организатор хакатона, Университет ИТМО, и партнеры предлагают шесть разных задач, связанных с машинным обучением</li>
            <li>Вместе мы хотим найти нестандартные технологические решения, познакомиться с новыми командами на этом рынке и за 48 часов разработать передовые инновационные технологии в области машинного обучения</li>
          </ul>
        </div>
      </div>
    </section>
    <section class="container-fluid bg-dark text-white pt-4" id="format">
      <div class="container-fluid w-75">
        <div class="d-flex flex-row">
          <h2 class="mt-auto mb-auto text-left text-primary">02</h2>
          <h2 class="text-right ml-auto text-lg">Формат</h2>
        </div>
        <div class="m-auto card-container card-deck w-75 pt-5 pb-5">
          <div class="d-flex flex-column text-container mt-2">
            <h2 class="text-center text-primary">Хакатон</h2>
            <b-card bg-variant="dark" text-variant="white" class="text-left border-0 rounded-0" footer-border-variant="white">
              <b-card-text>Если вы разработчик, дизайнер или продакт-менеджер, то вы можете объединиться в команду, за 48 часов предложить решение одной из задач и выиграть <span class="text-primary font-weight-bold">100 000 рублей</span>. Подать заявку может независимый участник или готовая команда.</b-card-text>
              <template v-slot:footer>
                <router-link to="/team" class="text-white block-link text-center">
                  <div class="block-link">Подать заявку на хакатон</div>
                </router-link>
              </template>
            </b-card>
          </div>
          <div class="d-flex flex-column text-container mt-2">
            <h2 class="text-center text-primary">Готовое решение</h2>
            <b-card bg-variant="dark" text-variant="white" class="text-left border-0 rounded-0" footer-border-variant="white">
              <b-card-text>Если вы стартап или зрелая компания и у вас есть готовое решение для одной задачи, то вы можете заявить о себе, пройти отбор и представить свое решение партнеру в рамках питч‑сессии готовых решений.</b-card-text>
              <template v-slot:footer>
                <router-link to="/startup" class="text-white block-link text-center">
                  <div class="block-link">Подать заявку на хакатон</div>
                </router-link>
              </template>
            </b-card>
          </div>
        </div>
      </div>
    </section>
    <section class="container-fluid bg-dark text-white pt-4" id="tasks">
      <div class="container-fluid w-75">
        <div class="d-flex flex-row pb-5">
          <h2 class="text-left text-lg">Задания</h2>
          <h2 class="mt-auto mb-auto text-right ml-auto text-primary">03</h2>
        </div>
        <b-card-group deck>
          <b-card bg-variant="dark" text-variant="white" class="text-left border-0 rounded-0 mt-4" footer-border-variant="white">
            <b-card-text>
              <h3 class="text-primary">Обработка голоса</h3>
              <ul class="list-unstyled">
                <li>Исправление акцента. Добавить британский
                  акцент, убрать индийский акцент</li>
                <li>Изменение голоса на голос другого
                  человека/селебрити</li>
                <li>Создать более уверенный голос. Убрать из
                  речи слова-паразиты, изменить тональность
                  голоса</li>
              </ul>
            </b-card-text>
            <template v-slot:footer>
              <router-link to="/task" class="text-white block-link text-center">
                <div class="block-link">Узнать подробнее</div>
              </router-link>
            </template>
          </b-card>
          <b-card bg-variant="dark" text-variant="white" class="text-left border-0 rounded-0 mt-4" footer-border-variant="white">
            <b-card-text>
              <h3 class="text-primary">Sing like Pro</h3>
              Дотягивать концовки за пользователем. Накладывать ритм.
              Объединить со вторым профессиональным голосом и
              профессиональной аранжировкой
            </b-card-text>
            <template v-slot:footer>
              <router-link to="/task" class="text-white block-link text-center">
                <div class="block-link">Узнать подробнее</div>
              </router-link>
            </template>
          </b-card>
        </b-card-group>
        <b-card-group deck>
          <b-card bg-variant="dark" text-variant="white" class="text-left border-0 rounded-0 mt-4" footer-border-variant="white">
            <b-card-text>
              <h3 class="text-primary">Создать фото по заданной теме</h3>
              Создать non-copyrighted фото по заданной теме
              (“счастливая пара на пляже с пальмами”)
            </b-card-text>
            <template v-slot:footer>
              <router-link to="/task" class="text-white block-link text-center">
                <div class="block-link">Узнать подробнее</div>
              </router-link>
            </template>
          </b-card>
          <b-card bg-variant="dark" text-variant="white" class="text-left border-0 rounded-0 mt-4" footer-border-variant="white">
            <b-card-text>
              <h3 class="text-primary">Traffic optimization</h3>
              Оптимизация трафика видео-контента.
              Способы сжатия видео с ML
              <br />
              <br />
              <ul class="list-unstyled">
                <li>Увеличить FPS. Видео/контент передается с меньшим
                  количеством FPS, когда мы его получаем, FPS синтетически
                  повышается</li>
                <li>Использование сжатого представления нейронных сетей</li>
              </ul>
            </b-card-text>
            <template v-slot:footer>
              <router-link to="/task" class="text-white block-link text-center">
                <div class="block-link">Узнать подробнее</div>
              </router-link>
            </template>
          </b-card>
        </b-card-group>
        <b-card-group deck>
          <b-card bg-variant="dark" text-variant="white" class="text-left border-0 rounded-0 mt-4" footer-border-variant="white">
            <b-card-text>
              <h3 class="text-primary">TikTok for...</h3>
              <ul class="list-unstyled">
                <li>Dating
                  <ul>
                    <li>Пользователи создают различный контент (ответы на вопросы,
                      вайны/показывают свою жизнь);</li>
                    <li>Приложение использует UX как в TikTok для подбора рекомендации
                      в знакомствах;</li>
                  </ul>
                </li>
                <li>News
                  <ul>
                    <li>Инфлюенсеры создают контент в виде новостей, демократизируя
                      новостное пространство;</li>
                  </ul>
                </li>
                <li>Sport
                  <ul>
                    <li>Пользователи создают контент (высказывают мнение относительно
                      спортивных событий, создают интересные нарезки с матчей/игр)</li>
                  </ul>
                </li>
              </ul>
            </b-card-text>
            <template v-slot:footer>
              <router-link to="/task" class="text-white block-link text-center">
                <div class="block-link">Узнать подробнее</div>
              </router-link>
            </template>
          </b-card>
          <b-card bg-variant="dark" text-variant="white" class="text-left border-0 rounded-0 mt-4" footer-border-variant="white">
            <b-card-text>
              <h3 class="text-primary">Калькулятор калорий</h3>
              Подсчитать, сколько калорий в еде с помощью
              картинки
            </b-card-text>
            <template v-slot:footer>
              <router-link to="/task" class="text-white block-link text-center">
                <div class="block-link">Узнать подробнее</div>
              </router-link>
            </template>
          </b-card>
        </b-card-group>
      </div>
    </section>
    <section class="container-fluid bg-dark text-white pt-5 pb-5" id="prize">
      <div class="container-fluid w-75">
        <div class="d-flex flex-row">
          <h2 class="m-auto text-uppercase">Призовой фонд</h2>
          <h2 class="m-auto text-lg text-primary font-weight-bold">175 000 ₽</h2>
        </div>
        <div class="text-center m-auto w-75">
          Команда, которая за 48 часов создаст лучшее решение по конкретной задаче, получит 100 000 рублей.
        </div>
        <router-link to="/team"> <b-button size="lg" variant="outline-primary" class="text-uppercase mt-4">Подать заявку</b-button></router-link>
      </div>
    </section>
    <section class="container-fluid bg-dark text-white pt-4" id="timing">
      <div class="container-fluid w-75">
        <div class="d-flex flex-row">
          <h2 class="text-left text-lg">Тайминг</h2>
          <h2 class="mt-auto mb-auto text-right ml-auto text-primary">05</h2>
        </div>
        <div class="w-100 mt-5 mt-5 mb-5">
          <div class="timing d-flex flex-column">
            <div class="d-flex flex-row m-auto">
              <div class="timing__stage d-flex flex-column text-left pl-2 pr-5 m-auto">
                <h5 class="text-uppercase">
                  15 февраля 2020
                </h5>
                <span>Старт приёма заявок</span>
              </div>
              <div class="timing__stage m-auto d-flex flex-column text-left pl-2 pr-5">
                <h5 class="text-uppercase">
                  15 марта -<br /> 1 июня 2020
                </h5>
                <span>Акселерация</span>
              </div>
            </div>
            <div class="timing__line">
              <div class="timing__line-progress" style="width: 7.5%"></div>
            </div>
            <div class="d-flex flex-row m-auto">
              <div class="timing__stage m-auto ml-5 d-flex flex-column justify-content-end text-left pl-2 pr-2">
                <h5 class="text-uppercase">
                  28 февраля 2020
                </h5>
                <span>Окончание приема заявок</span>
              </div>
              <div class="timing__stage m-auto d-flex flex-column justify-content-end text-left pl-2 pr-2">
                <h5 class="text-uppercase">
                  1 марта 2020
                </h5>
                <span>Результаты отбора</span>
              </div>
              <div class="timing__stage m-auto d-flex flex-column justify-content-end text-left pl-2 pr-2">
                <h5 class="text-uppercase">
                  13-15 марта 2020
                </h5>
                <span>Проведение хакатона</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="container-fluid bg-dark text-white pt-4 pb-5" id="jury">
      <div class="container-fluid w-75">
        <div class="d-flex flex-row">
          <h2 class="mt-auto mb-auto text-left text-primary">06</h2>
          <h2 class="text-right ml-auto text-base">Жюри</h2>
        </div>
        <div class="container-fluid">
          <div class="d-flex card-container justify-space-between mt-5">
            <div class="d-flex flex-column">
              <div class="jury__member">
                <img src="../assets/frid.jpeg" alt="Jury" class="rounded-circle jury">
                <div class="mt-3">
                  <h4 class="text-uppercase">Григорий Фридман</h4>
                  <span>Профессор Санкт-Петербургский государственный экономический университет, д.т.н., <br>стаж преподавания 21 год</span>
                </div>
              </div>
            </div>
            <div class="d-flex flex-column m-auto">
              <div class="jury__member">
                <img src="../assets/Avdy.jpeg" alt="Jury" class="rounded-circle jury">
                <div class="mt-3">
                  <h4 class="text-uppercase">Александр Авдюшенко</h4>
                  <span>Teacher at SPB <a href="https://compscicenter.ru/teachers/2607/">Computer Science Center</a>.</span>
                </div>
              </div>
            </div>
            <div class="d-flex flex-column m-auto">
              <div class="jury__member">
                <img src="../assets/dav.jpg" alt="Jury" class="rounded-circle jury">
                <div class="mt-3">
                  <h4 class="text-uppercase">Александр Давыденко</h4>
                  <span>Старший преподаватель кафедры космических технологий и <br>прикладной астродинамики в СПбГУ </span>
                </div>
              </div>
            </div>
            <div class="d-flex flex-column m-auto">
              <div class="jury__member">
                <img src="../assets/Sero.jpeg" alt="Jury" class="rounded-circle jury">
                <div class="mt-3">
                  <h4 class="text-uppercase">Арсений Серока</h4>
                  <span>Chief Executive Officer, Co‑Founder of Serokell Labs</span>
                </div>
              </div>
            </div>
          </div>
          <div class="d-flex card-container justify-space-between mt-5">
            <div class="d-flex flex-column m-auto">
              <div class="jury__member">
                <img src="../assets/Tkachenko.jpg" alt="Jury" class="rounded-circle jury">
                <div class="mt-3">
                  <h4 class="text-uppercase">Григорий Ткаченко</h4>
                  <span>VP of Engineering & Co-Founder - AI Factory</span>
                </div>
              </div>
            </div>
            <div class="d-flex flex-column m-auto">
              <div class="jury__member">
                <img src="../assets/Mike.jpg" alt="Jury" class="rounded-circle jury">
                <div class="mt-3">
                  <h4 class="text-uppercase">Майк Мирзоянов</h4>
                  <span>CEO - Codeforces</span>
                </div>
              </div>
            </div>
            <div class="d-flex flex-column m-auto">
              <div class="jury__member">
                <img src="../assets/Galper.jpg" alt="Jury" class="rounded-circle jury">
                <div class="mt-3">
                  <h4 class="text-uppercase">Даня Гальпер</h4>
                  <span>Founder and CEO of Grow Food</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="container-fluid bg-dark text-white pt-4" id="program">
      <div class="container-fluid w-75">
        <div class="d-flex flex-row">
          <h2 class="text-base text-left">Программа</h2>
          <h2 class="mt-auto mb-auto ml-auto text-right text-primary">07</h2>
        </div>
        <div class="d-flex card-container justify-content-start">
          <div class="d-flex flex-column mb-auto text-container bg-dark text-left">
            <ul class="list-group w-75 m-auto pt-4 pb-4 rounded-0">
              <h2 class="ml-auto text-primary font-weight-bold">13/03/2020</h2>
              <li class="list-group-item bg-dark text-white border border-white rounded-0"><span class="badge badge-primary p-2 mr-2">15:00</span>Сбор и регистрация участников</li>
              <li class="list-group-item bg-dark text-white border border-white rounded-0 mt-2"><span class="badge badge-primary p-2 mr-2">17:00</span>Старт хакатона</li>
              <li class="list-group-item bg-dark text-white border border-white rounded-0 mt-2"><span class="badge badge-primary p-2 mr-2">18:00</span>Мастер-класс “генерация идей”</li>
              <li class="list-group-item bg-dark text-white border border-white rounded-0 mt-2"><span class="badge badge-primary p-2 mr-2">20:00</span>Самое время покушать</li>
            </ul>
          </div>
          <div class="d-flex flex-column text-container bg-dark text-left">
            <ul class="list-group w-75 m-auto pt-4 pb-4 rounded-0">
              <h2 class="ml-auto text-primary font-weight-bold">14/03/2020</h2>
              <li class="list-group-item bg-dark text-white border border-white rounded-0"><span class="badge badge-primary p-2 mr-2">01:00-02:00</span>Ночной перекус</li>
              <li class="list-group-item bg-dark text-white border border-white rounded-0 mt-2"><span class="badge badge-primary p-2 mr-2">05:00-06:00</span>Кофебрейк</li>
              <li class="list-group-item bg-dark text-white border border-white rounded-0 mt-2"><span class="badge badge-primary p-2 mr-2">09:00-10:00</span>Завтрак</li>
              <li class="list-group-item bg-dark text-white border border-white rounded-0 mt-2"><span class="badge badge-primary p-2 mr-2">10:00-13:00</span>Консультации с экспертами</li>
              <li class="list-group-item bg-dark text-white border border-white rounded-0 mt-2"><span class="badge badge-primary p-2 mr-2">14:00-15:00</span>Crash-тест идей</li>
              <li class="list-group-item bg-dark text-white border border-white rounded-0 mt-2"><span class="badge badge-primary p-2 mr-2">15:00-17:00</span>Консультации с экспертами</li>
              <li class="list-group-item bg-dark text-white border border-white rounded-0 mt-2"><span class="badge badge-primary p-2 mr-2">18:00-19:00</span>Встреча с успешным проектом</li>
              <li class="list-group-item bg-dark text-white border border-white rounded-0 mt-2"><span class="badge badge-primary p-2 mr-2">20:00-21:00</span>Ужин</li>
              <li class="list-group-item bg-dark text-white border border-white rounded-0 mt-2"><span class="badge badge-primary p-2 mr-2">21:00-23:00</span>Тематические мастер-классы</li>
            </ul>
          </div>
        </div>
        <div class="d-flex flex-column text-container bg-dark text-left">
          <ul class="list-group w-75 m-auto pt-4 pb-4 rounded-0">
            <h2 class="ml-auto text-primary font-weight-bold">15/03/2020</h2>
            <li class="list-group-item bg-dark text-white border border-white rounded-0"><span class="badge badge-primary p-2 mr-2">01:00-02:00</span>Ночной перекус</li>
            <li class="list-group-item bg-dark text-white border border-white rounded-0 mt-2"><span class="badge badge-primary p-2 mr-2">05:00-06:00</span>Кофебрейк</li>
            <li class="list-group-item bg-dark text-white border border-white rounded-0 mt-2"><span class="badge badge-primary p-2 mr-2">09:00-10:00</span>Завтрак</li>
            <li class="list-group-item bg-dark text-white border border-white rounded-0 mt-2"><span class="badge badge-primary p-2 mr-2">10:00-11:00</span>Мастер-класс по презентациям</li>
            <li class="list-group-item bg-dark text-white border border-white rounded-0 mt-2"><span class="badge badge-primary p-2 mr-2">12:00-13:00</span>Обедик</li>
            <li class="list-group-item bg-dark text-white border border-white rounded-0 mt-2"><span class="badge badge-primary p-2 mr-2">13:00-14:00</span>Репетиция выступлений</li>
            <li class="list-group-item bg-dark text-white border border-white rounded-0 mt-2"><span class="badge badge-primary p-2 mr-2">14:00-15:00</span>Кофебрейк</li>
            <li class="list-group-item bg-dark text-white border border-white rounded-0 mt-2"><span class="badge badge-primary p-2 mr-2">15:00-16:00</span>Окончание хакатона</li>
            <li class="list-group-item bg-dark text-white border border-white rounded-0 mt-2"><span class="badge badge-primary p-2 mr-2">16:00-17:00</span>Презентация результатов</li>
          </ul>
        </div>
      </div>
    </section>
    <section class="container-fluid bg-dark text-white pt-4" id="place">
      <div class="container-fluid w-75">
        <div class="d-flex flex-row">
          <h2 class="mt-auto mb-auto text-primary">08</h2>
          <div class="d-flex flex-column ml-auto">
            <h2 class="text-base text-right">Место</h2>
            <h3 class="text-uppercase text-right mt-2">Университет ИТМО</h3>
            <p class="text-right">Адрес: Биржевая линия, 16</p>
          </div>
        </div>
        <div class="map-container mt-4 pb-5">
          <iframe class="rounded-circle iframe" src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;coord=59.94462565,30.29476610798419&amp;q=%D0%91%D0%B8%D1%80%D0%B6%D0%B5%D0%B2%D0%B0%D1%8F%20%D0%BB%D0%B8%D0%BD%D0%B8%D1%8F%2C%2016+(%D0%A3%D0%BD%D0%B8%D0%B2%D0%B5%D1%80%D1%81%D0%B8%D1%82%D0%B5%D1%82%20%D0%98%D0%A2%D0%9C%D0%9E)&amp;ie=UTF8&amp;t=&amp;z=16&amp;iwloc=B&amp;output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
        </div>
      </div>
    </section>
    <section class="container-fluid bg-dark text-white pt-4 pb-4" id="partners">
      <div class="container-fluid w-75">
        <div class="d-flex flex-row ">
          <h2 class="text-right text-base">Патрнёры</h2>
          <h2 class="mt-auto mb-auto ml-auto text-right text-primary">09</h2>
        </div>
        <div class="d-flex card-container col-xs-12 mt-5 pb-4">
          <div class="d-flex flex-column partner m-auto">
            <img src="../assets/itmo.png" alt="" class="m-auto">
            <h3 class="pt-2">Университет ИТМО</h3>
          </div>
          <div class="d-flex flex-column partner col-xs-12  m-auto">
            <img src="../assets/botan.jpg" alt="" class="m-auto">
            <h3 class="pt-2">Ботан Инвестор</h3>
          </div>
          <div class="d-flex flex-column partner  clo-xs-12 m-auto">
            <img src="../assets/dg.png" alt="" class="m-auto">
            <h3 class="pt-2">Digital Generation</h3>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: 'Main',
  data () {
    return {}
  }
}

</script>
<style>
  .jury{
    width: 250px;
    height: 250px;
  }
.content {
  flex: 1 0 auto;
}

.banner {
  margin: 18% auto;
}

.text-lg {
  font-size: 6vw !important;
}

.card-body {
  border-top: 3px solid #fff;
  border-right: 3px solid #fff;
  border-left: 3px solid #fff;
}

.card-footer {
  padding: 0;
  border: 3px solid #fff !important;
  border-radius: 0 !important;
}

.card-footer:hover {
  border: 3px solid !important;
  border-color: #007bff !important;
}

.block-link {
  width: 100%;
  height: 100%;
  padding: 0.75rem 0;
}

.block-link:hover {
  color: #007bff;
  text-decoration: none !important;
}

.timing__line {
  height: 5px;
  background: #a6a6a6;
}

.timing__line-progress {
  height: 5px;
  background: #007bff;
}

.timing__stage {
  border-left: 5px solid #007bff;
  height: 150px;
}

.text-container,
.map-container {
  width: 50%;
}

.map-container {
  margin-left: auto;
}

.map-container .iframe {
  width: 600px;
  height: 600px;
}

.card-container {
  flex-direction: row;
  justify-content: space-between;
}

.partner img {
  max-width: 300px;
}

.badge {
  font-size: 1rem;
  padding: 0.25rem 0.75rem;
}

@media screen and (max-width: 1281px) {
  .map-container {
    width: 100%;
  }

  .map-container {
    margin: auto;
  }
}

@media screen and (max-width: 1025px) {

  .text-container,
  .map-container {
    width: 100%;
  }

  .card-container {
    flex-direction: column;
  }

  .card-deck {
    flex-flow: column wrap !important;
  }

  .text-lg {
    font-size: 50px !important;
  }

  .jury__member {
    margin-top: 1rem;
  }

  .map-container .iframe {
    width: 400px;
    height: 400px;
  }
}

@media screen and (max-width: 769px) {
  h5 {
    font-size: 1rem;
  }

  .timing__stage span {
    font-size: 0.75rem;
  }
}

@media screen and (max-width: 481px) {
  .map-container .iframe {
    width: 300px;
    height: 300px;
  }

  .text-lg {
    font-size: 40px !important;
  }

  h3 {
    font-size: 1.5rem;
  }

  h2 {
    font-size: 1.75rem;
  }
}

@media screen and (max-width: 321px) {
  .map-container .iframe {
    width: 200px;
    height: 200px;
  }

  .text-lg {
    font-size: 25px !important;
  }

  .jury__member img {
    width: 150px;
    height: 150px;
  }

  h3 {
    font-size: 1.25rem;
  }

  h2 {
    font-size: 1.5rem;
  }

  h5 {
    font-size: 0.75rem;
  }

  .timing__stage span {
    font-size: 0.5rem;
  }

  .partner img {
    width: 150px;
    height: 100px;
  }

  .partner {
    margin-top: 0.75rem !important;
  }

  .partner h2 {
    font-size: 1.25rem;
  }
}

</style>
