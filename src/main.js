import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import PrimeVue from 'primevue/config';
import 'primeflex/primeflex.css';

import "primevue/resources/themes/lara-light-teal/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";

import Button from "primevue/button";
import Carousel from 'primevue/carousel';
import Card from 'primevue/card';

const app = createApp(App)
app.use(store)
app.use(router)

app.use(PrimeVue)
app.component("Button", Button)
app.component("Carousel", Carousel)
app.component("Card", Card)

app.mount('#app')

