<template>
    <p>Olá, {{ nome }}!</p>
</template>

<script>
export default {
    props: ["nome"]
};
</script>

<style scoped>
p {
    color: blue;
}
</style>