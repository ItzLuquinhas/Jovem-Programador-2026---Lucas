<template>
    <div>
        <h2>Contador: {{ numero }}</h2>

        <button @click="numero++">
            Somar 1
        </button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            numero: 0
        };
    },

    created() {
        console.log("created");
    },

    mounted() {
        console.log("mounted");
    },

    updated() {
        console.log("updated");
    }
};
</script>