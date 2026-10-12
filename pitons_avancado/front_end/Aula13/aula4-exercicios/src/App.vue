<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
    <div>
        <h1>Lista de Tarefas</h1>

        <ul>
            <TarefaItem
                v-for="(tarefa, i) in tarefas"
                :key="i"
                :texto="tarefa.texto"
                :feita="tarefa.feita"
                @marcar-feita="tarefa.feita = !tarefa.feita"
            />
        </ul>
    </div>
</template>

<script>
import TarefaItem from "./components/TarefaItem.vue";

export default {
    components: {
        TarefaItem
    },

    data() {
        return {
            tarefas: [
                {
                    texto: "Estudar Vite",
                    feita: false
                },
                {
                    texto: "Revisar props",
                    feita: true
                }
            ]
        };
    }
};
</script>