<script lang="ts">
import { defineComponent } from 'vue';
import { useHeaderStore } from '../stores/useHeaderStore';
import { RouterLink } from 'vue-router';

export default defineComponent({
  name: 'HomePage',
  setup() {
    const headerStore = useHeaderStore();

    const handleExploreClick = () => {
      headerStore.setSelecionado('destination');
    };

    return {
      handleExploreClick
    };
  }
});
</script>

<template>
  <section class="imagem w-full h-full flex items-center justify-center">
    <article class="flex w-[1110px] h-[635px] items-end text-white">
      <div class="grid grid-cols-2 w-full h-[343px] justify-items-end items-center">
        <div class="flex-1 flex flex-col gap-6">
          <p class="desktop-text-preset-5">SO, YOU WANT TO TRAVEL TO</p>
          <h1 class="desktop-text-preset-1">SPACE</h1>
          <p class="desktop-text-preset-9">Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
        </div>
<<<<<<< HEAD
        <div class="custom-button size-72 bg-white rounded-full flex items-center justify-center desktop-text-preset-4 ">
          <RouterLink to="/destination" class="btn text-black" @click="handleExploreClick">
=======
        <div class="size-72 bg-white rounded-full flex items-center justify-center desktop-text-preset-4">
          <RouterLink to="/destination" class=" text-black" @click="handleExploreClick">
>>>>>>> 163cacaeaad992275c765a5f7072d65b4eb0bbdd
            EXPLORE
          </RouterLink>
        </div>
      </div>
    </article>
  </section>
</template>



<style scoped>

<<<<<<< HEAD
.custom-button {
        
            outline: none;
            outline: white;
            transition: outline 0.4s;
        }

        .custom-button:hover {
            outline: 80px solid rgba(255, 255, 255, 0.2);
        }
=======
>>>>>>> 163cacaeaad992275c765a5f7072d65b4eb0bbdd
.imagem{
background-image: url("../assets/home/background-home-desktop.jpg");
background-size: cover;
}
.desktop-text-preset-5 {
  width: 540px;
height: 34px;
font-family: 'Barlow Condensed';
font-style: normal;
font-weight: 400;
font-size: 28px;
line-height: 34px;
letter-spacing: 4px;
color: #D0D6F9;
}


.desktop-text-preset-1 {
  
  width: 540px;
height: 165px;
font-family: 'Bellefair';
font-style: normal;
font-weight: 400;
font-size: 144px;
line-height: 165px;
color: #FFFFFF;

}



.desktop-text-preset-9 {
  font-family: 'Barlow';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 180%;
color: #D0D6F9;
}


.desktop-text-preset-4 {
  font-family: 'Bellefair';
font-style: normal;
font-weight: 400;
font-size: 32px;
line-height: 37px;
/* identical to box height */
text-transform: uppercase;

color: #0B0D17;

}





</style>