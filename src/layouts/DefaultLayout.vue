<template>
  
      <Header />
      <main class="h-screen ">
        <router-view></router-view>
      </main>
    
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import Header from '../components/Header.vue';
  
  export default defineComponent({
    name: 'DefaultLayout',
    components: {
      Header
    }
  });
  </script>
  
  <style scoped>
  main {
    padding: 00px; /* Ajuste o padding conforme necessário */
  }
  </style>
  