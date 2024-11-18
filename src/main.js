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
//app.config.globalProperties.$userId = 12312312; // Example User ID
app.config.globalProperties.$userId = userId;

//global property for backend link
const isProduction = process.env.NODE_ENV === 'production';
const hostname = window.location.hostname;
let backendLink;

if (isProduction) {
  // Handle production cases
  if (hostname === 'test.fitmithanno.fun') {
    backendLink = 'https://test.fitmithanno.fun/api';
  } else if (hostname === 'www.fitmithanno.fun') {
    backendLink = 'https://www.fitmithanno.fun/api';
  } else {
    // Default to a fallback URL if the subdomain is unexpected
    backendLink = 'https://www.fitmithanno.fun/api';
  }
} else {
  // For development, always use localhost API
  backendLink = 'http://localhost/api';
}

app.config.globalProperties.$backendlink = backendLink;



app.use(router);
app.use(bootstrap);
app.component('font-awesome-icon', FontAwesomeIcon);
app.mount('#app');
