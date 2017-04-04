import Vue from 'vue';
import VueClipboards from 'vue-clipboards';
import VueAnalytics from 'vue-analytics';

import App from './App';

require('./stylesheets/app.scss');

Vue.use(VueClipboards);
Vue.use(VueAnalytics, {
  id: 'UA-49604576-2',
  autoTracking: false,
  // debug: {
  //   enabled: true,
  //   trace: false,
  //   sendHitTask: true,
  // },
});

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
});

/* eslint-disable no-console */
/* eslint-disable no-useless-escape */

console.log('uigradients.com - Beautiful color gradients for design and code');
console.log('----------------------------------------------------------------');
console.log('Have a side project you want to collab on? Get in touch!');
console.log('I am at - https://twitter.com/_ighosh');
