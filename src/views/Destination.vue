<script lang="ts">
import { defineComponent, onMounted, ref, computed } from 'vue';
import { obterDados } from '../http/fetch';
import { Isection } from '../interfaces/interface';

export default defineComponent({
  name: 'Destination',
  setup() {
    const objeto = ref<Isection | null>(null);
      const selecionado = ref('moon');

    onMounted(async () => {
      try {
        objeto.value = await obterDados();
   
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    });

    const filteredDestinations = computed(() => {

      return objeto.value?.destinations.filter(destination => destination.name.toLowerCase() === selecionado.value) || [];
    });

    const getImageSrc = (destination: string) => {
      return new URL(`../assets/destination/image-${destination.toLowerCase()}.png`, import.meta.url).href;

    };

    return {
      objeto,
      filteredDestinations,
      selecionado,
      getImageSrc
       };
  },
});
</script>

<template>
  <section class="flex flex-col items-center justify-center text-white">
    <div class="flex gap-10 flex-col w-[1275px] h-[600px] ">
              <h1 class="text-preset-5">
                <span class="span">01</span> PICK YOUR DESTINATION
              </h1>
     
            <div class="grid grid-cols-2 items-center h-full">
              <transition name="fade" mode="out-in">
                <img :src="getImageSrc(selecionado)" :key="selecionado" alt="" class="size-96">
              </transition>
              <div>
                <nav class="text-preset-8 flex gap-8 box-border cursor-pointer pb-10">
                <span
                  v-for="planet in ['moon', 'mars', 'europa', 'titan']"
                  :key="planet"
                  class="py-2 uppercase"
                  :class="{ selecionado: selecionado === planet }"
                  @click="selecionado = planet"
                >
                  {{ planet }}
                </span>
              </nav>
              <transition name="fade" mode="out-in">
                <div v-if="filteredDestinations.length " :key="selecionado" >
                  <div v-for="dados in filteredDestinations" :key="dados.name" class="flex flex-col gap-10 w-[445px]">
                <h1 class="text-preset-2 uppercase">{{ dados.name }}</h1>
                <p class="text-preset-9">{{ dados.description }}</p>
                <span class="border opacity-25 h-px"></span>
                      <div class="grid grid-cols-2 gap-6 w-full">
                        <div class="flex flex-col items-start gap-3">
                          <span class="text-preset-7">AVG. DISTANCE</span>
                          <span class="text-preset-6">{{ dados.distance }}</span>
                        </div>
                        <div class="flex flex-col items-start gap-3">
                          <span class="text-preset-7">EST. TRAVEL TIME</span>
                          <span class="text-preset-6">{{ dados.travel }}</span>
                        </div>
                      </div>
                  </div>

                </div>
              </transition>
              </div>
          
            </div>
           
          
      
      
    </div>
  </section>
</template>


<style scoped>

.selecionado {
  border-bottom: 2px solid;
  padding-bottom: 0; 
}

section{
    background-image: url("../assets/destination/background-destination-desktop.jpg");
    height: 100vh;
    background-size: cover;
}






</style>


 

  