<script lang="ts">
import { defineComponent } from "vue";
import { useHeaderStore } from "../stores/useHeaderStore";
import { RouterLink } from "vue-router";

export default defineComponent({
  name: "HomePage",
  setup() {
    const headerStore = useHeaderStore();

    const handleExploreClick = () => {
      headerStore.setSelecionado("destination");
    };

    return {
      handleExploreClick,
    };
  },
});
</script>

<template>
  <section class="imagem w-full h-full flex items-center justify-center">
    <article class="flex w-[1110px] h-[635px] items-end ">
      <div
        class="grid grid-cols-2 w-full h-[343px] justify-items-end items-center"
      >
        <div class="flex-1 flex flex-col gap-6">
          <p class="text-preset-5">SO, YOU WANT TO TRAVEL TO</p>
          <h1 class="text-preset-1">SPACE</h1>
          <p class="text-preset-9">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div
          class="text-preset-4 custom-button size-72 bg-white rounded-full flex items-center justify-center "
        >
          <RouterLink
            to="/destination"
            class="btn text-black"
            @click="handleExploreClick"
          >
            EXPLORE
          </RouterLink>
        </div>
      </div>
    </article>
  </section>
</template>

<style scoped>
.custom-button {
  outline: none;
  outline: white;
  transition: outline 0.4s;
}
.custom-button:hover {
  outline: 80px solid rgba(255, 255, 255, 0.2);
}
.imagem {
  background-image: url("../assets/home/background-home-desktop.jpg");
  background-size: cover;
}
</style>
