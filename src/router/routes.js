import DashboardLayout from "@/layouts/DashboardLayout.vue";
// Admin pages
const Dashboard = () =>
  import(
    /* webpackChunkName: "dashboard" */ "@/pages/dashboardPage/DashboardPage.vue"
  );

const routes = [
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        name: "dashboard",
        component: Dashboard,
      },
      {
        path: "sales",
        name: "sales",
        component: () =>
          import(
            /* webpackChunkName: "dashboard" */ "@/pages/sales/SalesPage.vue"
          ),
      },
    ],
  },
  // { path: "*", component: NotFound },
];

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes;
