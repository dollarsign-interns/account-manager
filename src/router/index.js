import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import PaySalary from '../views/salary/PaySalary.vue';
import EmployeeListpay from '../views/salary/EmployeeListpay.vue';
import Employlist from '../views/Employlist.vue';
import SetSalary from '../views/salary/SetSalary.vue';
import inVoice from '../views/saledocuments/inVoice.vue';
import quotaTion from '../views/saledocuments/quotaTion.vue';
import Billing from '../views/saledocuments/Billing.vue';


Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/paysalary',
    name: 'paysalary',
    component: PaySalary,
  },
  {
    path: '/employeelistpay',
    name: 'employeelistpay',
    component: EmployeeListpay,
  },
  {
    path: '/employlist',
    name: 'employlist',
    component: Employlist,
  },
  {
    path: '/setsalary',
    name: 'setsalary',
    component: SetSalary,
  },
  {
    path: '/invoice',
    name: 'invoice',
    component: inVoice,
  },
  {
    path: '/quotation',
    name: 'quotation',
    component: quotaTion,
  },
  {
    path: '/billing',
    name: 'billing',
    component: Billing,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
