<template>
  <div id="app">
    <div class="container-fluid w-75 text-black content mt-4">
      <div class="ml-auto text-right d-flex flex-column">
        <h2 class="text-lg">Задача № {{ taskNumber }}</h2>
      </div>
      <div class="task__heading mt-4">
        <!-- <h2 class="text-left">{{ taskHeading }}</h2> -->
        <!-- <div class="d-flex flex-row"> -->
          <!-- <span class="tag" :key="tag" v-for="tag in tags">{{ tag }}</span> -->
        <!-- </div> -->
      </div>
      <div class="d-flex flex-row mt-5 justify-content-center">
        <h2 class="text-center">Подробная информация появится первого марта.</h2>
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
