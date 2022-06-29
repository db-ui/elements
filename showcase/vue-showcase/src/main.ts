import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHashHistory } from 'vue-router';

import '@db-ui/core/dist/css/enterprise/db-ui-core.vars.css';

import Form from './components/form/Form.vue';
import Tables from './components/tables/Tables.vue';
import TabBar from './components/tab-bar/TabBar.vue';
import OtherElements from './components/other-elements/OtherElements.vue';
import OtherComponents from './components/other-components/OtherComponents.vue';
import Navigation from './components/navigation/Navigation.vue';

const routes = [
  { path: '/', component: TabBar },
  { path: '/form', component: Form },
  { path: '/tables', component: Tables },
  { path: '/elements', component: OtherElements },
  { path: '/components', component: OtherComponents },
  { path: '/navigation', component: Navigation }
];

const router = createRouter({
  history: createWebHashHistory('/vue-showcase/'),
  routes
});

const app = createApp(App);
app.use(router);
app.mount('#app');
