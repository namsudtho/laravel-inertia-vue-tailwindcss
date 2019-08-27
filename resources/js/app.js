import Inertia from 'inertia-vue';
import Vue from 'vue';

import Layout from '@/Shared/Layout';

Vue.config.productionTip = false;
Vue.mixin({
  methods: {
    route: (...args) => window.route(...args).url()
  }
});
Vue.use(Inertia);

let app = document.getElementById('app');

Vue.component('layout', Layout);

new Vue({
  render: h =>
    h(Inertia, {
      props: {
        initialPage: JSON.parse(app.dataset.page),
        resolveComponent: name =>
          import(`@/Pages/${name}`).then(module => module.default)
      }
    })
}).$mount(app);
