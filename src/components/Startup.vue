<template>
  <div id="app">
    <div class="container-fluid w-75">
      <b-form @submit="onSubmit" class="w-100 border border-white p-2">
        <b-form-group label="Название команды" label-for="team-name">
          <b-form-input id="team-name" v-model="form.teamName" type="text" required placeholder="Введите название команды"></b-form-input>
        </b-form-group>
      </b-form>
    </div>
  </div>
</template>
<style></style>
<script>
export default {
  name: 'Startup',
  data () {
    return {}
  }
}

</script>
