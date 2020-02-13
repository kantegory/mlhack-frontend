<template>
  <div id="app">
    <section class="container-fluid bg-dark text-white pt-4 content">
      <div class="container-fluid w-75 pt-4 pb-4">
        <div class="d-flex flex-row">
          <h2 class="text-left text-uppercase">14-15 февраля</h2>
          <h2 class="text-right text-uppercase ml-auto">1 100 000 рублей</h2>
        </div>
        <div class="banner">
          <img src="../assets/banner_logo.png" alt="Banner logo" class="w-75 m-auto">
          <h2 class="ml-auto text-right text-uppercase">2020</h2>
        </div>
        <router-link to="/task" class="btn btn-lg btn-outline-primary text-uppercase">Подать заявку</router-link>
        <router-link to="/startup" class="btn btn-lg btn-outline-primary text-uppercase">Предложить готовое решение</router-link>
      </div>
    </section>
    <section class="container-fluid bg-dark text-white pt-4" id="about">
      <div class="container-fluid w-75">
        <div class="d-flex flex-row">
          <h2 class="text-left text-lg">Что такое?</h2>
          <h2 class="mt-auto mb-auto text-right ml-auto text-primary">01</h2>
        </div>
        <div class="text-justify w-50 mt-5 pb-5">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero excepturi repellendus porro praesentium voluptatem. Quisquam necessitatibus possimus nihil molestias molestiae iste nobis fugit, aspernatur, nesciunt asperiores quas a, cupiditate vero! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos ducimus repellat quisquam vel cupiditate odit dicta, temporibus perferendis, atque, accusantium eum modi ipsam velit animi illo error vitae consequuntur. Quae.
        </div>
      </div>
    </section>
    <section class="container-fluid bg-dark text-white pt-4" id="format">
      <div class="container-fluid w-75">
        <div class="d-flex flex-row">
          <h2 class="mt-auto mb-auto text-left text-primary">02</h2>
          <h2 class="text-right ml-auto text-lg">Формат</h2>
        </div>
        <div class="text-justify w-50 mt-5 pb-5">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero excepturi repellendus porro praesentium voluptatem. Quisquam necessitatibus possimus nihil molestias molestiae iste nobis fugit, aspernatur, nesciunt asperiores quas a, cupiditate vero! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos ducimus repellat quisquam vel cupiditate odit dicta, temporibus perferendis, atque, accusantium eum modi ipsam velit animi illo error vitae consequuntur. Quae.
        </div>
        <div class="m-auto d-flex flex-row w-75 pt-5 pb-5">
          <div class="d-flex flex-column w-50">
            <h2 class="text-center">Готовая команда</h2>
            <b-card bg-variant="dark" text-variant="white" class="text-left border-0 rounded-0" footer-border-variant="white">
              <b-card-text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem id iste molestiae, ipsa autem labore, ab odit nulla rem nihil saepe esse dolores hic harum. Quas possimus, id fugit accusamus!</b-card-text>
              <template v-slot:footer>
                <router-link to="/" class="text-white block-link text-center">
                  <div class="block-link">Подать заявку на хакатон</div>
                </router-link>
              </template>
            </b-card>
          </div>
          <div class="d-flex flex-column w-50 ml-4">
            <h2 class="text-center">Готовое решение</h2>
            <b-card bg-variant="dark" text-variant="white" class="text-left border-0 rounded-0" footer-border-variant="white">
              <b-card-text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem id iste molestiae, ipsa autem labore, ab odit nulla rem nihil saepe esse dolores hic harum. Quas possimus, id fugit accusamus!</b-card-text>
              <template v-slot:footer>
                <router-link to="/" class="text-white block-link text-center">
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
        <div class="d-flex flex-row">
          <h2 class="text-left text-lg">Задания</h2>
          <h2 class="mt-auto mb-auto text-right ml-auto text-primary">03</h2>
        </div>
        <b-card-group deck class="mt-5 mb-5">
          <b-card bg-variant="dark" text-variant="white" class="text-left border-0 rounded-0" footer-border-variant="white">
            <b-card-text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem id iste molestiae, ipsa autem labore, ab odit nulla rem nihil saepe esse dolores hic harum. Quas possimus, id fugit accusamus!</b-card-text>
            <template v-slot:footer>
              <router-link to="/task" class="text-white block-link text-center">
                <div class="block-link">Узнать подробнее</div>
              </router-link>
            </template>
          </b-card>
          <b-card bg-variant="dark" text-variant="white" class="text-left border-0 rounded-0" footer-border-variant="white">
            <b-card-text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem id iste molestiae, ipsa autem labore, ab odit nulla rem nihil saepe esse dolores hic harum. Quas possimus, id fugit accusamus!</b-card-text>
            <template v-slot:footer>
              <router-link to="/task" class="text-white block-link text-center">
                <div class="block-link">Узнать подробнее</div>
              </router-link>
            </template>
          </b-card>
        </b-card-group>
        <b-card-group class="mt-4" deck>
          <b-card bg-variant="dark" text-variant="white" class="text-left border-0 rounded-0" footer-border-variant="white">
            <b-card-text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem id iste molestiae, ipsa autem labore, ab odit nulla rem nihil saepe esse dolores hic harum. Quas possimus, id fugit accusamus!</b-card-text>
            <template v-slot:footer>
              <router-link to="/task" class="text-white block-link text-center">
                <div class="block-link">Узнать подробнее</div>
              </router-link>
            </template>
          </b-card>
          <b-card bg-variant="dark" text-variant="white" class="text-left border-0 rounded-0" footer-border-variant="white">
            <b-card-text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem id iste molestiae, ipsa autem labore, ab odit nulla rem nihil saepe esse dolores hic harum. Quas possimus, id fugit accusamus!</b-card-text>
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
          <h2 class="m-auto text-lg text-primary font-weight-bold">1 100 000 ₽</h2>
        </div>
        <div class="text-center m-auto w-75">
          Команда, которая за 30 часов создаст лучшее решение по конкретной задаче, получит 100 000 рублей (net). Среди финалистов определят и супер-победителя. Он выиграет дополнительно 100 000 рублей (net) и 500 кредитов на пользование Amazon Web Services.
        </div>
        <b-button size="lg" variant="outline-primary" class="text-uppercase mt-4">Подать заявку</b-button>
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
            <div class="d-flex flex-row ml-5 mr-5 pl-5 pr-5">
              <div class="timing__stage d-flex flex-column text-left pl-2 mr-5">
                <h5 class="text-uppercase">
                  14 февраля 2020
                </h5>
                <span>Старт приёма заявок</span>
              </div>
              <div class="timing__stage m-auto d-flex flex-column text-left pl-2">
                <h5 class="text-uppercase">
                  23 февраля 2020
                </h5>
                <span>Объявление участников</span>
              </div>
              <div class="timing__stage ml-auto d-flex flex-column text-left pl-2">
                <h5 class="text-uppercase">
                  03-04 марта 2020
                </h5>
                <span>Проведение хакатона</span>
              </div>
            </div>
            <div class="timing__line">
              <div class="timing__line-progress" style="width: 10%"></div>
            </div>
            <div class="d-flex flex-row m-auto">
              <div class="timing__stage mr-5 d-flex flex-column justify-content-end text-left pl-2">
                <h5 class="text-uppercase">
                  21 февраля 2020
                </h5>
                <span>Окончание приёма заявок</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="container-fluid bg-dark text-white pt-4" id="jury">
      <div class="container-fluid w-75">
        <div class="d-flex flex-row">
          <h2 class="mt-auto mb-auto text-left text-primary">06</h2>
          <h2 class="text-right ml-auto text-lg">Жюри</h2>
        </div>
        <div class="container-fluid">
          <div class="d-flex flex-row justify-space-between mt-5 pb-5">
            <div class="d-flex flex-column">
              <div class="jury__member">
                <img src="https://placekitten.com/250/250" alt="Jury" class="rounded-circle">
                <div class="mt-3">
                  <h4 class="text-uppercase">Mr. Kitten</h4>
                  <span>Genius kitten jurist</span>
                </div>
              </div>
            </div>
            <div class="d-flex flex-column m-auto">
              <div class="jury__member">
                <img src="https://placekitten.com/250/250" alt="Jury" class="rounded-circle">
                <div class="mt-3">
                  <h4 class="text-uppercase">Mr. Kitten</h4>
                  <span>Genius kitten jurist</span>
                </div>
              </div>
            </div>
            <div class="d-flex flex-column m-auto">
              <div class="jury__member">
                <img src="https://placekitten.com/250/250" alt="Jury" class="rounded-circle">
                <div class="mt-3">
                  <h4 class="text-uppercase">Mr. Kitten</h4>
                  <span>Genius kitten jurist</span>
                </div>
              </div>
            </div>
            <div class="d-flex flex-column m-auto">
              <div class="jury__member">
                <img src="https://placekitten.com/250/250" alt="Jury" class="rounded-circle">
                <div class="mt-3">
                  <h4 class="text-uppercase">Mr. Kitten</h4>
                  <span>Genius kitten jurist</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="container-fluid bg-dark text-white pt-4" id="place">
      <div class="container-fluid w-75">
        <div class="d-flex flex-row">
          <div class="d-flex flex-column">
            <h2 class="text-lg text-left">Место</h2>
            <h3 class="text-uppercase text-right mt-2">Университет ИТМО</h3>
            <p class="text-right">Адрес: Кронверкский, 49</p>
          </div>
          <h2 class="mt-auto mb-auto ml-auto text-right text-primary">08</h2>
        </div>
        <div class="w-50 ml-auto mt-4 pb-5">
          <iframe class="rounded-circle" width="600" height="600" src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;coord=59.9573,30.3084&amp;q=%D0%A1%D0%9F%D0%B1%2C%20%D0%9A%D1%80%D0%BE%D0%BD%D0%B2%D0%B5%D1%80%D1%81%D0%BA%D0%B8%D0%B9%20%D0%BF%D1%80.%2C%2049+(%D0%A3%D0%BD%D0%B8%D0%B2%D0%B5%D1%80%D1%81%D0%B8%D1%82%D0%B5%D1%82%20%D0%98%D0%A2%D0%9C%D0%9E)&amp;ie=UTF8&amp;t=&amp;z=16&amp;iwloc=B&amp;output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
        </div>
      </div>
    </section>
    <section class="container-fluid bg-dark text-white pt-4 pb-4" id="partners">
      <div class="container-fluid w-75">
        <div class="d-flex flex-row">
          <h2 class="mt-auto mb-auto text-left text-primary">09</h2>
          <h2 class="text-right ml-auto text-lg">Патрнёры</h2>
        </div>
        <div class="d-flex flex-row mt-5 pb-4">
          <div class="d-flex flex-column m-auto">
            <img src="https://placekitten.com/300/200" alt="" class="m-auto">
            <h2 class="text-uppercase pt-2">Kitten partner</h2>
            <span>Kitten desc</span>
          </div>
          <div class="d-flex flex-column m-auto">
            <img src="https://placekitten.com/300/200" alt="" class="m-auto">
            <h2 class="text-uppercase pt-2">Kitten partner</h2>
            <span>Kitten desc</span>
          </div>
          <div class="d-flex flex-column m-auto">
            <img src="https://placekitten.com/300/200" alt="" class="m-auto">
            <h2 class="text-uppercase pt-2">Kitten partner</h2>
            <span>Kitten desc</span>
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
.content {
  flex: 1 0 auto;
}

.banner {
  margin: 18% auto;
}

.text-lg {
  font-size: 90px;
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

</style>
