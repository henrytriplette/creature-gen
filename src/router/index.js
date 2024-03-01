import { createRouter, createWebHashHistory } from "vue-router";

const base_url = "/";

const Home = () => import("@/views/Home.vue");
const Generator = () => import("@/views/Generator.vue");
const GeneratorCreature = () => import("@/views/GeneratorCreature.vue");

const routes = [
    {
        path: base_url,
        name: "Home",
        component: Home,
        meta: {},
    },
    {
        path: base_url + "generator",
        name: "Generators",
        component: Generator,
        children: [
            {
                path: "generatorcreature",
                name: "Creature",
                component: GeneratorCreature,
                meta: {},
            }
        ],
    }
]

const router = createRouter({
    history: createWebHashHistory(), // createWebHistory(base_url_env_history),
    // base: base_url_env_history,
    routes,
});

export default router;
