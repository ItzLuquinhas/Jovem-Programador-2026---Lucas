import {createRouter, createWebHistory} from "vue-router";
import Home from "../views/home.vue";
import Tarefas from "../views/tarefas.vue";
import Sobre from "../views/sobre.vue";
import TarefaDetalhe from "../views/TarefaDetalhe.vue";

const routes = [
    {path: "/", component: Home},
    {path: "/tarefas", component: Tarefas},
    {path: "/sobre", component: Sobre},
    {path: "/tarefa/:id", component: TarefaDetalhe},
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;