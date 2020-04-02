import Vue from 'vue'
import Router from 'vue-router'
import message from "../components/message/message";
import friends from "../components/friends/friends";
import discover from "../components/discover/discover";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/message'
    },
    {
      path: '/message',
      name: 'message',
      component: message
    },
    {
      path: '/friends',
      name: 'friends',
      component: friends
    },
    {
      path: '/discover',
      name: 'discover',
      component: discover
    }
  ]
})
