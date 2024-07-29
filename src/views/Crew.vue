<script lang="ts">
import { computed, onMounted, ref } from 'vue';
import { Isection } from '../interfaces/interface';
import { obterDados } from '../http/fetch';
import { Dot } from 'lucide-vue-next';


export default{
    name:'Crew',
    setup(){
            const crew = ref<Isection | null> (null)

            onMounted(async () => {
      try {
        crew.value = await obterDados();
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    });

                    const filteredDestinations = computed(() => {

                return crew.value?.crew.filter(crew => crew.name.toLowerCase() === 'victor glover') || [];
                });


        return {filteredDestinations}
    }
}
</script>

<template>
   <section class="flex items-center justify-center">
    <div class=" w-[1110px] h-[548px]  flex justify-between flex-col">
        <div class="space-x-6 pb-6">
            <span class="span">02</span>
            <span class="text-preset-5">MEET YOUR CREW</span>
        </div>
            <div v-for="crew in filteredDestinations" class="">
            <h1 class="text-preset-4">{{ crew.role }}</h1>
            <h1 class="text-preset-3">{{ crew.name }}</h1>
            <h3 class="text-preset-9">{{ crew.bio }}</h3>
            </div>
            <div class="h-12 space-x-10">
        <div class="ativo"></div>
        <div class="big-circle"></div>
        <div class="big-circle"></div>
        <div class="big-circle"></div>
    </div>
    </div>
    
   </section>

</template>

<style scoped>

section{
    background-image: url('../assets/crew/background-crew-desktop.jpg');
    background-size: cover;
    height: 100%;
}

.ativo{
    background-color: #FFFFFF; 
            width: 15px; /* Ajuste o tamanho conforme necessário */
            height: 15px; /* Ajuste o tamanho conforme necessário */
          
            border-radius: 50%; /* Isso faz a div ficar circular */
            display: inline-block;

}

.big-circle {
            width: 15px; /* Ajuste o tamanho conforme necessário */
            height: 15px; /* Ajuste o tamanho conforme necessário */
            background-color: #979797; /* Ajuste a cor conforme necessário */
            border-radius: 50%; /* Isso faz a div ficar circular */
            display: inline-block;
        }

.span{
    font-family: 'Barlow Condensed';
font-style: normal;
font-weight: 700;
font-size: 28px;
line-height: 34px;
letter-spacing: 4.725px;
color: #FFFFFF;
mix-blend-mode: normal;
opacity: 0.25;
 }
</style>