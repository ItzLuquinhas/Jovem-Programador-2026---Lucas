<template>
    <div>
        <input
            v-model="termo"
            placeholder="Digite algo"
        >
    </div>
</template>

<script>
export default {
    data() {
        return {
            termo: ""
        };
    },

    watch: {
        termo(novoValor, valorAntigo) {
            if (novoValor.length < 3) {
                console.log("termo muito curto");
            } else {
                console.log(
                    `busca mudou de ${valorAntigo} para ${novoValor}`
                );
            }
        }
    }
};
</script>