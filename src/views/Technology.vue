<script lang="ts">
import { computed, onMounted, ref } from 'vue';
import { Isection } from '../interfaces/interface';
import { obterDados } from '../http/fetch';

export default {
  name: 'Crew',
  setup() {
    const tech = ref<Isection | null>(null);
    const index = ref<number>(0); 

    onMounted(async () => {
      try {
        tech.value = await obterDados();
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    });

    const firstCrewMember = computed(() => {
      return tech.value?.technology[index.value] || null;
    });

    const getImageSrc = (destination: string) => {
      let formattedName = "image-" + destination.toLowerCase().replace(/ /g, "-") + "-portrait";        
      return new URL(`../assets/technology/${formattedName}.jpg`, import.meta.url).href;
    };

    return { firstCrewMember, index ,getImageSrc};
  },
};
</script>

<template>
   <section class="flex items-center justify-center  ">
     
     <div class=" h-[600px] w-[1275px] flex flex-col    ">
        
       <div class="space-x-6 pb-6">
         <span class="span">03</span>
         <span class="text-preset-5">SPACE LAUNCH 101</span>
       </div>

    
       
   
        
       
        <div class="flex items-center gap-16  ">
            <div  class="flex items-center gap-16 ">
                           
                                <div class="flex flex-col items-center justify-center  gap-8 text-preset-4 cursor-pointer ">
                                <span :class="{ selecionado: index === 0, 'number': true }" @click="index = 0">1</span>
                                <span :class="{ selecionado: index === 1, 'number': true }" @click="index = 1">2</span>
                                <span :class="{ selecionado: index === 2, 'number': true }" @click="index = 2">3</span>
                                 </div>
                                 <transition name="fade" mode="out-in">

                            <div class="flex gap-6  " v-if="firstCrewMember" :key="firstCrewMember.name">
                                <div class="flex flex-col  justify-center   ">
                                <h1 class="text-preset-4-4 pb-4">the terminology ...</h1>
                                <h1 class="text-preset-3 pb-5">{{ firstCrewMember.name }}</h1>
                                <h3 class="text-preset-9 ">{{ firstCrewMember.description }}</h3>
                               
                                </div>
                                <img :src="getImageSrc(firstCrewMember.name)" :key="firstCrewMember.name" alt="">
                            </div>
                        </transition>
          
                </div>
                        
                    
        
         </div>
        
       

      
   
     

     </div>
 
   </section>
</template>

<style scoped>




section{
    background-image: url('../assets/technology/background-technology-desktop.jpg');
    background-size: cover;
    height: 100%;
}




 .number{
    background-color: transparent;
    border-radius: 50%;
    width: 80px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
    color: #FFFFFF;
    border: 1px solid rgba(255, 255, 255, 0.25);
    gap: 32px;
 }

 .selecionado{
    background-color: #FFFFFF;
    color: black;
 }


</style>