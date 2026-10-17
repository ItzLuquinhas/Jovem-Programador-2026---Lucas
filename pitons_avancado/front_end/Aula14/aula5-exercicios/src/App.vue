<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <h1>Lista de Tarefas</h1>
  </header>
  
  <nav>
    <router-link to="/">
      Inicio</router-link>
    <router-link to="/tarefas">
      Tarefas</router-link>
    <router-link to="/sobre">
      Sobre</router-link>
  </nav>

  <router-view />

  <footer>
    <h2>Lucas e Victor</h2>
  </footer>
</template>
