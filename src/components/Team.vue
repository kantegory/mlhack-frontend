<template>
  <div id="app" class="bg-dark">
    <div class="container-fluid w-75 text-white text-left">
      <form @submit="newTeam" class="m-5 p-4 border border-white">
        <div class="form-group">
          <div class="d-flex flex-row">
            <label for="teamName" class="label">Название комады <span class="required-mark text-danger">*</span></label>
            <span class="text-muted ml-auto">Все поля, отмеченные <span class="required-mark text-danger">*</span>, обязательны к заполнению.</span>
          </div>
          <input type="text" id="teamName" v-model="teamName" class="form-control bg-dark text-white" placeholder="Название..." required>
        </div>
        <div class="d-flex card-container w-100">
          <div class="d-flex flex-column text-container p-4 border border-white mr-2">
            <h3 class="text-uppercase text-primary font-weight-bold">Капитан</h3>
            <div class="form-group">
              <label for="captainName" class="label">Имя <span class="required-mark text-danger">*</span></label>
              <input type="text" id="captainName" v-model="captain.captainName" class="form-control bg-dark text-white" required placeholder="Имя...">
            </div>
            <div class="form-group">
              <label for="captainEmail" class="label">E-mail <span class="required-mark text-danger">*</span></label>
              <input type="email" id="captainEmail" v-model="captain.captainEmail" class="form-control bg-dark text-white" required placeholder="E-mail...">
            </div>
            <div class="form-group">
              <label for="captainPhone" class="label">Номер телефона <span class="required-mark text-danger">*</span> </label>
              <input type="phone" id="captainPhone" v-model="captain.captainPhone" class="form-control bg-dark text-white" required placeholder="Номер телефона...">
            </div>
            <div class="form-group">
              <label for="captainAbout" class="label">О себе <span class="required-mark text-danger">*</span></label>
              <textarea type="text" id="captainAbout" v-model="captain.captainAbout" class="form-control bg-dark text-white" required maxlength="300" placeholder="Ключевые навыки..."></textarea>
            </div>
          </div>
          <div class="d-flex flex-column text-container p-4 border border-white ml-2">
            <h3 class="text-uppercase text-primary font-weight-bold">Участник</h3>
            <div class="form-group">
              <label for="memberName1" class="label">Имя <span class="required-mark text-danger">*</span></label>
              <input type="text" id="memberName1" v-model="members.memberName1" class="form-control bg-dark text-white" required placeholder="Имя...">
            </div>
            <div class="form-group">
              <label for="memberEmail1" class="label">E-mail <span class="required-mark text-danger">*</span></label>
              <input type="email" id="memberEmail1" v-model="members.memberEmail1" class="form-control bg-dark text-white" required placeholder="E-mail...">
            </div>
            <div class="form-group">
              <label for="memberPhone1" class="label">Номер телефона <span class="required-mark text-danger">*</span> </label>
              <input type="phone" id="memberPhone1" v-model="members.memberPhone1" class="form-control bg-dark text-white" required placeholder="Номер телефона...">
            </div>
            <div class="form-group">
              <label for="memberAbout1" class="label">О себе <span class="required-mark text-danger">*</span></label>
              <textarea type="text" id="memberAbout1" v-model="members.memberAbout1" class="form-control bg-dark text-white" required maxlength="300" placeholder="Ключевые навыки..."></textarea>
            </div>
          </div>
        </div>
        <div class="d-flex card-container w-100 mt-4">
          <div class="d-flex flex-column text-container p-4 border border-white mr-2">
            <h3 class="text-uppercase text-primary font-weight-bold">Участник</h3>
            <div class="form-group">
              <label for="memberName2" class="label">Имя <span class="required-mark text-danger">*</span></label>
              <input type="text" id="memberName2" v-model="members.memberName2" class="form-control bg-dark text-white" required placeholder="Имя...">
            </div>
            <div class="form-group">
              <label for="memberEmail2" class="label">E-mail <span class="required-mark text-danger">*</span></label>
              <input type="email" id="memberEmail2" v-model="members.memberEmail2" class="form-control bg-dark text-white" required placeholder="E-mail...">
            </div>
            <div class="form-group">
              <label for="memberPhone2" class="label">Номер телефона <span class="required-mark text-danger">*</span> </label>
              <input type="phone" id="memberPhone2" v-model="members.memberPhone2" class="form-control bg-dark text-white" required placeholder="Номер телефона...">
            </div>
            <div class="form-group">
              <label for="memberAbout2" class="label">О себе <span class="required-mark text-danger">*</span></label>
              <textarea type="text" id="memberAbout2" v-model="members.memberAbout2" class="form-control bg-dark text-white" required maxlength="300" placeholder="Ключевые навыки..."></textarea>
            </div>
          </div>
          <div class="d-flex flex-column text-container p-4 border border-white ml-2">
            <h3 class="text-uppercase text-primary font-weight-bold">Участник</h3>
            <div class="form-group">
              <label for="memberName3" class="label">Имя <span class="required-mark text-danger">*</span></label>
              <input type="text" id="memberName3" v-model="members.memberName3" class="form-control bg-dark text-white" required placeholder="Имя...">
            </div>
            <div class="form-group">
              <label for="memberEmail3" class="label">E-mail <span class="required-mark text-danger">*</span></label>
              <input type="email" id="memberEmail3" v-model="members.memberEmail3" class="form-control bg-dark text-white" required placeholder="E-mail...">
            </div>
            <div class="form-group">
              <label for="memberPhone3" class="label">Номер телефона <span class="required-mark text-danger">*</span> </label>
              <input type="phone" id="memberPhone3" v-model="members.memberPhone3" class="form-control bg-dark text-white" required placeholder="Номер телефона...">
            </div>
            <div class="form-group">
              <label for="memberAbout3" class="label">О себе <span class="required-mark text-danger">*</span></label>
              <textarea type="text" id="memberAbout3" v-model="members.memberAbout3" class="form-control bg-dark text-white" required maxlength="300" placeholder="Ключевые навыки..."></textarea>
            </div>
          </div>
        </div>
        <div class="d-flex flex-column p-4 border border-white w-100 mt-4">
          <div class="form-group">
            <label for="teamCase" class="label">Выберите задание <span class="required-mark text-danger">*</span></label>
            <select name="" id="" v-model="teamCase" class="form-control bg-dark text-white" required>
              <option selected disabled class="text-muted">Выберите</option>
              <option :key="task" v-for="task in tasks" :value="task.value">{{ task.name }}</option>
            </select>
          </div>
          <div class="form-group">
            <label for="teamSolution" class="label">Почему мы должны позвать именно вас? <span class="required-mark text-danger">*</span></label>
            <textarea type="text" id="teamSolution" v-model="teamSolution" class="form-control bg-dark text-white" required maxlength="800" placeholder="Предложите решение..."></textarea>
          </div>
        </div>
        <div class="mt-4 d-flex justify-content-center">
          <b-button size="lg" variant="primary" class="btn btn-primary" type="submit">Отправить заявку</b-button>
        </div>
      </form>
    </div>
    <b-modal id="success" title="Заявка отправлена" class="bg-dark text-white" hide-footer>
      <p>Заявка успешно отправлена!</p>
      <router-link class="btn btn-primary" to="/">Ок</router-link>
    </b-modal>
  </div>
</template>
<style>
.label {
  font-size: 18pt;
  font-weight: bold;
}

</style>
<script>
export default {
  name: 'Team',
  data () {
    return {
      'tasks': [{
        'name': 'Обработка голоса',
        'value': '1'
      },
      {
        'name': 'Sing like Pro',
        'value': '2'
      },
      {
        'name': 'Создать фото по заданной теме',
        'value': '3'
      },
      {
        'name': 'Traffic optimization',
        'value': '4'
      },
      {
        'name': 'TikTok for...',
        'value': '5'
      },
      {
        'name': 'Кальякулятор калорий',
        'value': '6'
      },
      {
        'name': 'Lie detector',
        'value': '7'
      }],

      teamName: '',
      teamCase: '',
      teamSolution: '',

      captain: {
        captainName: '',
        captainAbout: '',
        captainEmail: '',
        captainPhone: ''
      },

      members: {
        memberName1: '',
        memberAbout1: '',
        memberEmail1: '',
        memberPhone1: '',
        memberName2: '',
        memberAbout2: '',
        memberEmail2: '',
        memberPhone2: '',
        memberName3: '',
        memberAbout3: '',
        memberEmail3: '',
        memberPhone3: ''
      }
    }
  },
  methods: {
    newTeam (e) {
      e.preventDefault()

      if (this.teamName === '') {
        return
      }
      const team = {
        teamName: this.teamName,
        teamCase: this.teamCase,
        teamSolution: this.teamSolution,
        captain: this.captain,
        members: this.members
      }

      let teamJSON = JSON.stringify(team)

      let url = 'http://127.0.0.1:8081/new_team?data='
      url = url + teamJSON

      var xhr = new XMLHttpRequest()

      xhr.open('POST', url, true)

      xhr.send()

      this.$bvModal.show('success')

      // Reset
      this.resetAll()
    },

    resetAll () {
      this.teamName = ''
      this.teamCase = ''
      this.teamSolution = ''

      this.captain = {
        captainName: '',
        captainAbout: '',
        captainEmail: '',
        captainPhone: ''
      }

      this.members = [{
        memberName1: '',
        memberAbout1: '',
        memberEmail1: '',
        memberPhone1: ''
      },
      {
        memberName2: '',
        memberAbout2: '',
        memberEmail2: '',
        memberPhone2: ''
      },
      {
        memberName3: '',
        memberAbout3: '',
        memberEmail3: '',
        memberPhone3: ''
      }
      ]
    }
  }
}

</script>
