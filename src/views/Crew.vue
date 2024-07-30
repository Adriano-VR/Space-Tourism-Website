<script lang="ts">
import { computed, onMounted, ref } from 'vue';
import { Isection } from '../interfaces/interface';
import { obterDados } from '../http/fetch';

export default {
  name: 'Crew',
  setup() {
    const crew = ref<Isection | null>(null);
    const index = ref<number>(0); // Criação do ref

    onMounted(async () => {
      try {
        crew.value = await obterDados();
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    });

    const firstCrewMember = computed(() => {
      return crew.value?.crew[index.value] || null;
    });

    const getImageSrc = (destination: string) => {

      let formattedName = "image-" + destination.toLowerCase().replace(/ /g, "-");

      
      return new URL(`../assets/crew/${formattedName}.png`, import.meta.url).href;

    };

    return { firstCrewMember, index ,getImageSrc};
  },
};
</script>

<template>
    <section class="flex items-center justify-center">
     
      <div class="w-[1275px] h-[600px] flex justify-between flex-col ">
       
        <div class="space-x-6 pb-6">
          <span class="span">02</span>
          <span class="text-preset-5">MEET YOUR CREW</span>
        </div>
        <transition name="fade" mode="out-in">
        <div v-if="firstCrewMember" :key="firstCrewMember.name" class="grid grid-cols-2 justify-items-center">
          <div class="flex flex-col justify-center">
          <h1 class="text-preset-4-4 pb-4">{{ firstCrewMember.role }}</h1>
          <h1 class="text-preset-3 pb-5">{{ firstCrewMember.name }}</h1>
          <h3 class="text-preset-9">{{ firstCrewMember.bio }}</h3>
          </div>
         
          <img :src="getImageSrc(firstCrewMember.name)" :key="firstCrewMember.name" alt="" class="h-[600px] w-[750px]">

        </div>
      </transition>
        <div class="flex h-12 space-x-10 cursor-pointer">
          <div :class="{ selecionado: index === 0, 'big-circle': true }" @click="index = 0"></div>
          <div :class="{ selecionado: index === 1, 'big-circle': true }" @click="index = 1"></div>
          <div :class="{ selecionado: index === 2, 'big-circle': true }" @click="index = 2"></div>
          <div :class="{ selecionado: index === 3, 'big-circle': true }" @click="index = 3"></div>
        </div>

      </div>
  
    </section>
  </template>
  
  

<style scoped>

section {
  background-image: url("../assets/crew/background-crew-desktop.jpg");
  background-size: cover;
  height: 100%;
}


.big-circle {
  width: 15px; /* Ajuste o tamanho conforme necessário */
  height: 15px; /* Ajuste o tamanho conforme necessário */
  border-radius: 50%; /* Isso faz a div ficar circular */
  background-color: white;
  opacity: 0.2;
}
.selecionado{
    opacity: 1 ;
}



</style>
