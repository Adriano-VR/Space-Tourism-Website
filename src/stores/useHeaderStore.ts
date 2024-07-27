// stores/useHeaderStore.ts
import { defineStore } from 'pinia';

export const useHeaderStore = defineStore('header', {
  state: () => ({
    selecionado: 'home'
  }),
  actions: {
    setSelecionado(categoria: string) {
      this.selecionado = categoria;
    }
  }
});
