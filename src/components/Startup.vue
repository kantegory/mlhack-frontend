<template>
  <div id="app" class="bg-dark text-white">
    <div class="container-fluid w-75 text-left">
      <form v-on:submit.prevent="newStartup" class="m-5 p-4 border border-white">
        <div class="d-flex flex-row">
          <h1 class="font-weight-bold">Анкета проекта</h1>
          <span class="text-muted ml-auto">Все поля, отмеченные <span class="required-mark text-danger">*</span>, обязательны к заполнению.</span>
        </div>
        <div class="d-flex card-container mt-2">
          <div class="d-flex flex-column form-responsive mr-2 justify-content-end">
            <div class="form-group">
              <label for="teamName" class="label">Название команды / компании <span class="required-mark text-danger">*</span></label>
              <input type="text" id="teamName" v-model="teamName" class="form-control bg-dark text-white" placeholder="Название..." required>
            </div>
            <div class="form-group">
              <label for="teamSite" class="label">Сайт</label>
              <input type="text" id="teamSite" v-model="teamSite" class="form-control bg-dark text-white" placeholder="https://">
            </div>
            <div class="form-group">
              <label for="teamStage" class="label">Стадия проекта</label>
              <select id="teamStage" v-model="teamStage" class="form-control bg-dark text-white">
                <option value="0">Есть идея</option>
                <option value="1">Есть прототип (без доходов)</option>
                <option value="2">Есть прототип (с доходами)</option>
                <option value="3">Есть готовый проект</option>
              </select>
            </div>
            <div class="form-group">
              <label for="teamAbout" class="label">Стадия проекта</label>
              <textarea name="" id="teamAbout" v-model="teamAbout" rows="10" class="form-control bg-dark text-white" maxlength="400" placeholder="Пожалуйста, ограничьтесь 400 символами"></textarea>
            </div>
            <div class="form-group">
              <label for="taskAbout" class="label">Описание решения</label>
              <textarea name="" id="taskAbout" v-model="taskAbout" rows="12" class="form-control bg-dark text-white" maxlength="600" placeholder="Пожалуйста, ограничьтесь 600 символами"></textarea>
            </div>
          </div>
          <div class="d-flex flex-column form-responsive ml-2 justify-content-start">
            <div class="form-group">
              <label for="teamSpecs" class="label">Ипользуемые технологии</label>
              <textarea name="" id="teamSpecs" v-model="teamSpecs" rows="5" class="form-control bg-dark text-white" maxlength="400" placeholder="Пожалуйста, ограничьтесь 400 символами"></textarea>
            </div>
            <div class="form-group">
              <label for="teamAddition" class="label">Дополнительная информация</label>
              <textarea name="" id="teamAddition" v-model="teamAddition" rows="9" class="form-control bg-dark text-white" maxlength="600" placeholder="Пожалуйста, ограничьтесь 600 символами"></textarea>
            </div>
            <div class="form-group">
              <label for="teamPresentation" class="label">Презентация</label>
              <input type="text" id="teamPresentation" v-model="teamPresentation" class="form-control bg-dark text-white" placeholder="https://">
            </div>
            <div class="form-group">
              <label for="teamCountry" class="label">Страна, город</label>
              <input type="text" id="teamCountry" v-model="teamCountry" class="form-control bg-dark text-white" placeholder="Россия, Санкт-Петербурш">
            </div>
            <div class="form-group">
              <label for="teamLead" class="label">Контактное лицо <span class="required-mark text-danger">*</span></label>
              <input type="text" id="teamLead" v-model="teamLead" class="form-control bg-dark text-white" placeholder="John Doe" required>
            </div>
            <div class="form-group">
              <label for="teamEmail" class="label">E-mail <span class="required-mark text-danger">*</span></label>
              <input type="email" id="teamEmail" v-model="teamEmail" class="form-control bg-dark text-white" placeholder="team@mail.com" required>
            </div>
            <div class="form-group">
              <label for="teamPhone" class="label">Номер телефона <span class="required-mark text-danger">*</span></label>
              <input type="text" id="teamPhone" v-model="teamPhone" class="form-control bg-dark text-white" placeholder="+79999999999" required>
            </div>
          </div>
        </div>
        <div class="d-flex justify-content-center mt-4">
          <button type="submit" class="btn btn-lg btn-primary">Отправить заявку</button>
        </div>
      </form>
    </div>
  </div>
</template>
<style>
.label {
  font-size: 18pt;
  font-weight: bold;
}

.form-responsive {
  width: 50%;
}

@media screen and (max-width: 1025px) {
  .form-responsive {
    width: 100%;
  }
}

</style>
<script>
export default {
  name: 'Startup',
  data () {
    return {
      teamName: '',
      teamSite: '',
      teamStage: '',
      teamAbout: '',
      taskAbout: '',
      teamSpecs: '',
      teamAddition: '',
      teamPresentation: '',
      teamCountry: '',
      teamLead: '',
      teamEmail: '',
      teamPhone: ''
    }
  },
  methods: {
    newStartup (e) {
      e.preventDefault()
      const startup = {
        teamName: this.teamName,
        teamSite: this.teamSite,
        teamStage: this.teamStage,
        teamAbout: this.teamAbout,
        taskAbout: this.taskAbout,
        teamSpecs: this.teamSpecs,
        teamAddition: this.teamAddition,
        teamPresentation: this.teamPresentation,
        teamCountry: this.teamCountry,
        teamLead: this.teamLead,
        teamEmail: this.teamEmail,
        teamPhone: this.teamPhone
      }

      console.log(JSON.stringify(startup))

      let startupJSON = JSON.stringify(startup)

      let url = 'http://194.67.91.81:8081/new_startup?data='
      url = url + startupJSON

      var xhr = new XMLHttpRequest()

      xhr.open('POST', url, true)

      xhr.send()

      // Reset
      this.resetAll()
    },
    resetAll () {
      this.teamName = ''
      this.teamSite = ''
      this.teamStage = ''
      this.teamAbout = ''
      this.taskAbout = ''
      this.teamSpecs = ''
      this.teamAddition = ''
      this.teamPresentation = ''
      this.teamCountry = ''
      this.teamLead = ''
      this.teamEmail = ''
      this.teamPhone = ''
    }
  }
}

</script>
