<script lang="ts">
import { defineComponent, onMounted, ref, computed } from 'vue';
import { obterDados } from '../http/fetch';
import { Isection } from '../interfaces/interface';

export default defineComponent({
  name: 'Destination',
  setup() {
    const objeto = ref<Isection | null>(null);

    onMounted(async () => {
      try {
        objeto.value = await obterDados();
        console.log('Fetched data:', objeto.value);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    });

    const filteredDestinations = computed(() => {
      return objeto.value?.destinations.filter(destination => destination.name.toLowerCase() === 'europa') || [];
    });

    return {
      objeto,
      filteredDestinations,
    };
  },
});
</script>

<template>
    <section class="flex items-center justify-center">
        <div class="text-white" v-for="item in filteredDestinations">
        {{ item.name }}
        </div>
    </section>
 
</template>

<style scoped>
section{
    background-image: url("../assets/destination/background-destination-desktop.jpg");
    height: 100vh;
}
</style>