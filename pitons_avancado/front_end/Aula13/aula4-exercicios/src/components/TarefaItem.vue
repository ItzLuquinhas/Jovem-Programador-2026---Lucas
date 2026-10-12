<template>
    <li
        @click="$emit('marcar-feita')"
        :class="{ feita: feita }"
    >
        {{ texto }}
    </li>
</template>

<script>
export default {
    props: ["texto", "feita"],

    emits: ["marcar-feita"],

    created() {
        console.log("tarefa criada:", this.texto);
    },

    mounted() {
        console.log("tarefa na tela");
    },

    watch: {
        feita(novoValor) {
            console.log("feita agora é:", novoValor);
        }
    }
};
</script>

<style scoped>
.feita {
    text-decoration: line-through;
    color: gray;
}
</style>