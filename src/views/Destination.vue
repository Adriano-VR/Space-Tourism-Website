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
        console.log('Fetched data:', objeto.value);
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
    <div class="flex gap-10 flex-col w-[1110px] h-[548px] ">
              <h1 class="desktop-text-preset-5">
                <span class="span">01</span> PICK YOUR DESTINATION
              </h1>
     
            <div class="grid grid-cols-2 items-center h-full">
              <transition name="fade" mode="out-in">
                <img :src="getImageSrc(selecionado)" :key="selecionado" alt="" class="size-96">
              </transition>
              <div>
                <nav class="flex gap-8 box-border font-bellefair cursor-pointer pb-10">
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
                <h1 class="font-bellefair text-8xl font-normal uppercase">{{ dados.name }}</h1>
                <p class="text-[#D0D6F9] text-[18px] leading-8 font-normal font-Barlow">{{ dados.description }}</p>
                <span class="border opacity-25 h-px"></span>
                      <div class="grid grid-cols-2 gap-6 w-full">
                        <div class="flex flex-col items-start gap-3">
                          <span class="font-Barlow_Condensed font-medium text-[14px] leading-4 tracking-[2px] text-[#D0D6F9]">AVG. DISTANCE</span>
                          <span class="font-bellefair font-normal text-[28px] leading-8 text-white uppercase">{{ dados.distance }}</span>
                        </div>
                        <div class="flex flex-col items-start gap-3">
                          <span class="font-Barlow_Condensed font-medium text-[14px] leading-4 tracking-[2px] text-[#D0D6F9]">EST. TRAVEL TIME</span>
                          <span class="font-bellefair font-normal text-[28px] leading-8 text-white uppercase">{{ dados.travel }}</span>
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

 .desktop-text-preset-5 {
  font-family: 'Barlow Condensed';
font-style: normal;
font-weight: 400;
font-size: 28px;
line-height: 34px;
/* identical to box height */
letter-spacing: 4px;
color: #FFFFFF;
 }

 .span{
  font-family: 'Barlow Condensed';
font-style: normal;
font-weight: 700;
font-size: 28px;
line-height: 34px;
/* identical to box height */
letter-spacing: 4.725px;

color: #FFFFFF;

mix-blend-mode: normal;
opacity: 0.25;
 }

 .fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active no final do Vue 2 */ {
  opacity: 0;
}

</style>


 

  