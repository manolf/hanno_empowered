import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'bootstrap/dist/css/bootstrap.css'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle'

import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faFacebookF, faInstagram);

//vorhin ohne fa
//createApp(App).use(router).use(bootstrap).mount('#app')


//now
const app = createApp(App);
app.use(router);
app.use(bootstrap);
app.component('font-awesome-icon', FontAwesomeIcon);
app.mount('#app');
