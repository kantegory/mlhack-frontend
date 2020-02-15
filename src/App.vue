<template>
  <div id="app">
    <b-navbar class="header border-bottom border-secondary" toggleable="lg" type="dark" variant="dark" sticky>
      <div class="container-fluid w-75">
        <b-navbar-brand>
          <router-link to="/">
            <img src="./assets/logo.png" class="logo" alt="Logo">
          </router-link>
        </b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-item href="/#format">Формат</b-nav-item>
            <b-nav-item href="/#tasks">Задания</b-nav-item>
            <b-nav-item href="/#prize">Призовой фонд</b-nav-item>
            <b-nav-item href="/#timing">Тайминг</b-nav-item>
            <b-nav-item href="/#jury">Жюри</b-nav-item>
            <b-nav-item href="/#program">Программа</b-nav-item>
            <b-nav-item href="/#place">Место</b-nav-item>
            <b-nav-item href="/#partners">Партнёры</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </div>
    </b-navbar>
    <router-view />
    <footer class="jumbotron-fluid bg-dark text-white border-top border-secondary">
      <div class="container-fluid w-75 pt-3 pb-3">
        <div class="d-flex flex-row">
          <ul class="list-unstyled text-left w-50 mb-auto mt-auto">
            <li>Контакты: <a href="mailto:" class="text-primary">info@mail.com</a></li>
            <li>Телеграм-чат: <a href="tg://" class="text-primary">@mlhack</a></li>
            <li><a href="#" class="text-primary">Положение об участии в хакатоне</a></li>
          </ul>
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
export default {
  name: 'App'
}

</script>
<style>
html {
  scroll-behavior: smooth;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
  /*height: 100vh;*/
  display: flex;
  flex-direction: column;
  min-height: 100%;
}

.logo {
  width: 100%;
  max-width: 100px;
}

footer {
  flex: 0 0 auto;
}

.card-container {
  flex-direction: row;
  justify-content: space-between;
}

.text-container {
  width: 100%;
}

@media screen and (max-width: 1025px) {
  .card-container {
    flex-direction: column;
  }

  .text-container {
    width: 50%;
  }
}

</style>
