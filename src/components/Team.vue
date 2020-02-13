<template>
  <div id="app" class="bg-dark">
    <div class="container-fluid w-75 text-white text-left">
      <form onsubmit="onSubmit" class="m-5 p-4 border border-white">
        <div class="form-group">
          <div class="d-flex flex-row">
            <label for="teamName" class="label">Название комады <span class="required-mark text-danger">*</span></label>
            <span class="text-muted ml-auto">Все поля, отмеченные <span class="required-mark text-danger">*</span>, обязательны к заполнению.</span>
          </div>
          <input type="text" id="teamName" class="form-control bg-dark text-white" placeholder="Название..." required>
        </div>
        <div class="d-flex flex-row w-100">
          <div class="d-flex flex-column w-50 p-4 border border-white mr-2">
            <h3 class="text-uppercase text-primary font-weight-bold">Капитан</h3>
            <div class="form-group">
              <label for="captainName" class="label">Имя <span class="required-mark text-danger">*</span></label>
              <input type="text" id="captainName" class="form-control bg-dark text-white" required placeholder="Имя...">
            </div>
            <div class="form-group">
              <label for="captainEmail" class="label">E-mail <span class="required-mark text-danger">*</span></label>
              <input type="email" id="captainEmail" class="form-control bg-dark text-white" required placeholder="E-mail...">
            </div>
            <div class="form-group">
              <label for="captainPhone" class="label">Номер телефона <span class="required-mark text-danger">*</span> </label>
              <input type="phone" id="captainPhone" class="form-control bg-dark text-white" required placeholder="Номер телефона...">
            </div>
            <div class="form-group">
              <label for="captainAbout" class="label">О себе <span class="required-mark text-danger">*</span></label>
              <textarea type="text" id="captainAbout" class="form-control bg-dark text-white" required maxlength="300" placeholder="Ключевые навыки..."></textarea>
            </div>
          </div>
          <div class="d-flex flex-column w-50 p-4 border border-white ml-2">
            <h3 class="text-uppercase text-primary font-weight-bold">Участник</h3>
            <div class="form-group">
              <label for="memberName1" class="label">Имя <span class="required-mark text-danger">*</span></label>
              <input type="text" id="memberName1" class="form-control bg-dark text-white" required placeholder="Имя...">
            </div>
            <div class="form-group">
              <label for="memberEmail1" class="label">E-mail <span class="required-mark text-danger">*</span></label>
              <input type="email" id="memberEmail1" class="form-control bg-dark text-white" required placeholder="E-mail...">
            </div>
            <div class="form-group">
              <label for="memberPhone1" class="label">Номер телефона <span class="required-mark text-danger">*</span> </label>
              <input type="phone" id="memberPhone1" class="form-control bg-dark text-white" required placeholder="Номер телефона...">
            </div>
            <div class="form-group">
              <label for="memberAbout1" class="label">О себе <span class="required-mark text-danger">*</span></label>
              <textarea type="text" id="memberAbout2" class="form-control bg-dark text-white" required maxlength="300" placeholder="Ключевые навыки..."></textarea>
            </div>
          </div>
        </div>
        <div class="d-flex flex-row w-100 mt-4">
          <div class="d-flex flex-column w-50 p-4 border border-white mr-2">
            <h3 class="text-uppercase text-primary font-weight-bold">Участник</h3>
            <div class="form-group">
              <label for="memberName2" class="label">Имя <span class="required-mark text-danger">*</span></label>
              <input type="text" id="memberName2" class="form-control bg-dark text-white" required placeholder="Имя...">
            </div>
            <div class="form-group">
              <label for="memberEmail2" class="label">E-mail <span class="required-mark text-danger">*</span></label>
              <input type="email" id="memberEmail2" class="form-control bg-dark text-white" required placeholder="E-mail...">
            </div>
            <div class="form-group">
              <label for="memberPhone2" class="label">Номер телефона <span class="required-mark text-danger">*</span> </label>
              <input type="phone" id="memberPhone2" class="form-control bg-dark text-white" required placeholder="Номер телефона...">
            </div>
            <div class="form-group">
              <label for="memberAbout2" class="label">О себе <span class="required-mark text-danger">*</span></label>
              <textarea type="text" id="memberAbout2" class="form-control bg-dark text-white" required maxlength="300" placeholder="Ключевые навыки..."></textarea>
            </div>
          </div>
          <div class="d-flex flex-column w-50 p-4 border border-white ml-2">
            <h3 class="text-uppercase text-primary font-weight-bold">Участник</h3>
            <div class="form-group">
              <label for="memberName3" class="label">Имя <span class="required-mark text-danger">*</span></label>
              <input type="text" id="memberName3" class="form-control bg-dark text-white" required placeholder="Имя...">
            </div>
            <div class="form-group">
              <label for="memberEmail3" class="label">E-mail <span class="required-mark text-danger">*</span></label>
              <input type="email" id="memberEmail3" class="form-control bg-dark text-white" required placeholder="E-mail...">
            </div>
            <div class="form-group">
              <label for="memberPhone3" class="label">Номер телефона <span class="required-mark text-danger">*</span> </label>
              <input type="phone" id="memberPhone3" class="form-control bg-dark text-white" required placeholder="Номер телефона...">
            </div>
            <div class="form-group">
              <label for="memberAbout3" class="label">О себе <span class="required-mark text-danger">*</span></label>
              <textarea type="text" id="memberAbout3" class="form-control bg-dark text-white" required maxlength="300" placeholder="Ключевые навыки..."></textarea>
            </div>
          </div>
        </div>
        <div class="d-flex flex-column p-4 border border-white w-100 mt-4">
          <div class="form-group">
            <label for="teamCase" class="label">Выберите задание <span class="required-mark text-danger">*</span></label>
            <select name="" id="" class="form-control bg-dark text-white" required>
              <option selected disabled class="text-muted">Выберите</option>
              <option :key="task" v-for="task in tasks" :value="task.value">{{ task.name }}</option>
            </select>
          </div>
          <div class="form-group">
            <label for="teamSolution" class="label">Почему мы должны позвать именно вас? <span class="required-mark text-danger">*</span></label>
            <textarea type="text" id="teamSolution" class="form-control bg-dark text-white" required maxlength="800" placeholder="Предложите решение..."></textarea>
          </div>
        </div>
        <div class="mt-4 d-flex justify-content-center">
          <button class="btn-lg btn-primary" type="submit">Отправить заявку</button>
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

</style>
<script>
export default {
  name: 'Team',
  data () {
    return {
      'tasks': [{
        'name': 'name1',
        'value': 'value1'
      }]
    }
  },
  methods: {
    onSubmit (e) {
      e.preventDefault()
      let formJSON = JSON.stringify(this.form)
      console.log(formJSON)
    }
  }
}

</script>
