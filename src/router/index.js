import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Task from '@/components/Task'
import Team from '@/components/Team'
import Startup from '@/components/Startup'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/task',
      name: 'Task',
      component: Task
    },
    {
      path: '/team',
      name: 'Team',
      component: Team
    },
    {
      path: '/startup',
      name: 'Startup',
      component: Startup
    }
  ]
})
