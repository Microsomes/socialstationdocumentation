/*
Author Muhammed T Javed
- Alpha 1 of Social station.
Social station is an open souce modular social media platform.
*/

import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import VueTyperPlugin from 'vue-typer'
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue);
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(VueTyperPlugin)
 


// import './assets/firebase';
// //import the firebase user library
// import VueFire from 'vuefire';
// // explicit installation required in module environments
// Vue.use(VueFire);



import './assets/firestore';
import VueFirestore from 'vue-firestore'
import Firebase from 'firebase'
import {store} from './assets/store/store';
//import vuex store centralized state manager
require('firebase/firestore')
Vue.use(VueFirestore)
//import the firestore library above

 
Vue.filter('capitalize', function (value) {
  if (!value) return ''
  value = value.toString()
  return value.charAt(0).toUpperCase() + value.slice(1)
})


 
Vue.use(VueRouter);

import Vuetify from 'vuetify'
 
Vue.use(Vuetify);

import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader


import staticRules from './assets/Static/rules.vue';
import staticHelp from './assets/Static/help.vue';
//import static pages above

import dynoSignInUp from './assets/Dynamic/_mainDirectives/signinandup.vue';
import dynoMainFeed from './assets/Dynamic/codeModules/MainFeed.vue';
import dynoAnimationLiner from './assets/Dynamic/ModularComponents/topNavAnimationLiner.vue';
import dynoCreate from './assets/Dynamic/codeModules/create.vue';
import dynoCreateRandomFact from './assets/Dynamic/createPages/createRandomFact.vue';
import dynoHome from './assets/Dynamic/_mainDirectives/home.vue';
import dynoEntry from './assets/Dynamic/_mainDirectives/entry.vue';
//import dynamic pages above

import dynoNews from './assets/Dynamic/app/News/main.vue';
//import news dyno

import dynoModuler from './assets/Dynamic/codeModules/moduler.vue';
import dynoCryptoFolio from './assets/Dynamic/app/CryptoFolio/main.vue'
//cryptofolio module impoted
import dynamicComponent from './assets/Dynamic/codeModules/randomFact.vue';
//import dynamic components


//import core pages
import myProfilePage from './assets/Dynamic/_mainDirectives/myprofile/main.vue';

Vue.component("randomFact",dynamicComponent);
Vue.component("animLiner",dynoAnimationLiner);
//registering vue components above


//import docs module
import introduction from './assets/Dynamic/_mainDirectives/docsComponents/introduction';
import feeds from './assets/Dynamic/_mainDirectives/docsComponents/feeds';
import metric from './assets/Dynamic/_mainDirectives/docsComponents/metric';
import modules from './assets/Dynamic/_mainDirectives/docsComponents/modules';
import termsofuse from './assets/Dynamic/_mainDirectives/docsComponents/termsofuse';
import privacystatement from './assets/Dynamic/_mainDirectives/docsComponents/privacystatement';
import licence from './assets/Dynamic/_mainDirectives/docsComponents/licence';
import ico from './assets/Dynamic/_mainDirectives/docsComponents/ico';

const routes=[
 
  {
    path:'*',
    component:dynoHome
  },
 
  {
    path:'/',
    component:dynoHome,
    children:[
      {
        path:'intro',
        component:introduction
      },{
        path:'feeds',
        component:feeds
      },
      {
        path:'modules',
        component:modules
      },
      {
        path:'tos',
        component:termsofuse
      },
      {
        path:'licence',
        component:licence
      },
      {
        path:'ico',
        component:ico
      },
      {
        path:'metric',
        component:metric
      },
      {
        path:'privacy',
        component:privacystatement
      }
    ]
  } 
    
  

]

//create a router instance
const router= new VueRouter({
  routes
})


 
new Vue({
  el: '#app',
  router,
  store,
   render: h => h(App)
})
