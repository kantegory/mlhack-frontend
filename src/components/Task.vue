<template>
  <div id="app">
    <div class="container-fluid w-75 text-black content mt-4">
      <div class="ml-auto text-right d-flex flex-column">
        <h2 class="text-lg">Задача № {{ taskNumber }}</h2>
        <router-link to='/#tasks'>Смотреть остальные задачи</router-link>
      </div>
      <div class="task__heading mt-4">
        <h2 class="text-left">{{ taskHeading }}</h2>
        <div class="d-flex flex-row">
          <span class="tag" :key="tag" v-for="tag in tags">{{ tag }}</span>
        </div>
      </div>
      <div class="d-flex flex-row mt-2">
        <div class="d-flex flex-column w-50">
          <p class="partner font-weight-bold text-left mt-4">О партнёре</p>
          <div class="d-flex flex-column text-left">
            {{ aboutPartner }}
          </div>
          <p class="partner font-weight-bold text-left mt-4">Задача</p>
          <div class="d-flex flex-column text-left">
            {{ aboutTask }}
          </div>
          <p class="partner font-weight-bold text-left mt-4">Приз</p>
          <div class="d-flex flex-column text-left">
            {{ prize }}
          </div>
        </div>
        <div class="d-flex flex-column w-25 ml-auto">
          <p class="partner font-weight-bold text-left mt-4">Менторы задачи</p>
          <div class="d-flex flex-row">
            <div :key="mentor" class="d-flex flex-column m-auto" v-for="mentor in mentors">
              <img :src="mentor.image" alt="Mentor" class="rounded-circle">
              <div class="mt-3">
                <h4 class="text-uppercase">{{ mentor.name }}</h4>
                <span>{{ mentor.desc }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-4">
        <b-button size="lg" variant="outline-primary" class="text-uppercase">Подать заявку</b-button>
        <b-button size="lg" variant="outline-primary" class="text-uppercase">Предложить готовое решение</b-button>
      </div>
    </div>
  </div>
</template>
<style>
.content {
  min-height: 100vh;
}

.text-lg {
  font-size: 90px;
}

.text-black {
  color: #070707;
}

.tag {
  margin-right: 5px;
  font-size: 12pt;
}

.tag:last-child {
  margin-right: 0;
}

.tag::before {
  content: '#';
}

.partner {
  font-size: 16pt;
}

</style>
<script>
export default {
  name: 'Task',
  data () {
    return {
      'taskNumber': 1,
      'taskHeading': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      'tags': ['tag1', 'tag2'],
      'aboutPartner': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam magnam sunt quod sit corrupti consequatur dicta voluptatem, nulla magni optio quasi non ipsum, a, eveniet commodi molestiae alias, deserunt consequuntur.',
      'aboutTask': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit cupiditate itaque nulla nesciunt expedita dignissimos quisquam quis maiores illo, odio autem vel architecto quos adipisci nam non, dolorem est eaque.',
      'prize': '100 000 ₽',
      'mentors': [{ 'name': 'Mr. Kitten', 'image': 'https://placekitten.com/150/150', 'desc': 'Pretty kitten' }, { 'name': 'Mr. Kitten', 'image': 'https://placekitten.com/150/150', 'desc': 'Pretty kitten' }]
    }
  }
}

</script>
