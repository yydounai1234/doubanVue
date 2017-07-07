import Vue from 'vue'
import Router from 'vue-router'
import Audio from '../pages/audio/audio'
import Home from '../pages/home/home'
Vue.use(Router);

export default new Router({
  routes: [
  {
    path: '/',
    name: 'Home',
    component: Home,
    num:0
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/audio',
    name: 'Audio',
    component: Audio,
    children:[
      {path:"dianying",
        component: function (resolve) {
          require.ensure([],function(require){
            resolve(require('../components/dianying'))
          },"dianying")
        }
      },
      {path:"dianshi",
        component: function (resolve) {
          require.ensure([],function(require){
            resolve(require('../components/dianshi'))
          },"dianshi")
        }
      },
      {path:"dushu",
        component: function (resolve) {
          require.ensure([],function(require){
            resolve(require('../components/dushu'))
          },"dushu")
        }
      },
      {path:"tongcheng",
        component: function (resolve) {
          require.ensure([],function(require){
            resolve(require('../components/tongcheng'))
          },"tongcheng")
        }
      },
      {path:"yinyue",
        component: function (resolve) {
          require.ensure([],function(require){
            resolve(require('../components/yinyue'))
          },"yinyue")
        }
      }
    ]
  },
  {
    path: '/broadcast',
    name: 'Broadcast',
    component: function (resolve) {
      require.ensure(['../pages/broadcast/broadcast'],function(require){
        resolve(require('../pages/broadcast/broadcast'))
      },"broadcast")
    }
  },
  {
    path: '/group',
    name: 'Group',
    component: function (resolve) {
      require.ensure(['../pages/group/group'],function(require){
        resolve(require('../pages/group/group'))
      },"group")
    }
  },
  {
    path: '/mine',
    name: 'Mine',
    component: function (resolve) {
        require.ensure(['../pages/mine/mine'],function(require){
            resolve(require('../pages/mine/mine'))
        },"mine")
    }
  }
  ]
})
