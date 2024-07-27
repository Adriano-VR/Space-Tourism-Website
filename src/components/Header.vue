<script lang="ts">
import { defineComponent, watch, ref } from 'vue';
import { useRoute } from 'vue-router';

export default defineComponent({
  name: 'Header',
  setup() {
    const route = useRoute();
    const selecionado = ref<string>('home');

    watch(() => route.path, (newPath) => {
      switch (newPath) {
        case '/':
          selecionado.value = 'home';
          break;
        case '/destination':
          selecionado.value = 'destination';
          break;
        case '/crew':
          selecionado.value = 'crew';
          break;
        case '/technology':
          selecionado.value = 'technology';
          break;
        default:
          selecionado.value = 'home'; // Valor padrão
      }
    }, { immediate: true });

    const setSelecionado = (categoria: string) => {
      selecionado.value = categoria;
    };

    return {
      selecionado,
      setSelecionado
    };
  }
});
</script>

<template>
  <header class="fixed flex pt-10 items-center w-screen h-32 isolate ">
    <div class="flex pl-16 gap-16 w-[976px] h-[48px] items-center -mr-8">
      <RouterLink to="/">  
        <img src="../assets/shared/logo.svg" alt="">
      </RouterLink>
      <span class="w-[800px] h-px bg-white opacity-25 z-10"></span>
    </div>
    <nav>
      <ul class="flex gap-12 w-[976px] h-[96px] items-center px-16 justify-center bg-headerColor backdrop-blur-2xl">
        <li :class="{ selecionado: selecionado === 'home' }" class="desktop-text-preset-8 flex gap-2 h-24 items-center box-border">
          <span class="desktop-text-preset-8-bold">00</span>  
          <RouterLink to="/" @click.native="setSelecionado('home')">HOME</RouterLink>
        </li>
        <li :class="{ selecionado: selecionado === 'destination' }" class="desktop-text-preset-8 flex gap-2 h-24 items-center">
          <span class="desktop-text-preset-8-bold">01</span> 
          <RouterLink to="/destination" @click.native="setSelecionado('destination')">DESTINATION</RouterLink>
        </li>
        <li :class="{ selecionado: selecionado === 'crew' }" class="desktop-text-preset-8 flex gap-2 h-24 items-center">
          <span class="desktop-text-preset-8-bold">02</span> 
          <RouterLink to="/crew" @click.native="setSelecionado('crew')">CREW</RouterLink>
        </li>
        <li :class="{ selecionado: selecionado === 'technology' }" class="desktop-text-preset-8 flex gap-2 h-24 items-center">
          <span class="desktop-text-preset-8-bold">03</span> 
          <RouterLink to="/technology" @click.native="setSelecionado('technology')">TECHNOLOGY</RouterLink>
        </li>
      </ul>
    </nav>
  </header>
</template>



<style scoped>

ul li {
  padding-bottom: 4px; 
  cursor: pointer;
}

.selecionado {
  border-bottom: 4px solid;
  padding-bottom: 0; 
}

.desktop-text-preset-8-bold {
  box-sizing: border-box;
  font-family: 'Barlow Condensed';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 2.7px;
  color: #FFFFFF;
}

.desktop-text-preset-8 {
  box-sizing: border-box;
  font-family: 'Barlow Condensed';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 2px;
  color: #FFFFFF;
}

.border-b-4 {
  border-bottom-width: 4px;
}
</style>
