import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes";

const router = Router();
function Router() {
  const router = new createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
  });
  return router;
}

export default router;
