import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'bootstrap/dist/css/bootstrap.css'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle'

import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import { getCookie, setCookie, generateRandomUserId } from './utils/cookies';

library.add(faFacebookF, faInstagram);

//vorhin ohne fa
//createApp(App).use(router).use(bootstrap).mount('#app')


//now
const app = createApp(App);

//Cookie management
const COOKIE_NAME = 'userId';
let userId = getCookie(COOKIE_NAME);

if (!userId) {
  userId = generateRandomUserId();
  setCookie(COOKIE_NAME, userId, 365); // Setze Cookie für 1 Jahr
}

// Set global property
app.config.globalProperties.$userId = 1501233919; // Example User ID
//app.config.globalProperties.$userId = userId;

app.use(router);
app.use(bootstrap);
app.component('font-awesome-icon', FontAwesomeIcon);
app.mount('#app');
